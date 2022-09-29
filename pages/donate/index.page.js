import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PropTypes from 'prop-types';
import { useCallback, useContext, useState } from 'react';
import { createPaymentIntent } from '../../api';
import { useCurrencyInput, useInput } from '../../components/Input';
import { stripePublishableKey } from '../../utils/environment';
import { SessionContext } from '../../utils/session';
import DonatePage from './DonatePage';

const DonatePageContainer = () => {
  const elements = useElements();
  const stripe = useStripe();

  const amountInput = useCurrencyInput(null);
  const emailInput = useInput(null);

  const session = useContext(SessionContext);

  const { value: amount } = amountInput;
  const { value: email } = emailInput;

  const submitPayment = useCallback(async () => {
    const { clientSecret } = await createPaymentIntent({ amount, idempotencyKey: session.id });
    const { error: stripeError, ...rest } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: { email },
      },
    });

    if (stripeError) {
      return { error: stripeError };
    }

    console.log({ rest });
    return {};
  }, [amount]);

  return (
    <DonatePage
      amountInput={amountInput}
      emailInput={emailInput}
      CardElement={CardElement}
      submitPayment={submitPayment}
    />
  );
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
