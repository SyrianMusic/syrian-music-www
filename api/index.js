import jwt from 'jsonwebtoken';
import { jwtClientSecret } from '../utils/environment';

const token = jwt.sign({}, jwtClientSecret);
const authorization = `Bearer ${token}`;

export const createPaymentIntent = async ({ amount, idempotencyKey }) => {
  const res = await fetch('/.netlify/functions/create-payment-intent', {
    method: 'POST',
    headers: { authorization, 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount, idempotencyKey }),
  });

  if (!res.ok) throw new Error(res.statusText);

  const { error, clientSecret } = await res.json();

  if (error) throw new Error(error.message);

  return { clientSecret };
};

// TODO: Move to Contentful Service
export { BaseAPI } from './BaseAPI';
