import { NextApiHandler } from 'next';

const handler: NextApiHandler = async (request, response) => {
  return response.status(200).json({
    ok: true,
    timestamp: new Date().getTime(),
  });
};

export default handler;
