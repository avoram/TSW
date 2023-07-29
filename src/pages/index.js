// src/pages/index.js
import React from 'react';
import * as styles from './index.module.css';
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout/Layout';

const HomePage = () => {
  return (
    <Layout>
      <div className={styles.homepageWrapper}>
        <StaticImage
          alt="TSW Logo"
          src="../images/tsw.png"
        />
      </div>
      <section id="portfolio">
        portfolio Here
        <br/>
        <br/>
        Try this
      </section>
    </Layout>
  );
};

export default HomePage;
