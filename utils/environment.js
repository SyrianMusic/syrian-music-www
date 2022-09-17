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
  jwtClientSecret: process.env.JWT_CLIENT_SECRET,
  stripeKey: isProduction ? process.env.STRIPE_KEY_PRD : process.env.STRIPE_KEY_TEST,
};
