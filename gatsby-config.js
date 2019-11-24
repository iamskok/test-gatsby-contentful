module.exports = {
  siteMetadata: {
    title: 'Test Contentful and MarkdownRemark',
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        // spaceId: 'XXXXXXXXXXXX',
        // accessToken: 'XXXXXXXXXXXX',
      },
    },
    `gatsby-transformer-remark`
  ],
}
