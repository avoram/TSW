import React, { useState } from 'react';
import * as styles from './index.module.css';
import Layout from '../components/layout/Layout';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { scroller } from 'react-scroll';
import { graphql, useStaticQuery } from 'gatsby'; // Import useStaticQuery and graphql

const HomePage = () => {
  const [logoClicked, setLogoClicked] = useState(false);

  // Fetch data using useStaticQuery
  const data = useStaticQuery(graphql`
  query {
    allContentfulProjectType(sort: {order: ASC}) {
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

  console.log('projectCategories ', projectCategories)

  const handleScrollToPortfolio = () => {
    scroller.scrollTo('portfolio', {
      duration: 800,
      offset: -100,
      smooth: 'easeInOutQuart',
    });

    setLogoClicked(true);
  };

  return (
    <Layout logoClicked={logoClicked}>
      <Link to="/#portfolio" onClick={handleScrollToPortfolio}>
        <div className={styles.homepageWrapper}>
          <StaticImage
            alt="TSW Logo"
            src="../images/tsw.png"
            className={styles.homepageImage}
          />
        </div>
      </Link>
      <section id="portfolio">
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
                <p>{category.description.description}</p> {/* Access the inner description property */}
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

export default HomePage;
