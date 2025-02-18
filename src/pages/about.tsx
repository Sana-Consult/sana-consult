/**
 * About
 * 2023-2024
 * v 0.1.0
 * */
// REACT
import React, { FC } from "react";
// GATSBY
import type { HeadFC, PageProps } from "gatsby"
// APP
import { RenderAbout } from "../render/hr.tsx"
import { Layout } from "../components/hc.tsx";
import { SEO } from "../components/seo"
import { useContext } from "react"
import { RegionContext } from "../context"

const About: FC<PageProps> = () => {
  return (
    <Layout>
      <RenderAbout/>
    </Layout>
  )
}

export default About;

export const Head = () => {
  const { lang } = useContext(RegionContext);
  const title = lang === 'fr' ? 'À propos | Sana Consult' : 
                lang === 'de' ? 'Über uns | Sana Consult' : 
                'About | Sana Consult';
  const description = lang === 'fr' ? 'Découvrez Sana Consult et notre expertise en optimisation des cabinets d\'ophtalmologie' :
                     lang === 'de' ? 'Erfahren Sie mehr über Sana Consult und unsere Expertise in der Optimierung von Augenarztpraxen' :
                     'Learn about Sana Consult and our expertise in optimizing ophthalmology practices';
  
  return (
    <SEO 
      title={title}
      description={description}
      pathname="/about"
    />
  )
}
