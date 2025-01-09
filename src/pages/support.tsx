/**
 * Support
 * 2025-2025
 * v 0.1.0
 * */
// REACT
import React, { FC } from "react";
// GATSBY
import type { HeadFC, PageProps } from "gatsby"
// APP
import { RenderSupport } from "../render/hr.tsx"
import { Layout } from "../components/hc.tsx";


const Support: FC<PageProps> = () => {
  return (
    <Layout>
      <RenderSupport/>
    </Layout>
  )
}

export default Support;

export const Head: HeadFC = () => <title>Sana Consult : Support</title>
