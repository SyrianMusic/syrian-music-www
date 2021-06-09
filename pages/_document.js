import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <noscript>
            <iframe
              title="google-tag-manager-GTM-PGPNB8B"
              src="https://www.googletagmanager.com/ns.html?id=GTM-PGPNB8B"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
