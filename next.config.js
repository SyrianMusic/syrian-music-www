const withYaml = require('next-plugin-yaml');

module.exports = withYaml({
  target: 'serverless',
});
