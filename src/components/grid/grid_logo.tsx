/**
 * GRID LOGO
 * 2025-2025
 * v 0.1.0
 * 
 */
// REACT
import React, { FC } from "react";
import { useState } from "react";
// GATSBY
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";


function build_list(edges : any, list : any) {
  // let elem_index = 1;
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
      // elem_index++;
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


const img_grid_style = {
  position: "relative",
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(200px, 1fr))`,
};


interface Props {
  // data? : any;
}

export const GridLogo: FC<Props> = () => {
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
  console.log("liste client", list);
  return <>
    {list.map((elem : any, index : number) => (
              elem !== null ? <GatsbyImage image={elem.img} alt={String(index)}/> : null
            ))}
         
  </>
}



  // if(list !== null) {
  //   return (
  //     <GridImage style={img_grid_style} list={list}/>
  //   );
  // } else return null;



  // <GatsbyImage image={getImage(elem.img)} alt={elem.img.name}/>