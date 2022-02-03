import PropTypes from 'prop-types';
import { DonatePage } from './DonatePage';
import environment from '../../utils/environment';

const DonatePageContainer = ({ stripeKey }) => {
  const onSubmit = () => {};

  return <DonatePage onSubmit={onSubmit} stripeKey={stripeKey} />;
};

DonatePageContainer.propTypes = {
  stripeKey: PropTypes.string.isRequired,
};

export const getStaticProps = async () => {
  return {
    props: {
      stripeKey: environment.stripeKey,
    },
  };
};

export default DonatePageContainer;
