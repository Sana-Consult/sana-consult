/**
 * About
 * 2023-2024
 * v 0.1.0
 * */
// REACT
import React, { FC } from "react";
// GATSBY
import type { HeadFC, PageProps } from "gatsby"
// APP
import { RenderAbout } from "../render/hr.tsx"
import { Layout } from "../components/hc.tsx";


const About: FC<PageProps> = () => {
  return (
    <Layout>
      <RenderAbout/>
    </Layout>
  )
}

export default About;

export const Head: HeadFC = () => <title>Sana Consult : About</title>
