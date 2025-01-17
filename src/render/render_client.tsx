/**
 * Render Support
 * 2025-2025
 * v 0.0.1
 * 
 * */

// REACT
import React, { FC } from "react";
import { useContext } from "react";
// GATSBY
import { useStaticQuery, graphql } from "gatsby";
// APP
import { useNode, get_css_value } from "../utils/hu.tsx";
import { MarkdownHtml, GridLogo } from "../components/hc.tsx";
import { RegionContext } from "../context.tsx";

// need to define properly the any... it's very too much and very lazy !
interface Props {
  // data? : any;
}

const paragraphe_styles = {
  marginBottom: "0.5em",
}

// const style_image = {
//   maxWidth: "300px",
//   border: "2px solid " +get_css_value("--color_border"),
//   borderRadius: "10px",
// }

export const RenderClient: FC<Props> =() => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {categorie: {eq: "client"}}}) {
          edges {
            node {
              frontmatter {
                categorie
                title
                subtitle
                message
                misc
                menu
                lang
              }
              html
            }
          }
        }
      }
    `
  )
  const { lang } = useContext(RegionContext);
  const {frontmatter, html} = useNode(data, lang);
  const info = frontmatter;
  // console.log("info", info);

  return <>
  <h4>{info.title}</h4>
    <GridLogo/>
    {/* <p style={paragraphe_styles}>
      <MarkdownHtml html={html} />
    </p> */}
  </>
}