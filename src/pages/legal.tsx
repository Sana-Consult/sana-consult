/**
 * Legal
 * 2023-2025
 * v 0.2.0
 * 
 * */
// REACT
import React, { FC } from "react";
// GATSBY
import type { HeadFC } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
// APP
import { RenderLegal } from "../render/hr";
import { Layout, SEO } from "../components/hc.tsx";
import { useContext } from "react"
import { RegionContext } from "../context"
import { useNode } from "../utils/hu.tsx";


/*
it's necessary to export the Components Page as default
If it's not do, Gatby Router don't find the page and return an error
*/
interface Props {
  data: any;
}

export const Legal: FC<Props> = ({data}) => {
  return<Layout>
    <RenderLegal/>
  </Layout>;
};

export default Legal;

// export const Head: HeadFC = () => <title>Sana Consult : Legal</title>



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
  