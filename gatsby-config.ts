import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `SanaConsult`,
    siteUrl: `https://www.yourdomain.tld`,
    version: `0.0.1`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss", 
    "gatsby-transformer-remark",
    // IMAGE
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // FILE
     // FILE
     {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `md content fr`,
        path: `${__dirname}/medias/markdown_content/fr`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `md content en`,
        path: `${__dirname}/medias/markdown_content/en`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `md content de`,
        path: `${__dirname}/medias/markdown_content/de`,
      },
    },
    // {
    // resolve: 'gatsby-source-filesystem',
    // options: {
    //   "name": "pages",
    //   "path": "./src/pages/"
    // },
    // __key: "pages"
    // }
  ]
};

export default config;
