import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import '../../../styles/global.scss';
import * as styles from './Layout.module.css';
import Scroll from 'react-scroll';
import { useLocation } from '@reach/router';
import Footer from '../footer/Footer'; 

const Layout = ({ children, logoClicked }) => {
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

  // Check if the current page is the portfolio page
  const isPortfolioPage = location.pathname === '/portfolio/';

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navLinks}>
          <Link
            to="/"
            getProps={({ isCurrent }) => (isCurrent ? { className: styles.activeLink } : {})}
            onClick={() => setActiveLink('home')}
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            onMouseEnter={() => setActiveLink('portfolio')}
            onMouseLeave={() => setActiveLink('')}
          >
            Portfolio
            {activeLink === 'portfolio' && (
              <div className={styles.submenu}>
                <Link to="/portfolio/residential" className={styles.submenuItem}>
                  Residential
                </Link>
                <Link to="/portfolio/commercial" className={styles.submenuItem}>
                  Commercial
                </Link>
                <Link to="/portfolio/resort" className={styles.submenuItem}>
                  Resort
                </Link>
              </div>
            )}
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
      {/* Conditionally render the footer */}
      {!isPortfolioPage && (
       <Footer></Footer>
      )}
   </>
  );
};

export default Layout;
