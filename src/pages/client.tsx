/**
 * Client
 * 2025-2025
 * v 0.1.0
 * */
// REACT
import React, { FC } from "react";
// GATSBY
import type { HeadFC, PageProps } from "gatsby"
// APP
import { RenderClient } from "../render/hr.tsx"
import { Layout } from "../components/hc.tsx";
import { SEO } from "../components/seo"
import { useContext } from "react"
import { RegionContext } from "../context"

const Client: FC<PageProps> = () => {
  return (
    <Layout>
      <RenderClient/>
    </Layout>
  )
}

export default Client;

export const Head = () => {
  const { lang } = useContext(RegionContext);
  const title = lang === 'fr' ? 'Clients | Sana Consult' : 
                lang === 'de' ? 'Kunden | Sana Consult' : 
                'Clients | Sana Consult';
  const description = lang === 'fr' ? 'Découvrez nos clients et leurs succès avec Sana Consult' :
                     lang === 'de' ? 'Entdecken Sie unsere Kunden und ihre Erfolge mit Sana Consult' :
                     'Discover our clients and their success stories with Sana Consult';
  
  return (
    <SEO 
      title={title}
      description={description}
      pathname="/client"
    />
  )
}
