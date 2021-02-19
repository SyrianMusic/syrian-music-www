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
          margin-left: ${theme.pxToRem(theme.layout.gutterWidth.mobile)};
          margin-right: ${theme.pxToRem(theme.layout.gutterWidth.mobile)};
        }

        .gutter--left {
          margin-left: ${theme.pxToRem(theme.layout.gutterWidth.mobile)};
        }

        .gutter--right {
          margin-right: ${theme.pxToRem(theme.layout.gutterWidth.mobile)};
        }

        @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}px) {
          .gutters {
            margin-left: ${theme.pxToRem(theme.layout.gutterWidth.desktop)};
            margin-right: ${theme.pxToRem(theme.layout.gutterWidth.desktop)};
          }

          .gutter--left {
            margin-left: ${theme.pxToRem(theme.layout.gutterWidth.desktop)};
          }

          .gutter--right {
            margin-right: ${theme.pxToRem(theme.layout.gutterWidth.desktop)};
          }
        }
      `}
    </style>
  </>
);

export default App;
