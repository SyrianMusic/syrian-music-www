module.exports = {
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.js',
    '../icons/**/*.stories.mdx',
    '../icons/**/*.stories.js',
    '../styles/**/*.stories.mdx',
    '../styles/**/*.stories.js',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'js-yaml-loader',
    });

    return config;
  },
};
