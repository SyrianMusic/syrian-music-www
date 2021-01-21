import Head from 'next/head';
import PropTypes from 'prop-types';

const Title = ({ children }) => (
  <Head>
    <title>{children} | Syrian Music Preservation Initiative</title>
  </Head>
);

Title.propTypes = {
  children: PropTypes.node,
};

Title.defaultProps = {
  children: undefined,
};

export default Title;
