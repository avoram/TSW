import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import * as styles from './Layout.module.css';
import Scroll from 'react-scroll';
import { useLocation } from '@reach/router';

const Layout = ({ children, logoClicked }) => { // Receive the logoClicked state as a prop
  const [activeLink, setActiveLink] = useState('');
  const [tswLogoClicked, setTswLogoClicked] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const ScrollLink = Scroll.Link;
      ScrollLink.defaultProps = { ...ScrollLink.defaultProps, duration: 500 };

      if (typeof window !== 'undefined') {
        const shouldScrollToPortfolio = window.sessionStorage.getItem('shouldScrollToPortfolio');
        if (!shouldScrollToPortfolio && window.location.hash === '#portfolio') {
          const element = document.getElementById('portfolio');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveLink('portfolio');
          }
        } else {
          const pathname = location.pathname;
          setActiveLink(pathname === '/' ? 'home' : pathname.replace('/', ''));
        }

        window.sessionStorage.removeItem('shouldScrollToPortfolio');
      }
    }, 100);
  }, [location.pathname]);

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navLinks}>
          <Link
            to="/"
            className={`${activeLink === 'home' && activeLink !== 'portfolio' ? styles.activeLink : ''}`}
            onClick={() => setActiveLink('home')}
          >
            Home
          </Link>
          <Link
            to="/#portfolio"
            className={`${styles.portfolioLink} ${activeLink === 'portfolio' && (!tswLogoClicked || logoClicked) ? styles.activePortfolioLink : ''}`}
            onClick={() => {
              setActiveLink('portfolio');
              setTswLogoClicked(false);
            }}
          >
            Portfolio
          </Link>
          <Link
            to="/about"
            getProps={({ isCurrent }) => (isCurrent ? { className: styles.activeLink } : {})}
            onClick={() => setActiveLink('about')}
          >
            About
          </Link>
          <Link
            to="/contact"
            getProps={({ isCurrent }) => (isCurrent ? { className: styles.activeLink } : {})}
            onClick={() => setActiveLink('contact')}
          >
            Contact
          </Link>
        </nav>
      </header>
      <div className={styles.content}>{children}</div>
    </>
  );
};

export default Layout;
