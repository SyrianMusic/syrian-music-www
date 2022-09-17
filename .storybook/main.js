// https://stackoverflow.com/questions/65894711/module-not-found-error-cant-resolve-emotion-styled-base-when-running-story
const path = require('path');
const fs = require('fs');

function getPackageDir(filepath) {
  let currDir = path.dirname(require.resolve(filepath));
  while (true) {
    if (fs.existsSync(path.join(currDir, 'package.json'))) {
      return currDir;
    }
    const { dir, root } = path.parse(currDir);
    if (dir === root) {
      throw new Error(
        `Could not find package.json in the parent directories starting from ${filepath}.`,
      );
    }
    currDir = dir;
  }
}

module.exports = {
  addons: ['@storybook/addon-essentials', '@storybook/addon-links'],
  staticDirs: ['../public'],
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.js',
    '../icons/**/*.stories.mdx',
    '../icons/**/*.stories.js',
    '../pages/**/*.stories.mdx',
    '../pages/**/*.stories.js',
    '../styles/**/*.stories.mdx',
    '../styles/**/*.stories.js',
  ],
  webpackFinal: async (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: /\.ya?ml$/,
            use: 'js-yaml-loader',
          },
        ],
      },
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': getPackageDir('@emotion/react'),
          '@emotion/styled': getPackageDir('@emotion/styled'),
          'emotion-theming': getPackageDir('@emotion/react'),
        },
      },
    };
  },
};
