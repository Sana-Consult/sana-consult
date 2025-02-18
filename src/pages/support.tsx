/**
 * Support
 * 2025-2025
 * v 0.1.0
 * */
// REACT
import React, { FC } from "react";
// GATSBY
import type { HeadFC, PageProps } from "gatsby"
// APP
import { RenderSupport } from "../render/hr.tsx"
import { Layout } from "../components/hc.tsx";
import { SEO } from "../components/seo"
import { useContext } from "react"
import { RegionContext } from "../context"

const Support: FC<PageProps> = () => {
  return (
    <Layout>
      <RenderSupport/>
    </Layout>
  )
}

export default Support;

export const Head = () => {
  const { lang } = useContext(RegionContext);
  const title = lang === 'fr' ? 'Support | Sana Consult' : 
                lang === 'de' ? 'Support | Sana Consult' : 
                'Support | Sana Consult';
  const description = lang === 'fr' ? 'Support et assistance pour les clients de Sana Consult' :
                     lang === 'de' ? 'Support und Hilfe für Sana Consult Kunden' :
                     'Support and assistance for Sana Consult clients';
  
  return (
    <SEO 
      title={title}
      description={description}
      pathname="/support"
    />
  )
}
