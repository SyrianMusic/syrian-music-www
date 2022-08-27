const jwt = require('jsonwebtoken');
const environment = require('../../utils/environment');

const unauthorizedResponse = {
  statusCode: 401,
  body: JSON.stringify({ error: 'The request did not contain a valid authorization token.' }),
};

exports.handler = async function (event = {}) {
  const { headers = {} } = event;

  const hasAuthHeader = 'authorization' in headers;
  if (!hasAuthHeader) {
    return unauthorizedResponse;
  }

  const token = headers.authorization.replace('Bearer ', '');

  try {
    jwt.verify(token, environment.jwtClientSecret);
  } catch (e) {
    return unauthorizedResponse;
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello World' }),
  };
};
