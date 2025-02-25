/**
 * Client
 * 2025-2025
 * v 0.2.1
 * */
// REACT
import React, { FC, useEffect, useState } from "react";
// GATSBY
import type { PageProps } from "gatsby"
import { useStaticQuery, graphql } from "gatsby";
// APP
import { RenderClient } from "../render/hr.tsx"
import { Layout, SEO } from "../components/hc.tsx";
// import { useContext } from "react"
// import { RegionContext } from "../context"
import { useNode } from "../utils/hu.tsx";


const Client: FC<PageProps> = () => {
  return (
    <Layout>
      <RenderClient/>
    </Layout>
  )
}

export default Client;

// export const Head: HeadFC = () => <title>SanaConsult : Clients</title>

export const Head = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {categorie: {eq: "client"}}}) {
          edges {
            node {
              frontmatter {
                categorie
                seo
                title
                lang
              }
            }
          }
        }
      }
    `
  )
  // Ici au lieu d'utliser le Context qui bug, nous utilisons la détection de language du navigateur, 
  // ce qui permet d'afficher les onglets dans la bonne langue, 
  // mais désactive le choix de l'utilisateur via le bouton langue malheureusement.
  const [language, setLanguage] = useState('');
  useEffect(() => {
    // Détecter la langue du navigateur
    const detectedLanguage = navigator.language || navigator.languages[0];
    setLanguage(detectedLanguage);
  }, []);

  // const { lang } = useContext(RegionContext);
  // ici nous passons "language" à la place "lang" venant du RegionContext
  const {frontmatter } = useNode(data, language);
  const info = frontmatter;
  const title = "SanaConsult : " + String(info.title);
  const path = "/" + String(info.categorie);
  const seo = String(info.seo);
    // console.log("HEAD", lang, path, title, seo);
    return (<SEO
      title={title}
      description={seo}
      pathname={path}/>)
  }
  

