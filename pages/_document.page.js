import Document, { Html, Head, Main, NextScript } from 'next/document';
import environment from '../utils/environment';

const disableReactDevToolsScript = (
  <script
    dangerouslySetInnerHTML={{
      __html: 'window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {}',
    }}
  />
);

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>{environment.isProduction && disableReactDevToolsScript}</Head>
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
