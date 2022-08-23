import jwt from 'jsonwebtoken';
import environment from '../../utils/environment';

const unauthorizedResponse = { statusCode: 401 };

exports.handler = async function (event = {}) {
  const { headers = {} } = event;

  const hasAuthHeader = 'Authorization' in headers;
  if (!hasAuthHeader) {
    return unauthorizedResponse;
  }

  const token = headers.Authorization.replace('Bearer ', '');

  try {
    jwt.verify(token, environment.clientSecret);
  } catch (e) {
    return unauthorizedResponse;
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello World' }),
  };
};
