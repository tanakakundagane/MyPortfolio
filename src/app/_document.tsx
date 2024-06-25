import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Google Search Console の HTML メタタグをここに追加 */}
        <meta name="google-site-verification" content="dtTPoNAo_BjJd0U4foJJTceYIi4_9_g2Expm0Q6kOHQ" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
