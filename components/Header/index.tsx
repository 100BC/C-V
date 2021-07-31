import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import styles from './styles.module.scss';

const Header = () => {
  const [headerDark, setHeaderDark] = useState(false);

  const listenScrollEvent = () => {
    if (window.scrollY > 73) {
      return setHeaderDark(true);
    }
    return setHeaderDark(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <header className={[styles.header, `${headerDark ? styles.headerDark : ''}`].join(' ')}>
      <nav className={styles.desktopNav}>
        <Link href="/">
          <a title="Overview">Overview</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
