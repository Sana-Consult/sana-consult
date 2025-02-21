require("dotenv").config();

import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `SanaConsult`,
    siteUrl: `https://www.sanaconsult.com`,
    author: `Stanislas Marçais`,
    version: `0.1.0`,
    description_fr:`SanaConsult aide les cabinets d'ophtalmologie à optimiser leur gestion et leur rentabilité, particulièrement pour la chirurgie réfractive. Avec une approche sur mesure, nous améliorons l'expérience patient, structurons l'organisation interne et maximisons la performance financière avec des KPI adaptés. Nos solutions permettent aux professionnels de la vision de se recentrer sur les soins tout en réduisant la charge administrative. Inspirée des standards du service client et de l’aérien, notre expertise garantit un accompagnement stratégique efficace pour une gestion fluide et pérenne.`,
    description_en:`SanaConsult helps ophthalmology practices optimise their management and profitability, particularly for refractive surgery. With a tailored approach, we improve the patient experience, structure the internal organisation and maximise financial performance with appropriate KPIs. Our solutions enable vision professionals to refocus on care while reducing the administrative burden. Inspired by customer service and airline standards, our expertise guarantees effective strategic support for smooth, long-term management.`,
    description_de:`SanaConsult hilft Augenarztpraxen, ihr Management und ihre Rentabilität zu optimieren, insbesondere im Bereich der refraktiven Chirurgie. Mit einem maßgeschneiderten Ansatz verbessern wir die Patientenerfahrung, strukturieren die interne Organisation und maximieren die finanzielle Leistung mit angepassten KPIs. Unsere Lösungen ermöglichen es Augenärzten, sich wieder auf die Behandlung zu konzentrieren und gleichzeitig den Verwaltungsaufwand zu reduzieren. Inspiriert von den Standards des Kundenservice und der Luftfahrt, garantiert unsere Expertise eine effektive strategische Begleitung für ein reibungsloses und nachhaltiges Management.`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-transformer-remark",
    ////////////////////
    // IMAGE
    ////////////////////
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
    ////////////////////
    // MANIFEST
    ////////////////////
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SanaConsult`,
        short_name: `Sana`,
        start_url: `/`,
        display: `standalone`,
        icon: `medias/icon.png`,
      },
    },

    ////////////////////
    // SEO
    ////////////////////
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
    ////////////////////
    // FONT
    ////////////////////
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    //////////////////////
    // FILE SYSTEM
    /////////////////////////
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
  ]
};

export default config;
