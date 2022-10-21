import { withAuth } from '../utils/auth';
import { STATUS_CODES } from '../utils/http';
import logger from '../utils/logger';
import stripe from '../utils/stripe';

export const createPaymentIntent = async (event = {}) => {
  const { httpMethod } = event;
  if (httpMethod !== 'POST') return { statusCode: STATUS_CODES.METHOD_NOT_ALLOWED };

  try {
    const body = JSON.parse(event.body);

    if (!body.amount) {
      const error = new Error('The request did not contain an amount.');
      error.statusCode = STATUS_CODES.BAD_REQUEST;
      throw error;
    }

    const amount = parseFloat(body.amount);

    if (isNaN(amount)) {
      const error = new Error('The request did not contain a numeric amount.');
      error.statusCode = STATUS_CODES.BAD_REQUEST;
      throw error;
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: 'usd',
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    };
  } catch (error) {
    if (error.type === 'StripeAuthenticationError') {
      error.message = 'The Stripe secret key is not set in this environment.';
    }

    if (error.type === 'StripeInvalidRequestError') {
      error.message = error.raw.message;
    }

    logger.error(error);
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({
        error: {
          message: error.message,
        },
      }),
    };
  }
};

export const handler = withAuth(createPaymentIntent);
