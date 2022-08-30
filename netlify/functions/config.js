import { verify } from 'jsonwebtoken';
import { jwtClientSecret, stripePublishableKey } from '../utils/environment';
import { STATUS_CODES } from '../utils/http';

const unauthorizedResponse = {
  statusCode: STATUS_CODES.UNAUTHORIZED,
  body: JSON.stringify({ error: 'The request did not contain a valid authorization token.' }),
};

export const handler = async function config(event = {}) {
  const { headers = {}, httpMethod } = event;

  if (httpMethod !== 'GET') return { statusCode: STATUS_CODES.METHOD_NOT_ALLOWED };

  if (!headers?.authorization) return unauthorizedResponse;

  const token = headers.authorization.replace('Bearer ', '');

  try {
    verify(token, jwtClientSecret);
  } catch (e) {
    return unauthorizedResponse;
  }

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
