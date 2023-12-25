import React, { useState } from "react";
import * as styles from "./index.module.css"; // Import the updated CSS module
import Layout from "../components/layout/Layout";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { scroller } from "react-scroll";
import { graphql, useStaticQuery } from "gatsby";

const HomePage = () => {
  const [logoClicked, setLogoClicked] = useState(false);

  const handleScrollToPortfolio = () => {
    scroller.scrollTo("portfolio", {
      duration: 800,
      offset: -100,
      smooth: "easeInOutQuart",
    });

    setLogoClicked(true);
  };

  return (
    <Layout logoClicked={logoClicked}>
      <div className={styles.homepageWrapper}>
        <video className={styles.homepageVideo} autoPlay loop muted>
          <source
            src="https://www.shutterstock.com/shutterstock/videos/1091047207/preview/stock-footage--k-video-d-rendering-a-luxury-bedroom-interior-with-bedding-sheet-dark-and-gold-tone-modern-style.webm"
            type="video/webm"
          />
          Sorry, your browser does not support embedded videos.
        </video>
      </div>
    </Layout>
  );
};

export default HomePage;
