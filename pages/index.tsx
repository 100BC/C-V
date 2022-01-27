import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Layout from '@components/Layout';
import styles from '@styles/home.module.scss';
import TechStackItem from '@components/TechStackItem';

const Home = () => {
  return (
    <Layout noIndex>
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
            width={250}
            height={250}
            quality={100}
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
      <section>
        <h2>Main Tech Stack</h2>
        <hr />
        <Link href="/tech-stack">
          <a className={styles.readMore}>
            See all frameworks and tools I use &rArr;
          </a>
        </Link>
        <ul className={styles.techStack}>
          <li>
            <TechStackItem src="/brands/ts.png" brand="TypeScript" />
          </li>
          <li>
            <TechStackItem src="/brands/react.png" brand="ReactJS" />
          </li>
          <li>
            <TechStackItem src="/brands/graphql.png" brand="GraphQL" />
          </li>
          <li>
            <TechStackItem src="/brands/sass.png" brand="SASS" />
          </li>
        </ul>
      </section>
      <section>
        <h2>See My Work</h2>
        <hr />
        <Link href="/experience/work">
          <a className={styles.readMore}>
            Read more about my work experience &rArr;
          </a>
        </Link>
        <ul className={styles.work}>
          <li>
            <Link href="/experience/work#interfacefluidics">
              <a>
                Interface Fluidics
                <div>Previous Employer</div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/experience/work#buddytree">
              <a>
                Buddytree
                <div>Past Employer</div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/experience/projects#mooseical">
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
        <ul className={styles.techStack}>
          <li>
            <TechStackItem
              src="/brands/github.png"
              brand="GitHub"
              link="https://github.com/100BC"
            />
          </li>
          <li>
            <TechStackItem
              src="/brands/linkedin.png"
              brand="LinkedIn"
              link="https://www.linkedin.com/in/otman-dev/"
              width={42}
            />
          </li>
        </ul>
      </section>
      <section>
        <h2>Contact</h2>
        <hr />
        <Link href="mailto:web@otman.dev">
          <a className={styles.contact}>Email: web@otman.dev</a>
        </Link>
      </section>
    </Layout>
  );
};

export default Home;
