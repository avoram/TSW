// src/components/Header.js
import React from 'react';
import { Link } from 'gatsby';
import * as styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navLinks}>
        <Link to="/" activeClassName={styles.activeLink}>
          Home
        </Link>
        <Link to="/about" activeClassName={styles.activeLink}>
          About
        </Link>
        <Link to="/contact" activeClassName={styles.activeLink}>
          Contact
        </Link>
        <Link to="/#portfolio" className={styles.portfolioLink}>
          Portfolio
        </Link>
      </nav>
    </header>
  );
};

export default Header;
