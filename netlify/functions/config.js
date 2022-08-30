const jwt = require('jsonwebtoken');
const { STATUS_CODES } = require('../utils/http');
const environment = require('../utils/environment');

const unauthorizedResponse = {
  statusCode: STATUS_CODES.UNAUTHORIZED,
  body: JSON.stringify({ error: 'The request did not contain a valid authorization token.' }),
};

exports.handler = async function config(event = {}) {
  const { headers = {} } = event;

  if (!headers?.authorization) return unauthorizedResponse;

  const token = headers.authorization.replace('Bearer ', '');

  try {
    jwt.verify(token, environment.jwtClientSecret);
  } catch (e) {
    return unauthorizedResponse;
  }

  if (!environment.stripePublishableKey) {
    return {
      statusCode: STATUS_CODES.SERVICE_UNAVAILABLE,
      body: JSON.stringify({ error: 'The Stripe publishable key is not set in this environment.' }),
    };
  }

  return {
    statusCode: STATUS_CODES.OKAY,
    body: JSON.stringify({ stripePublishableKey: environment.stripePublishableKey }),
  };
};
