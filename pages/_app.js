import Head from 'next/head';
import theme from '../styles/theme';

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <link rel="stylesheet" href="/stylesheets/reset.css" />
      <link rel="stylesheet" href="/stylesheets/fonts.css" />
      <link rel="stylesheet" href="/stylesheets/global.css" />
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PGPNB8B');`,
        }}
      />
    </Head>
    <Component {...pageProps} />
    <style global jsx>
      {`
        .gutters {
          margin-left: ${theme.pxToRem(theme.layout.gutter.mobile.left)};
          margin-right: ${theme.pxToRem(theme.layout.gutter.mobile.right)};
        }

        .gutter--left {
          margin-left: ${theme.pxToRem(theme.layout.gutter.mobile.left)};
        }

        .gutter--right {
          margin-right: ${theme.pxToRem(theme.layout.gutter.mobile.right)};
        }

        @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}px) {
          .gutters {
            margin-left: ${theme.pxToRem(theme.layout.gutter.desktop)};
            margin-right: ${theme.pxToRem(theme.layout.gutter.desktop)};
          }

          .gutter--left {
            margin-left: ${theme.pxToRem(theme.layout.gutter.desktop)};
          }

          .gutter--right {
            margin-right: ${theme.pxToRem(theme.layout.gutter.desktop)};
          }
        }
      `}
    </style>
  </>
);

export default App;
