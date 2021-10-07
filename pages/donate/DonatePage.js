import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { CardElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SiteLayout from '../../components/SiteLayout';

// https://github.com/stripe/react-stripe-js/blob/master/src/index.ts
// https://stripe.com/docs/js/elements_object/create_element?type=card

export const DonatePage = ({ onSubmit, stripeKey }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  const stripe = useMemo(() => loadStripe(stripeKey), [stripeKey]);

  return (
    <SiteLayout className="gutters" pathname="/donate">
      <Elements stripe={stripe}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="card-details">
            Card details
            <CardElement id="card-details" options={{}} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </Elements>
    </SiteLayout>
  );
};

DonatePage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  stripeKey: PropTypes.string.isRequired,
};

DonatePage.defaultProps = {
  /** The test key used in the Stripe docs */
  stripeKey: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
};
