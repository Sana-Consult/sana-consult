/**
 * Legal
 * 2023-2025
 * v 0.2.0
 * 
 * */
// REACT
import React, { FC, useEffect, useState } from "react";
// GATSBY
import { useStaticQuery, graphql } from "gatsby";
// APP
import { RenderLegal } from "../render/hr";
import { Layout, SEO } from "../components/hc.tsx";
import { useNode } from "../utils/hu.tsx";

interface Props {
  data: any;
}

export const Legal: FC<Props> = ({data}) => {
  return<Layout>
    <RenderLegal/>
  </Layout>;
};

export default Legal;

export const Head = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {categorie: {eq: "legal"}}}) {
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
    // Détecter la langue du navigateur
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
  