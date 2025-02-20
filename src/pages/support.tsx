/**
 * Support
 * 2025-2025
 * v 0.1.0
 * */
// REACT
import React, { FC } from "react";
// GATSBY
import type { HeadFC, PageProps } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
// APP
import { RenderSupport } from "../render/hr.tsx"
import { Layout, SEO } from "../components/hc.tsx";
import { useContext } from "react"
import { RegionContext } from "../context"
import { useNode } from "../utils/hu.tsx";



const Support: FC<PageProps> = () => {
  return (
    <Layout>
      <RenderSupport/>
    </Layout>
  )
}

export default Support;

// export const Head: HeadFC = () => <title>Sana Consult : Support</title>


export const Head = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {categorie: {eq: "support"}}}) {
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
  const { lang } = useContext(RegionContext);
  console.log("about.tsx region", lang);
  const {frontmatter } = useNode(data, lang);
  const info = frontmatter;
  const title = "Sana Consult : " + String(info.title);
  const path = "/" + String(info.categorie);
  const seo = String(info.seo);
    // console.log("HEAD", lang, path, title, seo);
    return (<SEO
      title={title}
      description={seo}
      pathname={path}/>)
  }
  