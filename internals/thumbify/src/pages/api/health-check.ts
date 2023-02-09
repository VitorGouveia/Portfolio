import { NextApiHandler } from "next";

const handler: NextApiHandler = async (_, response) => {
  return response.status(200).json({
    ok: true,
    timestamp: new Date().getTime()
  })
}

export default handler