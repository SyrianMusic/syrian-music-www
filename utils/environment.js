const nodeEnv = process.env.NODE_ENV;
export const isProduction = nodeEnv === 'production';

export default {
  nodeEnv,
  isProduction,
};
