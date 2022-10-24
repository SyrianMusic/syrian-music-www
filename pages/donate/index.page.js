import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PropTypes from 'prop-types';
import { useCallback, useContext, useState } from 'react';
import { createPaymentIntent } from '../../api';
import { stripePublishableKey } from '../../utils/environment';
import { SessionContext } from '../../utils/session';
import DonatePage from './DonatePage';

const getDeclinedMessage = (stripeError) => {
  switch (stripeError.decline_code) {
    case 'generic_decline':
      return 'There was a problem processing your donation and the payment was not completed. Please check the card details entered and try again.';
    case 'insufficient_funds':
      return 'There was a problem processing your donation and the payment was not completed. Please check the card details entered and try another payment method if this issue persists.';
    case 'lost_card':
      return 'There was a problem processing your donation and the payment was not completed. Please check the card details entered and try another payment method if this issue persists.';
    default:
      return stripeError.message;
  }
};

const getErrorMessage = (stripeError) => {
  console.log(stripeError);
  switch (stripeError.code) {
    case 'card_declined':
      return getDeclinedMessage(stripeError);
    case 'expired_card':
      return 'Your credit card is expired and we were unable to complete your donation. Please check the card details entered and try again.';
    case 'incorrect_cvc':
      return 'There was a problem processing your donation and the payment was not completed. Please check the card details entered and try again.';
    default:
      return stripeError.message;
  }
};

const DonatePageContainer = () => {
  const elements = useElements();
  const stripe = useStripe();

  const session = useContext(SessionContext);

  const submitPayment = useCallback(
    async ({ amount, email, name, address1, address2, city, state }) => {
      try {
        const { clientSecret } = await createPaymentIntent({ amount, idempotencyKey: session.id });
        const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method: {
              card: elements.getElement(CardElement),
              billing_details: {
                email,
                name,
                address: {
                  line1: address1,
                  line2: address2,
                  city,
                  state,
                  country: 'US',
                },
              },
            },
          },
        );

        if (stripeError) {
          const errorMessage = getErrorMessage(stripeError);
          return { error: new Error(errorMessage) };
        }

        if (paymentIntent) {
          return paymentIntent;
        }
        return {};
      } catch (e) {
        console.error(e);
        return {
          error: new Error(
            'Something went wrong, and your donation was not made. Please reload the page and try again.',
          ),
        };
      }
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
