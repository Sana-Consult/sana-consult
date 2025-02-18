require("dotenv").config();

import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Sana Consult`,
    description: `Optimize your ophthalmology practice performance with Sana Consult's unique expertise, offering an exceptional experience for your team and patients.`,
    siteUrl: `https://www.sanaconsult.com`,
    author: `Stanislas Marçais`,
    version: `0.1.0`,
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
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Available options and their defaults:
        base64Width: 20,
        placeholder: `blurred`,
        breakpoints: [750, 1080, 1366, 1920],
        // forceBase64Format: ``, // valid formats: png,jpg,webp // don't work on OSX
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
        failOnError: true,
      },
    },

    // MANIFEST
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sana Consult`,
        short_name: `Sana`,
        start_url: `/`,
        display: `standalone`,
        icon: `medias/icon.png`,
      },
    },
    // FONT
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    // FILE SYTEM
    // FILE SYSTEM / IMAGE
    // all don't work, may be because is not a same level of researches ?
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `all`,
        path: `${__dirname}/medias/visuel`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    // FILE SYSTEM / MARKDOWN
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
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.sanaconsult.com",
        sitemap: "https://www.sanaconsult.com/sitemap.xml",
        policy: [
          {
            userAgent: "*",
            allow: "/",
            disallow: ["/internal/", "/draft-posts/"], // Add paths you want to block
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
  ],
};

export default config;
