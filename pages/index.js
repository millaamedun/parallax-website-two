import Head from "next/head";

import Home from "../components/Home";

export default function myApp() {
  return (
    <>
      <Head>
        <title>Parallax Website</title>
        <meta name="description" content="Creating Parallax Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Home />
      </main>
    </>
  );
}
