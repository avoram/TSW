// src/pages/about.js
import React from 'react';
import Layout from '../components/layout/Layout';
import * as styles from './about.module.css'; // Create a separate CSS module for styling

const AboutPage = () => {
  return (
    <Layout>
      <div className={styles.aboutWrapper}>
        <div className={styles.leftSide}>
          <h1>Twin Studio Works</h1>
        </div>
        <div className={styles.rightSide}>
          <p>
            Add some information about your architect firm and what you specialize in.Add some information about your architect firm and what you specialize in.Add some information about your architect firm and what you specialize in.Add some information about your architect firm and what you specialize in.Add some information about your architect firm and what you specialize in.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
