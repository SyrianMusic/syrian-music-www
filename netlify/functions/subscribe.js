import { withAuth } from '../utils/auth';
import EmailService from '../utils/email';
import { STATUS_CODES } from '../utils/http';
import logger from '../utils/logger';

const subscribe = async (event) => {
  const { httpMethod } = event;
  if (httpMethod !== 'POST') return { statusCode: STATUS_CODES.METHOD_NOT_ALLOWED };

  try {
    const { email } = JSON.parse(event.body);

    const { error } = await EmailService().subscribe({ email });

    if (error) throw error;

    return { statusCode: 201 };
  } catch (error) {
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

export const handler = withAuth(subscribe);
