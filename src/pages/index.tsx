/**
 * Index
 * 2024-2024
 * v 0.0.1
 * 
 * */



// WARNING
// Flash of Unstyled Content (FOUC)

// https://www.digitalocean.com/community/tutorials/how-to-handle-async-data-loading-lazy-loading-and-code-splitting-with-react
// https://stackoverflow.com/questions/59572173/flash-of-unstyled-content-fouc-when-using-gatsby-with-emotion



// REACT
import React, { FC } from "react";
// import asyncRoute from './asyncRoute'
// GATSBY
import type { HeadFC, PageProps } from "gatsby"
// APP
import { RenderHome, RenderAbout } from "./../render/hr.tsx"
import { Layout } from "./../components/hc.tsx";
import { SEO } from "../components/seo"
import { useContext } from "react"
import { RegionContext } from "../context"

// Try to add meta to disable auto translate from safari and google
// https://medium.com/yellowcode/how-to-do-meta-tags-in-gatsbyjs-45245dc68ab9

const IndexPage: FC<PageProps> = () => {
  const { lang } = useContext(RegionContext);
  
  return (
    <div >
      <Layout>
        <RenderHome/>
      </Layout>
    </div>
  )
}

export default IndexPage

export const Head = () => {
  const { lang } = useContext(RegionContext);
  const title = lang === 'fr' ? 'Accueil | Sana Consult' : 
                lang === 'de' ? 'Startseite | Sana Consult' : 
                'Home | Sana Consult';
  
  return (
    <SEO 
      title={title}
      description="Optimize your ophthalmology practice with Sana Consult's expertise. We help streamline operations and enhance patient care."
    />
  )
}
