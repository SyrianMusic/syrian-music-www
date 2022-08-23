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

const now = () => {
  switch (nodeEnv) {
    case TEST:
      return new Date(1900, 1, 2).valueOf();
    default:
      return Date.now();
  }
};

const isProduction = nodeEnv === PRODUCTION;

module.exports = {
  nodeEnv,
  isProduction,
  adobeKey: getAdobeKey(),
  now,
  jwtClientSecret: process.env.JWT_CLIENT_SECRET,
};
