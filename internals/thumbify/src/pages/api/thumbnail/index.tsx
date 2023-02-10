/* eslint-disable @next/next/no-head-element */
/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-page-custom-font */
import { Card } from "@/components/card";
import { query } from "@/lib/thumbnail";
import chrome from "chrome-aws-lambda";
import { withOGImage } from "next-api-og-image";

const path = (() => {
  let path = "";
  const resolve = async () => {
    path = await chrome.executablePath;
  };

  resolve();
  return path;
})();

export default withOGImage({
  chrome: {
    executable: path,
  },
  template: {
    react: (queryparams) => {
      return (
        <html>
          <head>
            <script src="https://cdn.tailwindcss.com" />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="anonymous"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap"
              rel="stylesheet"
            />
            {/* {a} */}
          </head>
          <body style={{ fontFamily: "Rubik, sans-serif" }}>
            <Card {...query.parse(queryparams)} />
          </body>
        </html>
      );
    },
  },
  type: "jpeg",
  quality: 70,
  dev: {
    inspectHtml: false,
  },
  width: 1920,
  height: 1080,
});
// const handler = async (request: NextRequest) => {
//   const { searchParams } = new URL(request.url);

//   let params: Record<string, string> = {};

//   searchParams.forEach((value, key) => (params[key] = value));

//   const _params = query.parse(params);

//   return new ImageResponse(<Card {..._params} />, {
//     width: 1920,
//     height: 1080,
//   });
// };

// export default handler;
