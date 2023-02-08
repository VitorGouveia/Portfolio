import type { Page } from 'puppeteer-core';
import chrome from 'chrome-aws-lambda';

const chromeExecPaths = {
  win32: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  linux: '/usr/bin/google-chrome',
  darwin: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
};

// @ts-ignore
const exePath = chromeExecPaths[process.platform] as unknown as string;

interface Options {
  args: string[];
  executablePath: string;
  headless: boolean;
}

export async function getOptions(isDev: boolean): Promise<Options> {
  let options: Options;

  if (isDev) {
    options = {
      args: [],
      executablePath: exePath,
      headless: true,
    };
  } else {
    options = {
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: chrome.headless,
    };
  }

  return options;
}

let _page: Page | null;

const getPage = async (isDev: boolean): Promise<Page> => {
  const launch = await import('puppeteer-core').then((module) => module.launch);

  if (_page) {
    return _page;
  }

  const options = await getOptions(isDev);
  const browser = await launch(options);

  _page = await browser.newPage();

  return _page;
};

export async function getScreenshot(
  html: string,
  isDev: boolean,
): Promise<Buffer> {
  const page = await getPage(isDev);

  await page.setViewport({ width: 1920, height: 1080 });
  await page.setContent(html);
  await page.evaluateHandle('document.fonts.ready');

  const file = await page.screenshot({ type: 'png' });

  return file;
}
