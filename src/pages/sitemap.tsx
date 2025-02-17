import React from "react";
import { graphql, Link } from "gatsby";
import { Layout } from "../components/hc";
import { SEO } from "../components/seo";

const SitemapPage = ({}) => {
  return (
    <Layout>
      <h1>Plan du site</h1>
      <div className="sitemap-section">
        <h2>Pages principales</h2>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">Qui sommes-nous ?</Link>
          </li>
          <li>
            <Link to="/support">Nos accompagnements</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="sitemap-section">
        <h2>Informations légales</h2>
        <ul>
          <li>
            <Link to="/legal">Mentions légales</Link>
          </li>
        </ul>
      </div>

      <div className="sitemap-section">
        <h2>Versions linguistiques</h2>
        <ul>
          <li>
            <Link to="/fr">Version française</Link>
          </li>
          <li>
            <Link to="/en">English version</Link>
          </li>
          <li>
            <Link to="/de">Deutsche Version</Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export const Head = () => (
  <SEO
    title="Plan du site - Sana Consult"
    description="Plan du site de Sana Consult - Retrouvez facilement toutes nos pages sur l'optimisation des cabinets d'ophtalmologie"
    lang="fr"
  />
);

export default SitemapPage;
