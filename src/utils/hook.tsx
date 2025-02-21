/**
 * 
 * Hook
 * 2023-2025
 * v 0.1.9
 * 
 * 
 * */
// REACT
import { useState, useEffect } from "react";
// GATSBY
import { graphql, useStaticQuery } from "gatsby"

////////////
// USE NODE
////////////
export function useNode(data : any, lang: string | null) {
  if(lang === null) {
    lang = "en";
  }
  let buf_node = data.allMarkdownRemark.edges[0].node;
  const [node, set_node] = useState(buf_node);
  useEffect(() => {
    for(let i = 0 ; i < data.allMarkdownRemark.edges.length ; i++) {
      if(lang === data.allMarkdownRemark.edges[i].node.frontmatter.lang) {
        buf_node = data.allMarkdownRemark.edges[i].node;
        set_node(buf_node);
      }
    }
  })
  return node;
}


////////////////
// USE METADATA
////////////////
export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description_fr
          description_en
          description_de
          siteUrl
          author
          version
        }
      }
    }
  `)
  return data.site.siteMetadata
} 