import React, { useState } from 'react';
import * as styles from './index.module.css'; // Import the updated CSS module
import Layout from '../components/layout/Layout';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { scroller } from 'react-scroll';
import { graphql, useStaticQuery } from 'gatsby';

const HomePage = () => {
  const [logoClicked, setLogoClicked] = useState(false);

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
      <div className={styles.homepageWrapper}>
        <Link to="/portfolio">
          <StaticImage
            alt="TSW Logo"
            src="../images/tsw.png"
            className={styles.homepageImage}
          />
        </Link>
      </div>
    </Layout>
  );
};

export default HomePage;
