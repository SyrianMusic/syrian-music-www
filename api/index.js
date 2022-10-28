import jwt from 'jsonwebtoken';
import { jwtClientSecret } from '../utils/environment';

const token = jwt.sign({}, jwtClientSecret);
const authorization = `Bearer ${token}`;

export const createPaymentIntent = async ({ amount, description, idempotencyKey }) => {
  const res = await fetch('/.netlify/functions/create-payment-intent', {
    method: 'POST',
    headers: { authorization, 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount, description, idempotencyKey }),
  });

  if (!res.ok) throw new Error(res.statusText);

  const { error, clientSecret } = await res.json();

  if (error) throw new Error(error.message);

  return { clientSecret };
};

export const subscribe = async ({ component, email, url }) => {
  const res = await fetch('/.netlify/functions/subscribe', {
    method: 'POST',
    headers: { authorization, 'Content-Type': 'application/json' },
    body: JSON.stringify({ component, email, url }),
  });

  if (!res.ok) throw new Error(res.statusText);

  const { error } = await res.json();

  if (error) throw new Error(error.message);

  return { ok: true };
};

// TODO: Move to Contentful Service
export { BaseAPI } from './BaseAPI';
