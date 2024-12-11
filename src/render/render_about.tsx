/**
 * Render Contact
 * 2023-2024
 * v 0.0.2
 * 
 * */

// REACT
import React, { FC } from "react";
import { useContext } from "react";
// GATSBY
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
// APP
import { useNode } from "../utils/hu.tsx";
import { MarkdownHtml } from "../components/hc.tsx";
import { RegionContext } from "./../context";

// need to define properly the any... it's very too much and very lazy !
interface Props {
  // data? : any;
}

const paragraphe_styles = {
  marginBottom: "0.5em",
}

const style_image = {
  maxWidth: "300px",
}

export const RenderAbout: FC<Props> =() => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {categorie: {eq: "about"}}}) {
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

  return <>
    <h4>{info.subtitle}</h4>
    <div style={style_image}>
      <StaticImage 	src="./../../medias/visuel/celine_reibel_portrait.jpg" alt="Céline Reibel" 
                        placeholder="blurred" layout="constrained"
                        />
    </div>
    <a href="https://www.studiolecarre.com/" target="_blank">Photo : Studio le carré</a> 
    <p style={paragraphe_styles}>
      <MarkdownHtml html={html} />
    </p>
  </>
}