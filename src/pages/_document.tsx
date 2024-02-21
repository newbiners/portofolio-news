import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" style={{scrollBehavior:'smooth'}}>
      <Head />
      <title>GufronDev</title>
        <link rel="icon" href="/favicon.svg" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
