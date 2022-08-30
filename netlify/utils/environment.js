const nodeEnv = process.env.NEXT_PUBLIC_NODE_ENV || process.env.NODE_ENV;

const isProduction = nodeEnv === 'production';

module.exports = {
  stripePublishableKey: isProduction ? process.env.STRIPE_KEY_LIVE : process.env.STRIPE_KEY_TEST,
};
