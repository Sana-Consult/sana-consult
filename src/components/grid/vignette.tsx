/**
 * VIGNETTE
 * 2025-2025
 * v 0.0.1
 * 
 */
// REACT
import React, { FC, useContext } from "react";
//GATSBY
import { GatsbyImage } from "gatsby-plugin-image";
import { RegionContext } from "../../context";
import { useStaticQuery, graphql } from "gatsby";
// APP
import { useNode } from "../../utils/hu.tsx";
import { get_css_value } from "../../utils/hu.tsx";

const style_image = {
  border: "2px solid " +get_css_value("--color_border"),
  borderRadius: "10px",
}

interface PropsVignette {
  elem : any;
  index : number;
}

export const Vignette: FC<PropsVignette> = (elem, index) => {
  if (!elem) return null;

  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {categorie: {eq: "client"}}}) {
          edges {
            node {
              frontmatter {
                alt
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
  // je ne comprends pas pourquoi je dois écrire elem.elem pur rentrer dans l'élément
  const {frontmatter, html} = useNode(data, lang);
  const info = frontmatter;

  return (
    <div>
      <div style={style_image}>
      <GatsbyImage image={elem.elem.node.childImageSharp.gatsbyImageData} alt={elem.elem.node.name + " | " + info.alt}/>
      </div>
      <p>{elem.elem.node.name}</p>
    </div>
  );
}