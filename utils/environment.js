const PRODUCTION = 'production';
const PREVIEW = 'preview';
const DEVELOPMENT = 'development';
const TEST = 'test';

const nodeEnv = process.env.NEXT_PUBLIC_NODE_ENV || process.env.NODE_ENV;

const getAdobeKey = () => {
  switch (nodeEnv) {
    case PRODUCTION:
    case DEVELOPMENT:
      return process.env.ADOBE_KEY_SYRIANMUSIC;
    case PREVIEW:
      return process.env.ADOBE_KEY_NETLIFY;
    case TEST:
    default:
      return null;
  }
};

const isProduction = nodeEnv === PRODUCTION;

export default {
  nodeEnv,
  isProduction,
  adobeKey: getAdobeKey(),
};

export const jwtClientSecret = process.env.NEXT_PUBLIC_JWT_CLIENT_SECRET;

export const stripePublishableKey = isProduction
  ? process.env.STRIPE_KEY_LIVE
  : process.env.STRIPE_KEY_TEST;
