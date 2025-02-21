/**
 * Client
 * 2025-2025
 * v 0.2.0
 * */
// REACT
import React, { FC } from "react";
// GATSBY
import type { PageProps } from "gatsby"
import { useStaticQuery, graphql } from "gatsby";
// APP
import { RenderClient } from "../render/hr.tsx"
import { Layout, SEO } from "../components/hc.tsx";
import { useContext } from "react"
import { RegionContext } from "../context"
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
  const { lang } = useContext(RegionContext);
  console.log("about.tsx region", lang);
  const {frontmatter } = useNode(data, lang);
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
  

