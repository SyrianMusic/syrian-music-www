import styled from '@emotion/styled';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PropTypes from 'prop-types';
import { useCallback, useContext, useEffect, useState } from 'react';
import { createPaymentIntent } from '../../api';
import { stripePublishableKey } from '../../utils/environment';
import { SessionContext } from '../../utils/session';
import DonatePage from './DonatePage';

const StyledCardElement = styled(CardElement)({});

const updatePaymentIntent = (amount) => {
  console.log('update payment intent', amount);
};

const DonatePageContainer = () => {
  const elements = useElements();
  const stripe = useStripe();

  const session = useContext(SessionContext);

  const [intentSecret, setIntentSecret] = useState(null);
  const [isIntentPending, setIsIntentPending] = useState(false);
  const [pendingAmount, setPendingAmount] = useState(null);

  useEffect(() => {
    if (intentSecret && pendingAmount) {
      updatePaymentIntent(pendingAmount);
      setPendingAmount(null);
    }
  }, [intentSecret, pendingAmount]);

  const updateAmount = useCallback(
    async (amount) => {
      if (!intentSecret && !isIntentPending) {
        setIsIntentPending(true);
        const intent = await createPaymentIntent({
          amount,
          idempotencyKey: session.id,
        });
        setIsIntentPending(false);
        setIntentSecret(intent?.clientSecret);
      } else if (isIntentPending) {
        setPendingAmount(amount);
      } else {
        updatePaymentIntent(amount);
        if (pendingAmount) {
          setPendingAmount(null);
        }
      }
    },
    [intentSecret, isIntentPending, pendingAmount],
  );

  const onChange = useCallback(
    ({ name, value }) => {
      let handler;

      switch (name) {
        case 'amount':
          handler = updateAmount;
          break;
        default:
          console.error(name + ' is not supported');
      }

      if (typeof handler === 'function') {
        try {
          handler(value);
        } catch (e) {
          console.error(e);
        }
      }
    },
    [updateAmount],
  );

  const onSubmit = async () => {
    const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(intentSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (stripeError) {
      console.error(stripeError);
    }

    console.log(paymentIntent);
  };

  return (
    <DonatePage CardElement={StyledCardElement} updateAmount={updateAmount} onSubmit={onSubmit} />
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
