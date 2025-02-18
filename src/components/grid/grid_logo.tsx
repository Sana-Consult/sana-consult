/**
 * GRID LOGO
 * 2025-2025
 * v 0.1.0
 * 
 */
// REACT
import React, { FC, useContext } from "react";
import { useState } from "react";
// GATSBY
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
// APP
import { get_css_value } from "../../utils/hu.tsx";
import { RegionContext } from "../../context";
import { validateAltTag } from "../../utils/image-utils";

const style_image = {
  border: "2px solid " +get_css_value("--color_border"),
  borderRadius: "10px",
}


function build_list(edges : any, list : any) {
  // init the first elem as null to avoid the bug of FullImage compoent when the index is equal to '0'
	list.push(null);

  edges.map(( node : any, index: number ) => {
    if(node.extension === "jpg") {
      const obj = {
        img: node.childImageSharp.gatsbyImageData,
        index: index,
        is_over: false,
        text: ""
      }
      for({node} of edges) {
        if(node.extension === "md" && obj.img.name === node.name) {
          obj.text = node.childrenMarkdownRemark[0];
          break;
        }
      }
      list.push(obj);
    }
  })
  return list;
}

interface PropsVignette {
  elem : any;
  index : number;
}

const Vignette: FC<PropsVignette> = (elem, index) => {
  if (!elem) return null;
  
  const imageName = elem.elem.node.name;
  const { lang } = useContext(RegionContext);
  
  const getPartnerAltText = (name: string, language: string): string => {
    const translations = {
      fr: `${name} - Partenaire de Sana Consult`,
      en: `${name} - Sana Consult Partner`,
      de: `${name} - Sana Consult Partner`
    };
    return translations[language as keyof typeof translations] || translations.fr;
  };

  return (
    <div>
      <div style={style_image}>
        <GatsbyImage 
          image={elem.elem.node.childImageSharp.gatsbyImageData} 
          alt={validateAltTag(getPartnerAltText(imageName, lang || 'fr'))}
        />
      </div>
      <p>{elem.elem.node.name}</p>
    </div>
  );
}


interface PropsGrid {}

export const GridLogo: FC<PropsGrid> = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          filter: {sourceInstanceName: {eq: "all"}, dir: {regex: "/logo_client/"}}
          sort: {base: ASC}
        ) {
          edges {
            node {
              name
              extension
              childImageSharp {
                gatsbyImageData(width: 800, height: 800, placeholder: BLURRED)
              }
            }
          }
        }
      }
    `
  );


  const [list, set_list] = useState([]);;
  if(list.length === 0) {
    set_list(build_list(allFile.edges, list));
  }
  return <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 max-w-[400px] md:max-w-[600px] place-items-center">
    { allFile.edges.map((elem : any, index : number) => {
        return <Vignette elem={elem} index={index}/>
      }
    )}       
  </div>
}
