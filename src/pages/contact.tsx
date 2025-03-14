/**
 * Contact
 * 2023-2025
 * v 0.2.1
 * */
// REACT
import React, { FC, useEffect, useState } from "react";
// GATSBY
import type { PageProps } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
// APP
import { RenderContact } from "../render/hr.tsx"
import { Layout, SEO } from "../components/hc.tsx";
import { get_css_value, useNode } from "../utils/hu.tsx";

const Contact: FC<PageProps> = () => {
  const style_cell = {
    width: "100px",
    height: "42px",
    fontFamily: get_css_value("--font_title"),
    fontWeight: 700,
    fontSize: 18,
    color: get_css_value("--color_text_light"),
    background: get_css_value("--color_button"),
    borderRadius: "0.5em"
  }

  const style_box = {
    padding:"0.5em",
  }

  const style_form = {
    display: "flex",
    flexDirection: "column"
  }
  return (
    <Layout>
      <RenderContact  style_box={style_box}
                      style_cell={style_cell}
                      style_form={style_form}/>
    </Layout>
  )
}

export default Contact;

export const Head = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {categorie: {eq: "contact"}}}) {
          edges {
            node {
              frontmatter {
                categorie
                seo
                title
                lang
              }
            }
          }
        }
      }
    `
  )

  const [language, setLanguage] = useState('');
  useEffect(() => {
    const detectedLanguage = navigator.language || navigator.languages[0];
    setLanguage(detectedLanguage);
  }, []);

  const {frontmatter } = useNode(data, language);
  const info = frontmatter;
  const title = "SanaConsult : " + String(info.title);
  const path = "/" + String(info.categorie);
  const seo = String(info.seo);
  return (<SEO
    title={title}
    description={seo}
    pathname={path}/>)
}
  