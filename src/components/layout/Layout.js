// src/components/Layout.js
import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import * as styles from './Layout.module.css';
import Scroll from 'react-scroll';
import { useLocation } from '@reach/router';

const Layout = ({ children }) => {
    const [activeLink, setActiveLink] = useState(''); // State to track the active link
    const location = useLocation(); // Get the current location using reach/router

    useEffect(() => {
        // Delay the script execution slightly to allow time for the home page to render
        setTimeout(() => {
            const ScrollLink = Scroll.Link;
            ScrollLink.defaultProps = { ...ScrollLink.defaultProps, duration: 500 }; // Set default duration for smooth scrolling

            if (typeof window !== 'undefined') {
                const shouldScrollToPortfolio = window.sessionStorage.getItem('shouldScrollToPortfolio');
                if (!shouldScrollToPortfolio && window.location.hash === '#portfolio') {
                    const element = document.getElementById('portfolio');
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                    setActiveLink('portfolio'); // Set the active link state to indicate the active "Portfolio" link
                } else {
                    // Set the active link state based on the current page pathname
                    const pathname = location.pathname;
                    setActiveLink(
                        pathname === '/' ? 'home' : pathname.replace('/', '') // Strip the leading slash from pathname
                    );
                }

                // After scrolling or checking, clear the flag in sessionStorage
                window.sessionStorage.removeItem('shouldScrollToPortfolio');
            }
        }, 100);
    }, [location.pathname]); // Listen for changes in location.pathname

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
                        className={`${styles.portfolioLink} ${activeLink === 'portfolio' ? styles.activePortfolioLink : ''}`}
                        onClick={() => setActiveLink('portfolio')}
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
