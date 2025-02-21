/**
 * Render Home
 * 2024-2024
 * v 0.0.3
 * */

// REACT
import React, { FC } from "react";
import { useContext } from "react";
// GATSBY
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// APP
import { get_css_value, useNode, get_alt_tag } from "../utils/hu.tsx";
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
  marginBottom: 12,
  maxWidth: 600,
}

const style_subtitles = {
  color: "var(--color_text_subtitle)",
  maxWidth: 550,
  marginLeft: 24,
}

const question_styles = {
  marginLeft: 68,
  marginBottom: 12,
}

const paragraph_styles = {
  marginBottom: 48,
}


const style = {
    color: "var(--color_global)",
    padding: "0.25em",
    background: "var(--color_button)",
    fontSize: "1.25rem",
    borderRadius: "0.5em",
    cursor: "pointer",
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

  const alt_logo = {
    fr: "SanaConsult - Optimisation des cabinets d'ophtalmologie", 
    en : "SanaConsult - Ophthalmology Practice Optimization", 
    de : "SanaConsult - Optimierung der Augenarztpraxis"
  }

  return <>
      <div>
        <div style={style_titles}>
          <StaticImage 	src="./../../medias/logo_sana_long.png" alt={get_alt_tag(alt_logo)} 
                        placeholder="blurred" layout="constrained"
                        />
        </div>
        <h5 style={style_subtitles}>{info.subtitle}</h5>
        <h3 style={question_styles}>{info.message}</h3>
        <ButtonCodeNav style={style} what={info.misc} to="/contact"/>
        <p style={paragraph_styles}>
          <MarkdownHtml html={html}/>
        </p>
      </div>
  </>
}