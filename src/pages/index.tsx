/**
 * Index
 * 2024-2024
 * v 0.0.1
 * 
 * */



// WARNING
// Flash of Unstyled Content (FOUC)

// https://www.digitalocean.com/community/tutorials/how-to-handle-async-data-loading-lazy-loading-and-code-splitting-with-react
// https://stackoverflow.com/questions/59572173/flash-of-unstyled-content-fouc-when-using-gatsby-with-emotion



// REACT
import React, { FC } from "react";
// import asyncRoute from './asyncRoute'
// GATSBY
import type { HeadFC, PageProps } from "gatsby"
// APP
import { RenderHome, RenderAbout } from "./../render/hr.tsx"
import { Layout } from "./../components/hc.tsx";

// Try to add meta to disable auto translate from safari and google
// https://medium.com/yellowcode/how-to-do-meta-tags-in-gatsbyjs-45245dc68ab9

const IndexPage: FC<PageProps> = () => {
  return (
    <div >
      <Layout>
        <RenderHome/>
      </Layout>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Sana Consult</title>
