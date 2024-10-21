/**
 * Render Legal
 * 2024-2024
 * v 0.0.1
 * */

// REACT
import React, { FC } from "react";
import { useContext } from "react";
// GATSBY
import { useStaticQuery, graphql } from "gatsby";

// APP
import { get_css_value, useNode } from "../utils/hu.tsx";
import { RegionContext } from "./../context.tsx";
import { MarkdownHtml } from "../components/hc.tsx";

// need to define properly the any... it's very too much and very lazy !
interface Props {
  // data? : any;
}

const paragraph_styles = {
  marginBottom: 48,
}

const title_styles = {
  fontFamily: get_css_value("--font_title"),
  color: "var(--color_text_title)",
  marginTop: 24,
  marginBottom: 24,
  maxWidth: 600,
}

export const RenderLegal: FC<Props> =() => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {categorie: {eq: "legal"}}}) {
          edges {
            node {
              frontmatter {
                title
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
  const info = frontmatter.title;

  return <>
      <h2 style={title_styles}>{info}</h2>
      <p style={paragraph_styles}>
        <MarkdownHtml html={html} />
      </p>
  </>
}