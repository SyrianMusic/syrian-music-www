const isProduction = process.env.NODE_ENV === 'production';

export const jwtClientSecret = process.env.NEXT_PUBLIC_JWT_CLIENT_SECRET;

export const stripePublishableKey = isProduction
  ? process.env.STRIPE_KEY_LIVE
  : process.env.STRIPE_KEY_TEST;

export const stripeSecretKey = isProduction
  ? process.env.STRIPE_SECRET_KEY_LIVE
  : process.env.STRIPE_SECRET_KEY_TEST;
