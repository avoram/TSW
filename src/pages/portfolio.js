import React from 'react';
import { Link } from 'gatsby';
import * as styles from './portfolio.module.css'; // Import the portfolio CSS module
import Layout from '../components/layout/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';

const PortfolioPage = () => {
  // Fetch data using useStaticQuery
  const data = useStaticQuery(graphql`
    query {
      allContentfulProjectType(sort: { order: ASC }) {
        nodes {
          title
          description {
            description
          }
          image {
            file {
              url
            }
          }
        }
      }
    }
  `);

  const projectCategories = data.allContentfulProjectType.nodes;

  return (
    <Layout>
      <section className={styles.portfolioSection}>
        <div className={styles.portfolioHeader}>Featured Projects</div>
        <div className={styles.portfolioContainer}>
          {projectCategories.map((category, index) => (
            <div className={styles.categoryCard} key={index}>
              <img
                alt={category.title}
                src={category.image.file.url}
                className={styles.categoryImage}
              />
              <div className={styles.categoryContent}>
                <h2>{category.title}</h2>
                <p>{category.description.description}</p>
                <Link to="/#view-project" className={styles.viewProjectButton}>
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioPage;
