import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { CustomTheme as theme } from "../../styles/style";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap"
          />
          <link rel="shortcut icon" href="/kalke-logo.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
