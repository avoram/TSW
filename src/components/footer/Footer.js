import React from 'react';
import * as styles from './Footer.module.css'; // Define your footer styles here

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Footer content */}
      <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
