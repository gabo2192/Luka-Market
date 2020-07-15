/* const withDefaults = require('./src/utils/default-options')*/

module.exports = ({ contentPath = 'data', basePath = '/' }) => ({
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: contentPath,
      },
    },
    {
      resolve: 'gatsby-transformer-yaml',
      options: {
        typeName: 'Market',
      },
    },
    `gatsby-plugin-theme-ui`,
  ].filter(Boolean),
});
