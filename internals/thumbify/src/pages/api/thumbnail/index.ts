import { NextApiHandler } from 'next';
import { z, ZodIssue } from 'zod';

import { getThumbnailTemplate } from 'src/lib/thumbnail-template';
import { getScreenshot } from 'src/lib/chromium';

const isDev = !process.env.AWS_REGION;

type ZodError = Error & {
  issues: ZodIssue[];
};

const query = z.object({
  title: z.string(),
  description: z.string(),
  coverUrl: z.string(),
  company: z.enum(['digicode', 'gotech', 'techwizard', 'vitorgouveia']),
});

const handler: NextApiHandler = async (request, response) => {
  try {
    // only allow requests from my github repo
    const { title, description, coverUrl, company } = query.parse(
      request.query,
    );

    const html = getThumbnailTemplate({
      title,
      description,
      coverUrl,
      company,
    });

    if (isDev) {
      response.setHeader('Content-Type', 'text/html');

      return response.end(html);
    }

    const file = await getScreenshot(html, isDev);

    response.setHeader('Content-type', 'image/png');
    response.setHeader(
      'Cache-Control',
      'public, immutable, no-transform, s-maxage=31536000, max-age=31536000',
    );

    return response.status(200).end(file);
  } catch (err) {
    // console.error('error while gereration thumbnail', error);
    const error = err as ZodError;

    const ZOD_ERROR = 'ZodError';

    if (error.name !== ZOD_ERROR) {
      return response.status(500).send('Internal Server Error');
    }

    const [{ path, message, code }] = error.issues;
    const [fieldName] = path;

    if (code === 'invalid_enum_value') {
      return response.status(500).send(`Invalid ${fieldName} value`);
    }

    if (message === 'Required') {
      return response
        .status(500)
        .send(`${fieldName} is ${message.toLowerCase()} in query params`);
    }

    return response.status(500).send('Internal Server Error');
  }
};

export default handler;
