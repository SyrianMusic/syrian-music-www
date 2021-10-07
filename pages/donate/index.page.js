import PropTypes from 'prop-types';
import { DonatePage } from './DonatePage';

const DonatePageContainer = ({ stripeKey }) => {
  const onSubmit = () => {};

  return <DonatePage onSubmit={onSubmit} stripeKey={stripeKey} />;
};

DonatePageContainer.propTypes = {
  stripeKey: PropTypes.string.isRequired,
};

export const getStaticProps = async () => {
  const stripeKey = process.env.STRIPE_KEY;
  return { props: { stripeKey } };
};

export default DonatePageContainer;
