import React from 'react';
import Image from 'next/image';

import Layout from '@components/Layout';
import styles from '@styles/home.module.scss';

const Home = () => {
  return (
    <Layout noIndex className={styles.home}>
      <section>
        <h1>Otman Maowed</h1>
        <div className={styles.info}>
          <Image
            src="/images/otman.png"
            layout="intrinsic"
            width={300}
            height={300}
            alt="Otman Maowed smiling at the camera"
            objectFit="cover"
            className={styles.headshot}
          />
          <ul>
            <li>Frontend Developer</li>
            <li>BSc. Computing Science</li>
            <li>University of Alberta, 2020</li>
          </ul>
        </div>
      </section>
      <section className={styles.techStack}>
        <h2>Tech Stack</h2>
        <hr />
        <ul>
          <li>
            <Image
              src="/images/ts-logo-128.png"
              layout="fixed"
              width={48}
              height={48}
              alt="TypeScript Logo"
            />{' '}
            TypeScript
          </li>
          <li>
            <Image
              src="/images/js.png"
              layout="fixed"
              width={48}
              height={48}
              alt="JavaScript Logo"
            />{' '}
            JavaScript
          </li>
          <li>
            <Image
              src="/images/nextjs-icon-dark.png"
              layout="fixed"
              width={48}
              height={48}
              alt="NextJS Logo"
            />{' '}
            NextJS
          </li>
          <li>
            <Image src="/images/react.png" layout="fixed" width={48} height={48} alt="React Logo" />{' '}
            React
          </li>
          <li>
            <Image src="/images/redux.png" layout="fixed" width={48} height={48} alt="Redux Logo" />{' '}
            Redux
          </li>
          <li>
            <Image src="/images/sass.png" layout="fixed" width={48} height={48} alt="Sass Logo" />{' '}
            SCSS
          </li>
          <li>
            <Image
              src="/images/postcss.png"
              layout="fixed"
              width={48}
              height={48}
              alt="PostCSS Logo"
            />{' '}
            PostCSS
          </li>
          <li>
            <Image
              src="/images/GraphQL-mark.png"
              layout="fixed"
              width={48}
              height={48}
              alt="GraphQL Logo"
            />{' '}
            GraphQL
          </li>
        </ul>
      </section>
      <section className={styles.work}>
        <h2>My Work</h2>
        <hr />
        <ul>
          <li>Buddytree</li>
          <li>Mooseical</li>
          <li>B.Bros Finishing</li>
        </ul>
      </section>
    </Layout>
  );
};

export default Home;
