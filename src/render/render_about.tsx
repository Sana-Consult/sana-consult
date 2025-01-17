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
import { useNode, get_css_value } from "../utils/hu.tsx";
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
  border: "2px solid " +get_css_value("--color_border"),
  borderRadius: "10px",
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
  <h4>{info.title}</h4>
    <h4>{info.subtitle}</h4>
    <div>
      <StaticImage 	style={style_image} src="./../../medias/visuel/celine_reibel_portrait.jpg" alt="Bloc opératoir" 
                        placeholder="blurred" layout="constrained"
                        />
    </div>
    <a href="https://www.studiolecarre.com/" target="_blank">Photo : Studio le carré</a> 
    <p style={paragraphe_styles}>
      <MarkdownHtml html={html} />
    </p>
    <div>
      <StaticImage 	style={style_image} src="./../../medias/visuel/bloc_op.jpg" alt="Bloc opératoir" 
                        placeholder="blurred" layout="constrained"
                        />
    </div>
    <h6>Photo : Étienne Duvernay</h6>
  </>
}