// src/pages/index.js
import React from 'react';
import * as styles from './index.module.css';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout/Layout';
import { Link } from 'gatsby'; // Import the Link component

const HomePage = () => {
  return (
    <Layout>
      {/* Wrap the StaticImage component with a Link */}
      <Link to="/#portfolio">
        <div className={styles.homepageWrapper}>
          <StaticImage
            alt="TSW Logo"
            src="../images/tsw.png"
          />
        </div>
      </Link>
      <section id="portfolio">
        portfolio Here
        <br />
        <br />
        Try this
      </section>
    </Layout>
  );
};

export default HomePage;
