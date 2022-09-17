import { verify } from 'jsonwebtoken';
import { STATUS_CODES } from './http';
import { jwtClientSecret } from '../utils/environment';

const unauthorizedResponse = {
  statusCode: STATUS_CODES.UNAUTHORIZED,
  body: JSON.stringify({ error: 'The request did not contain a valid authorization token.' }),
};

export const withAuth = (handler) => async (event) => {
  if (!event?.headers?.authorization) return unauthorizedResponse;

  const token = event.headers.authorization.replace('Bearer ', '');

  try {
    verify(token, jwtClientSecret);
    return await handler(event);
  } catch (e) {
    return unauthorizedResponse;
  }
};
