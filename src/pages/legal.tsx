/**
 * Legal
 * 2023-2025
 * v 0.1.0
 * 
 * */
// REACT
import React, { FC } from "react";
// GATSBY
import type { HeadFC } from "gatsby"
// APP
import { Layout } from "../components/hc";
import { RenderLegal } from "../render/hr";

/*
it's necessary to export the Components Page as default
If it's not do, Gatby Router don't find the page and return an error
*/
interface Props {
  data: any;
}

export const Legal: FC<Props> = ({data}) => {
  return<Layout>
    <RenderLegal/>
  </Layout>;
};

export default Legal;

export const Head: HeadFC = () => <title>Sana Consult : Legal</title>
