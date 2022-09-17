import { withAuth } from '../utils/auth';
import { stripePublishableKey } from '../utils/environment';
import { STATUS_CODES } from '../utils/http';

const config = async (event = {}) => {
  const { httpMethod } = event;

  if (httpMethod !== 'GET') return { statusCode: STATUS_CODES.METHOD_NOT_ALLOWED };

  if (!stripePublishableKey) {
    return {
      statusCode: STATUS_CODES.SERVICE_UNAVAILABLE,
      body: JSON.stringify({ error: 'The Stripe publishable key is not set in this environment.' }),
    };
  }

  return {
    statusCode: STATUS_CODES.OK,
    body: JSON.stringify({ stripePublishableKey: stripePublishableKey }),
  };
};

export const handler = withAuth(config);
