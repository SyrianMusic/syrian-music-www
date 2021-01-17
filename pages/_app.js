import '../styles/reset.css';
import '../styles/fonts.css';
import '../styles/global.css';
import theme from '../styles/theme';

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <style global jsx>
        {`
          a:link.link,
          a:visited.link {
            color: inherit;
            text-decoration-color: transparent;
            transition: color 0.2s ease-in-out, text-decoration-color 0.2s ease-in-out;
          }

          a.link:hover {
            text-decoration-color: ${theme.color.salmon};
            color: ${theme.color.salmon};
            text-decoration: underline;
          }
        `}
      </style>
    </>
  );
};

export default App;
