import '../styles/global.css';

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
