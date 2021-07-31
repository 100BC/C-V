import React from 'react';
import Link from 'next/link';

import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.desktopNav}>
        <Link href="/">
          <a title="Overview">Overview</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
