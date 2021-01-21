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
          margin-left: ${theme.pxToRem(theme.layout.gutterWidth)};
          margin-right: ${theme.pxToRem(theme.layout.gutterWidth)};
        }

        .gutter--left {
          margin-left: ${theme.pxToRem(theme.layout.gutterWidth)};
        }

        .gutter--right {
          margin-right: ${theme.pxToRem(theme.layout.gutterWidth)};
        }
      `}
    </style>
  </>
);

export default App;
