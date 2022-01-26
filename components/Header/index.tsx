import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import styles from './styles.module.scss';

const Header = () => {
  const [headerDark, setHeaderDark] = useState(false);

  const listenScrollEvent = () => {
    if (window.scrollY > 40) {
      return setHeaderDark(true);
    }
    return setHeaderDark(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <header
      className={[styles.header, `${headerDark ? styles.headerDark : ''}`].join(
        ' '
      )}
    >
      <nav>
        <Link href="/">
          <a title="Overview">Overview</a>
        </Link>
        <Link href="/tech-stack">
          <a title="Tech Stack">Tech</a>
        </Link>
        <Link href="/work-experience?page=0">
          <a title="Work Experience">Experience</a>
        </Link>
        <Link href="/info">
          <a title="Information">Info</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
