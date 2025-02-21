/**
 * SEO
 * 2025-2025
 * v 0.0.2
 * */

// REACT
import React, { useContext } from "react";
// APP
import { useSiteMetadata } from "../utils/hu";
import { RegionContext } from "../context";

interface SEOProps {
  title?: string;
  description?: string;
  pathname?: string;
  children?: React.ReactNode;
}

const checkString = (value: any): boolean => {
  return value instanceof String || typeof value === "string";
};

const meta_description = (lang: string | null, info : any): string => {
  if(lang === "fr" && checkString(info.description_fr)) {
    return info.description_fr;
  }
  if(lang === "en" && checkString(info.description_en)) {
    return info.description_en;
  }
  if(lang === "de" && checkString(info.description_de)) {
    return info.description_de;
  }
  else return "no description";
};

export const SEO = ({ title, description, pathname, children }: SEOProps) => {
  const {
    title: default_title,
    description_fr: default_description_fr,
    description_en: default_description_en,
    description_de: default_description_de,
    siteUrl,
    author,
  } = useSiteMetadata();

  const { lang } = useContext(RegionContext);
  const default_description = meta_description(lang, useSiteMetadata())
  const seo = {
    title: title || default_title,
    description: description || default_description,
    url: `${siteUrl}${pathname || ``}`,
    author,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="author" content={seo.author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="google" content="notranslate" />
      <link rel="canonical" href={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      {children}
    </>
  );
};