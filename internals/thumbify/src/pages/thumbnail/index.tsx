import { useMemo } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Rubik } from "@next/font/google";

import { Company, query } from "@/lib/thumbnail";

const reading = Rubik({
  subsets: ["latin"],
});

const comapniesIcons: Record<Company, JSX.Element> = {
  digicode: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path
        fillRule="evenodd"
        d="M7.1 30.19l11.98-6v0c.98-.5 2.18-.1 2.68.89 .49.98.09 2.18-.9 2.68l-8.42 4.21 8.41 4.21v0c.98.49 1.38 1.69.89 2.68 -.5.98-1.7 1.38-2.69.89l-11.99-6h0c-.99-.5-1.39-1.71-.89-2.69 .19-.39.5-.7.88-.89Zm26.93-12.76v0c.3-1.07 1.41-1.67 2.47-1.37 1.05.3 1.66 1.4 1.36 2.45l-8 27.983v0c-.31 1.06-1.42 1.67-2.48 1.37 -1.07-.31-1.68-1.41-1.38-2.48Zm8.14 7.65v0c.49-.99 1.69-1.4 2.68-.9l12.01 6.01v0c.98.49 1.38 1.7.89 2.69 -.2.38-.51.69-.9.89l-12.02 6.01v0c-1 .48-2.2.08-2.69-.92 -.49-.99-.09-2.18.89-2.68l8.43-4.22 -8.44-4.22h-.001c-.99-.5-1.39-1.7-.9-2.69Z"
        fill="currentColor"
      />
    </svg>
  ),
  gotech: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path
        fillRule="evenodd"
        d="M32.01 56.02H32h-.01v0c-13.26-.01-24-10.75-24-24.01 0-13.26 10.74-24 24-24 13.25 0 23.99 10.74 23.99 24C55.97 45.26 45.23 56 31.98 56Zm-10.47-8.1v0c-.6-1.16-1.11-2.35-1.54-3.57h0c-.07-.2-.26-.34-.47-.34h-2.48l-.001 0c-.28-.01-.51.22-.51.49 -.01.11.03.22.1.31l0 0c1.2 1.43 2.6 2.69 4.15 3.74v0c.22.15.53.08.68-.15 .1-.16.1-.35.02-.51Zm-7.52-7.91h4.18 0c.27 0 .49-.22.49-.49 0-.04-.01-.07-.01-.1h-.001c-.31-1.64-.52-3.29-.62-4.95v0c-.02-.27-.23-.47-.5-.47h-4.93v0c-.28 0-.51.22-.51.5 0 .01 0 .03 0 .05h-.001c.23 1.76.69 3.48 1.38 5.12h-.001c.07.18.26.3.46.3Zm-1.36-10h4.92v0c.26-.01.47-.21.49-.47l0-.001c.09-1.66.3-3.32.61-4.95v0c.05-.27-.13-.53-.39-.58 -.04-.01-.07-.01-.1-.01H14v0c-.21-.01-.39.12-.47.3v0c-.7 1.63-1.16 3.36-1.39 5.12v0c-.04.27.16.52.44.56 .01 0 .03 0 .05 0Zm4.38-10h2.47 0c.21-.01.39-.14.46-.34l0 0c.42-1.23.93-2.42 1.53-3.57h-.001c.12-.25.03-.55-.21-.68 -.17-.09-.36-.08-.51.02l-.001-.001c-1.56 1.04-2.96 2.3-4.16 3.74v0c-.18.21-.14.52.07.7 .08.07.2.11.31.1Zm12.18-7.23c-1.97 1.13-3.69 3.45-4.96 6.53v0c-.11.25.02.55.28.65 .05.02.12.03.18.03h4.74v0c.27 0 .5-.23.5-.5v-6.3h0c-.01-.28-.23-.51-.51-.51 -.09 0-.18.02-.26.06ZM29.48 24h-6.26v0c-.24-.01-.45.16-.5.39l-.001 0c-.35 1.67-.57 3.36-.68 5.06v0c-.02.27.19.51.47.53 0 0 .01 0 .02 0h6.91v0c.27 0 .5-.23.5-.5v-5 0c0-.28-.23-.51-.5-.51 -.01-.01-.01-.01-.01-.01Zm0 10h-6.92v0c-.29 0-.51.22-.51.5 0 0 0 .01 0 .02v-.001c.1 1.7.33 3.39.67 5.06v0c.04.23.25.39.49.39h6.25v0c.27 0 .5-.23.5-.5v-5 0c-.01-.28-.23-.5-.5-.5Zm0 10h-4.75 0c-.28 0-.51.22-.51.5 0 .06.01.12.03.18 1.26 3.08 2.98 5.4 4.95 6.53v0c.24.14.55.05.69-.19 .04-.08.06-.17.06-.26v-6.3 0c0-.28-.23-.51-.5-.51 -.01-.001-.01 0-.01 0Zm21.83-10h-4.93v0c-.27 0-.48.2-.5.46v0c-.1 1.65-.31 3.31-.62 4.94v0c-.06.26.12.52.38.57 .03 0 .06 0 .09 0h4.18v0c.2 0 .38-.13.46-.31v0c.69-1.64 1.15-3.37 1.38-5.13h0c.03-.28-.17-.53-.45-.57 -.02-.01-.04-.01-.06-.01Zm-4.39 10h-2.48v0c-.22 0-.4.13-.47.33v0c-.43 1.22-.94 2.41-1.54 3.57v0c-.13.24-.04.54.2.67 .16.08.35.07.5-.03l0 0c1.55-1.05 2.95-2.31 4.15-3.75v0c.17-.22.13-.53-.08-.71 -.09-.08-.21-.12-.32-.11Zm-12.19 7.22c1.97-1.14 3.68-3.46 4.95-6.54v0c.1-.26-.03-.56-.29-.66 -.06-.03-.13-.04-.19-.04h-4.75v0c-.28 0-.5.22-.5.5v6.29h0c0 .27.22.5.5.5 .08-.01.17-.03.25-.07Zm-.27-11.23h6.25v0c.23 0 .44-.17.49-.4h-.001c.34-1.68.56-3.37.67-5.07l0-.001c.01-.28-.2-.52-.48-.54 -.01-.01-.02-.01-.03-.01h-6.92v0c-.28 0-.5.22-.5.5v5 0c0 .27.22.5.5.5Zm-.5-26.8v6.29 0c0 .27.22.5.5.5h4.74v0c.27-.01.5-.23.5-.51 -.01-.07-.02-.13-.04-.19 -1.27-3.09-2.99-5.41-4.96-6.54v0c-.25-.15-.56-.06-.7.18 -.05.07-.07.16-.07.25Zm0 11.29v5 0c0 .27.22.5.5.5h6.91v0c.27-.01.5-.23.5-.51 -.01-.01-.01-.02-.01-.03v0c-.11-1.71-.34-3.4-.68-5.07v-.001c-.05-.24-.26-.4-.5-.4h-6.26v0c-.28-.01-.5.22-.5.5 -.001 0 0 0 0 0Zm8.46-8.41v0c.59 1.15 1.1 2.34 1.53 3.57v0c.06.19.25.33.46.33h2.47l-.001 0c.27 0 .5-.23.5-.5 0-.12-.04-.23-.11-.32v-.001c-1.21-1.44-2.61-2.7-4.16-3.75v0c-.23-.16-.54-.09-.69.14 -.11.15-.12.34-.03.5Zm2.83 8.49v0c.3 1.63.51 3.28.61 4.94l0-.001c.01.26.23.46.49.46h4.92v-.001c.27-.01.5-.23.5-.51 -.01-.02-.01-.04-.01-.06v0c-.24-1.77-.7-3.49-1.39-5.13v0c-.08-.19-.27-.31-.47-.31h-4.19v0c-.28-.01-.5.21-.5.48 -.01.03 0 .06 0 .09Z"
        fill="currentColor"
      />
    </svg>
  ),
  techwizard: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path
        fillRule="evenodd"
        d="M32.01 56.02v0c-13.26 0-24-10.75-24-24 0-13.26 10.74-24 24-24 13.25 0 24 10.74 24 24v0c0 13.25-10.75 24-24 24Zm13.4-35.42v-.001c-.79-.78-2.06-.78-2.84.01 -.09.08-.16.16-.22.26L29.5 39.259l-5.88-8.42v0c-.64-.91-1.88-1.13-2.79-.5 -.1.06-.19.13-.27.21v0c-.7.73-.77 1.85-.18 2.67L27 42.704v0c.95 1.36 2.83 1.69 4.19.74 .28-.21.54-.46.74-.75l13.59-19.47v0c.59-.82.52-1.94-.18-2.67Z"
        fill="currentColor"
      />
    </svg>
  ),
  vitorgouveia: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <path
        fillRule="evenodd"
        d="M32 56l-.01-.001c-13.26-.01-24-10.75-24-24 0-13.26 10.74-24 24-24 13.25 0 24 10.74 24 24l0-.01c0 13.25-10.75 24-24 24Zm0-38.99c-5.37 0-9.01 4.14-9.01 9.64 0 6.39 4.19 10.35 9 10.35 4.8 0 9-3.97 9-10.36 0-5.51-3.64-9.65-9.01-9.65Zm0 22.98c-6.62 0-11.12 2.31-13.63 5.31l-.01 0c-.35.4-.32 1.01.06 1.38l-.01-.01c7.65 7.07 19.46 7.07 27.12-.01l-.01 0c.38-.38.41-.98.06-1.39 -2.52-3.01-7.01-5.32-13.63-5.32Z"
        transform="scale(0.5,0.5)"
        fill="currentColor"
      />
    </svg>
  ),
};

export default function Page() {
  const router = useRouter();

  const parsedQuery = useMemo(() => {
    if (!("title" in router.query)) {
      return null;
    }

    return query.parse(router.query);
  }, [router.query]);

  const icon = useMemo(() => {
    if (!parsedQuery?.company) return;

    return comapniesIcons[parsedQuery?.company];
  }, [parsedQuery?.company]);

  return (
    <>
      <Head>
        <title>
          {parsedQuery?.title} - {parsedQuery?.company} | Thumbify
        </title>
      </Head>

      <div
        style={{
          backgroundImage: `
            radial-gradient(circle at 25px 25px, hsla(0, 0%, 100%, 0.08) 2%, transparent 0%),
            radial-gradient(circle at 75px 75px, hsla(0, 0%, 100%, 0.08) 2%, transparent 0%)
          `,
          backgroundSize: "100px 100px",
        }}
        className={`bg-system-background h-screen max-h-screen overflow-y-hidden py-20 px-[min(10vw,160px)]`}
      >
        <main className="w-full max-w-[1600px] h-[900px] flex flex-col items-center justify-center gap-16">
          <section className="px-4 py-2 rounded flex items-center gap-2 border border-system-base">
            <div className="w-[64px] h-[64px] flex items-center justify-center text-system-base">
              {icon}
            </div>

            <p
              className={`text-system-base text-3xl font-normal ${reading.className}`}
            >
              A {parsedQuery?.company} company.
            </p>
          </section>

          <header className="flex flex-col items-center gap-2">
            <h1
              className={`text-center text-system-title text-6xl ${reading.className}`}
            >
              {parsedQuery?.title}
            </h1>
            <p
              className={`text-center text-system-base text-3xl font-normal ${reading.className}`}
            >
              {parsedQuery?.description}
            </p>
          </header>

          <section
            style={{ overflow: "overlay" }}
            className="flex items-center justify-center gap-16 w-full h-[420px] border border-system-support rounded bg-system-background"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover brightness-90"
              src={parsedQuery?.coverUrl}
              alt="Banner image"
            />
          </section>
        </main>
      </div>
    </>
  );
}
