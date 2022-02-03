const getNodeEnv = () => process.env.NODE_ENV;
export const isProduction = () => getNodeEnv() === 'production';
