import jwt from 'jsonwebtoken';
import { jwtClientSecret } from '../utils/environment';

const token = jwt.sign({}, jwtClientSecret);
const authorization = `Bearer ${token}`;

export const createPaymentIntent = async ({ amount }) => {
  const res = await fetch('/.netlify/functions/create-payment-intent?amount=0.5', {
    method: 'POST',
    headers: { authorization },
    body: JSON.stringify({ amount }),
  });

  if (!res.ok) throw new Error(res.error?.message || res.statusText);

  const { clientSecret } = await res.json();
  return { clientSecret };
};

// TODO: Move to Contentful Service
export { BaseAPI } from './BaseAPI';
