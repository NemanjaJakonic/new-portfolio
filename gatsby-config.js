/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingId: "G-L5V0HY4ZKB",
      },
    },
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `kvfxa0exfpuk`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
  ],
}
