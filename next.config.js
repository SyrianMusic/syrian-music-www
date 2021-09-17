const withYaml = require('next-plugin-yaml');

module.exports = withYaml({
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  target: 'serverless',
  trailingSlash: true,
});
