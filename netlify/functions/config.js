const jwt = require('jsonwebtoken');
const environment = require('../utils/environment');

const unauthorizedResponse = {
  statusCode: 401,
  body: JSON.stringify({ error: 'The request did not contain a valid authorization token.' }),
};

exports.handler = async function config(event = {}) {
  const { headers = {} } = event;

  if (!headers?.authorization) {
    return unauthorizedResponse;
  }

  const token = headers.authorization.replace('Bearer ', '');

  try {
    jwt.verify(token, environment.jwtClientSecret);
  } catch (e) {
    return unauthorizedResponse;
  }

  if (!environment.stripePublishableKey) {
    return {
      statusCode: 503,
      body: JSON.stringify({ error: 'The Stripe publishable key is not set in this environment.' }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ stripePublishableKey: environment.stripePublishableKey }),
  };
};
