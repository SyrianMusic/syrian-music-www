import { withAuth } from '../utils/auth';
import EmailService from '../utils/email';
import { STATUS_CODES } from '../utils/http';

const subscribe = async (event) => {
  const { httpMethod } = event;
  if (httpMethod !== 'POST') return { statusCode: STATUS_CODES.METHOD_NOT_ALLOWED };

  const res = await EmailService().ping();

  return {
    statusCode: 200,
    body: JSON.stringify(res),
  };
};

export const handler = withAuth(subscribe);
