import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Layout from '@components/Layout';
import styles from '@styles/home.module.scss';
import TechStackItem from '@components/TechStackItem';

const Home = () => {
  const isDarkMode =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
      : false;

  return (
    <Layout noIndex className={styles.home}>
      <h1>Otman Maowed</h1>
      <div className={styles.links}>
        <Link href="mailto:web@otman.dev">
          <a>Email: web@otman.dev</a>
        </Link>
        <Link href="https://drive.google.com/open?id=1pvT4qTGDJDJboUDofdFPO-7-w8e5tc8A">
          <a>Download my Résumé</a>
        </Link>
      </div>
      <section>
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
            <li>Web Developer</li>
            <li>BSc. Computer Science</li>
            <li>University of Alberta, 2020</li>
            <li>Alberta, Canada</li>
          </ul>
        </div>
      </section>
      <section className={styles.techStack}>
        <h2>Main Tech Stack</h2>
        <hr />
        <Link href="/tech-stack">
          <a className={styles.readMore}>See all frameworks and tools I use &rArr;</a>
        </Link>
        <ul>
          <li>
            <TechStackItem
              src="/images/ts-logo-128.png"
              brand="TypeScript"
              link="https://www.typescriptlang.org/"
            />
          </li>
          <li>
            <TechStackItem src="/images/react.png" brand="ReactJS" link="https://reactjs.org/" />
          </li>
          <li>
            <TechStackItem
              src="/images/GraphQL-mark.png"
              brand="GraphQL"
              link="https://graphql.org/"
            />
          </li>
          <li>
            <TechStackItem src="/images/sass.png" brand="SASS" link="https://sass-lang.com/" />
          </li>
        </ul>
      </section>
      <section>
        <h2>See My Work</h2>
        <hr />
        <Link href="/work-experience?page=0">
          <a className={styles.readMore}>Read more about my work experience &rArr;</a>
        </Link>
        <ul className={styles.work}>
          <li>
            <Link href="https://www.interfacefluidics.com/">
              <a>
                Interface Fluidics
                <div>Previous Work</div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.buddytree.org">
              <a>
                Buddytree
                <div>Past Employer</div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.mooseical.com">
              <a>
                Mooseical
                <div>Personal Project</div>
              </a>
            </Link>
          </li>
        </ul>
      </section>
      <section>
        <h2>Links</h2>
        <hr />
        <ul className={styles.work}>
          <li>
            <TechStackItem
              src={isDarkMode ? '/images/github-light.png' : '/images/github.png'}
              brand="GitHub"
              link="https://github.com/100BC"
            />
          </li>
          <li>
            <TechStackItem
              src="/images/linkedin.png"
              brand="LinkedIn"
              link="https://www.linkedin.com/in/otman-dev/"
              width={56.4}
            />
          </li>
        </ul>
      </section>
    </Layout>
  );
};

export default Home;
