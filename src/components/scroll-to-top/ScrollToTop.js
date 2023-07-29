// src/components/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from '@reach/router';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/#portfolio') {
      const element = document.getElementById('portfolio');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
