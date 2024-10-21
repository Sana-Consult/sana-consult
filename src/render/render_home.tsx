/**
 * Render Home
 * 2024-2024
 * v 0.0.2
 * */

// REACT
import React, { FC } from "react";
import { useContext } from "react";
// GATSBY
import { useStaticQuery, graphql } from "gatsby";

// APP
import { get_css_value, useNode } from "../utils/hu.tsx";
import { ButtonCodeNav } from "../components/hc.tsx";
import { RegionContext } from "./../context.tsx";
import { MarkdownHtml } from "../components/hc.tsx";

// need to define properly the any... it's very too much and very lazy !
interface Props {
  // data? : any;
}


const style_titles = {
  fontFamily: get_css_value("--font_title"),
  marginTop: 24,
  maxWidth: 600,
}

const style_subtitles = {
  color: "var(--color_text_subtitle)",
  marginLeft: 24,
}

const question_styles = {
  marginLeft: 24,
  marginBottom: -8,
}

const paragraph_styles = {
  marginBottom: 48,
}

export const RenderHome: FC<Props> =() => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {categorie: {eq: "home"}}}) {
          edges {
            node {
              frontmatter {
                title
                subtitle
                message
                misc
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

  return <>
      <h1 style={style_titles}>{info.title}</h1>
      <h4 style={style_subtitles}>{info.subtitle}</h4>
      <h3 style={question_styles}>{info.message}</h3>
      <p>
        <ButtonCodeNav what={info.misc} to="/contact"/>
      </p>
      <p style={paragraph_styles}>
        <MarkdownHtml html={html} />
      </p>
  </>
}