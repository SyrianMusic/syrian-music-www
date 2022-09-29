import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PropTypes from 'prop-types';
import { useCallback, useContext, useState } from 'react';
import { createPaymentIntent } from '../../api';
import { stripePublishableKey } from '../../utils/environment';
import { SessionContext } from '../../utils/session';
import DonatePage from './DonatePage';

const DonatePageContainer = () => {
  const elements = useElements();
  const stripe = useStripe();

  const session = useContext(SessionContext);

  const submitPayment = useCallback(
    async ({ amount, email }) => {
      const { clientSecret } = await createPaymentIntent({ amount, idempotencyKey: session.id });
      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: { email },
        },
      });

      if (stripeError) {
        return { error: stripeError };
      }

      if (paymentIntent) {
        return paymentIntent;
      }
      return {};
    },
    [elements],
  );

  return <DonatePage CardElement={CardElement} submitPayment={submitPayment} />;
};

const StripeWrapper = ({ stripeKey }) => {
  const host = typeof window !== 'undefined' ? window.location.host : '';

  const [stripePromise] = useState(loadStripe(stripeKey));

  return (
    <Elements
      stripe={stripePromise}
      options={{
        fonts: [
          {
            family: 'Graphik Arabic Web Light',
            src: `url('https://${host}/fonts/GraphikArabic-Light-Web.woff2') format('woff2'), url('https://${host}/fonts/GraphikArabic-Light-Web.woff') format('woff')`,
          },
        ],
        appearance: {
          theme: 'stripe',
          variables: {
            fontFamily: 'Graphik Arabic Web Light',
            colorBackground: 'red',
          },
        },
      }}>
      <DonatePageContainer stripeKey={stripeKey} />
    </Elements>
  );
};

StripeWrapper.propTypes = { stripeKey: PropTypes.string.isRequired };

export default StripeWrapper;

export const getStaticProps = async () => {
  return { props: { stripeKey: stripePublishableKey } };
};
