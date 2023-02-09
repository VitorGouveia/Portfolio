import { query } from "@/lib/thumbnail";
import type { NextApiHandler } from "next";

import chrome from "chrome-aws-lambda";

const screenshot = async (url: string) => {
  const options = process.env.AWS_REGION
    ? {
        args: chrome.args,
        executablePath: await chrome.executablePath,
        headless: chrome.headless,
      }
    : {
        args: [],
        executablePath:
          process.platform === "win32"
            ? "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
            : process.platform === "linux"
            ? "/usr/bin/google-chrome"
            : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
      };

  const browser = await chrome.puppeteer.launch(options);
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto(url, { waitUntil: "networkidle0" });
  return await page.screenshot({ type: "jpeg" });
};

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
    console.error(error);
    return response.status(500).send({
      message: "Internal server error",
      error: error,
    });
  }
};

export default handler;
