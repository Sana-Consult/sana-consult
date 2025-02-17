import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface SEOProps {
  title?: string
  description?: string
  lang?: string
  meta?: Array<{ name: string; content: string }>
}

export function SEO({ title, description, lang = "fr", meta = [] }: SEOProps) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  const metaDescription = description || site.siteMetadata.description

  const schemaOrgJSONLD = {
    "@context": "http://schema.org",
    "@type": "ProfessionalService",
    "name": "Sana Consult",
    "description": metaDescription,
    "url": "https://www.sanaconsult.com",
    "telephone": "+33XXXXXXXXX", // À compléter
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "", // À compléter
      "addressLocality": "", // À compléter
      "postalCode": "", // À compléter
      "addressCountry": "FR"
    },
    "image": "", // Ajouter le logo
    "priceRange": "€€", // Optionnel
    "openingHours": "", // À compléter
    "sameAs": [ // Ajouter les réseaux sociaux
      // "https://www.linkedin.com/company/sana-consult",
      // etc.
    ]
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
      <link rel="alternate" hrefLang="fr" href="https://www.sanaconsult.com/fr/" />
      <link rel="alternate" hrefLang="en" href="https://www.sanaconsult.com/en/" />
      <link rel="alternate" hrefLang="de" href="https://www.sanaconsult.com/de/" />
      <link rel="alternate" hrefLang="x-default" href="https://www.sanaconsult.com/" />
    </Helmet>
  )
}
