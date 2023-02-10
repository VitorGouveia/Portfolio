import { useMemo } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { query } from "@/lib/thumbnail";
import { Card } from "@/components/card";

export default function Page() {
  const router = useRouter();

  const parsedQuery = useMemo(() => {
    if (!("title" in router.query)) {
      return null;
    }

    return query.parse(router.query);
  }, [router.query]);

  if (!parsedQuery) {
    return <p>loading...</p>;
  }

  return (
    <>
      <Head>
        <title>
          {parsedQuery?.title} - {parsedQuery?.company} | Thumbify
        </title>
      </Head>

      <Card {...parsedQuery} />
    </>
  );
}
