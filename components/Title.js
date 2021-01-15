import Head from 'next/head';
import PropTypes from 'prop-types';

const Title = ({ title }) => (
  <Head>
    <title>{title} | Syrian Music Preservation Initiative</title>
  </Head>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
