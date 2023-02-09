import { screenshot } from "@/lib/puppeteer";
import { query } from "@/lib/thumbnail";
import type { NextApiHandler } from "next";

const SITE_URL = process.env.SITE_URL;

const handler: NextApiHandler = async (request, response) => {
  try {
    const { title, company, coverUrl, description } = query.parse(
      request.query
    );

    if (!SITE_URL) {
      return response.status(500).send("Internal server error");
    }

    const urlToScreenshot = new URL(`${SITE_URL}/thumbnail`);

    urlToScreenshot.searchParams.set("title", title);
    urlToScreenshot.searchParams.set("description", description);
    urlToScreenshot.searchParams.set("company", company);
    urlToScreenshot.searchParams.set("coverUrl", coverUrl);

    const image = await screenshot(urlToScreenshot.href);
    response.setHeader("Content-Type", `image/jpeg`);
    response.setHeader(
      "Cache-Control",
      `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
    );

    return response.status(200).end(image);
  } catch (error) {
    return response.status(500).send("Internal server error");
  }
};

export default handler;
