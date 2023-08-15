/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1, // Adjust the threshold for reveal (percentage of element in view)
        once: true, // Only reveal elements once
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'u8k0c4tvr5ci',
        accessToken: '4FpqRjTkJQhTsAkZsEr5f75tFIf5Lb2cYkzt-tBgqO0',
      },
    }
  ],
}
