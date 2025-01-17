/**
 * Client
 * 2025-2025
 * v 0.1.0
 * */
// REACT
import React, { FC } from "react";
// GATSBY
import type { HeadFC, PageProps } from "gatsby"
// APP
import { RenderClient } from "../render/hr.tsx"
import { Layout } from "../components/hc.tsx";


const Client: FC<PageProps> = () => {
  return (
    <Layout>
      <RenderClient/>
    </Layout>
  )
}

export default Client;

export const Head: HeadFC = () => <title>Sana Consult : Clients</title>
