module.exports = {
  siteMetadata: {
    title: "Henry Li-Heng Chang's Home Page",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem", 
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    }
  ],
};