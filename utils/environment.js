const nodeEnv = process.env.NODE_ENV;
const isProduction = nodeEnv === 'production';

export default {
  nodeEnv,
  isProduction,
  stripeKey: isProduction ? process.env.STRIPE_KEY_PRD : process.env.STRIPE_KEY_TEST,
};
