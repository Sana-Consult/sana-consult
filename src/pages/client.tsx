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
import { useNode } from "../utils/hu.tsx";


const Client: FC<PageProps> = () => {
  return (
    <Layout>
      <RenderClient/>
    </Layout>
  )
}

export default Client;

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
  const [language, setLanguage] = useState('');
  useEffect(() => {
    const detectedLanguage = navigator.language || navigator.languages[0];
    setLanguage(detectedLanguage);
  }, []);

  const {frontmatter } = useNode(data, language);
  const info = frontmatter;
  const title = "SanaConsult : " + String(info.title);
  const path = "/" + String(info.categorie);
  const seo = String(info.seo);
  return (<SEO
    title={title}
    description={seo}
    pathname={path}/>)
}
  

