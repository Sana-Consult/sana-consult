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
import { SEO } from "../components/seo"
import { useContext } from "react"
import { RegionContext } from "../context"

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

export const Head = () => {
  const { lang } = useContext(RegionContext);
  const title = lang === 'fr' ? 'Mentions légales | Sana Consult' : 
                lang === 'de' ? 'Rechtliche Hinweise | Sana Consult' : 
                'Legal Notice | Sana Consult';
  const description = lang === 'fr' ? 'Mentions légales et conditions d\'utilisation de Sana Consult' :
                     lang === 'de' ? 'Rechtliche Hinweise und Nutzungsbedingungen von Sana Consult' :
                     'Legal notice and terms of use for Sana Consult';
  
  return (
    <SEO 
      title={title}
      description={description}
      pathname="/legal"
    />
  )
}
