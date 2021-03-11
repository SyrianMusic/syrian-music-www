import '../styles/reset.css';
import '../styles/fonts.css';
import '../styles/global.css';
import theme from '../styles/theme';

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => (
  <>
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
