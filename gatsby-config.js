/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const postCssImport = require('postcss-import');
const postCssEnv = require('postcss-preset-env');
const postCssCustomProperties = require('postcss-custom-properties');

module.exports = {
  /* Your site config here */
  siteMetadata: { title: 'A gatsby starter' },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          postCssEnv({
            stage: 0,
          }),
          postCssImport(),
          postCssCustomProperties(),
        ],
      },
    },
  ],
};
