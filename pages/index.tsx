import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Layout from '@components/Layout';
import styles from '@styles/home.module.scss';
import TechStackItem from '@components/TechStackItem';

const Home = () => {
  return (
    <Layout noIndex>
      <h1>Otman Maoued</h1>
      <i>(ot-man maow-WED)</i>
      <section>
        <div className={styles.info}>
          <Image
            src="/images/otman.png"
            layout="intrinsic"
            width={250}
            height={250}
            quality={100}
            alt="Otman Maoued smiling at the camera"
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
        <ul className={styles.links}>
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
          <li>
            <TechStackItem
              src="/images/email.svg"
              brand="contact@otman.dev"
              link="mailto:contact@otman.dev"
            />
          </li>
          <li>
            <TechStackItem
              src="/images/document.svg"
              brand="Download Résumé"
              link="https://drive.google.com/file/d/1JI6cw9CmJHo19gjH4lZUNnV_o8p5_-BO/view?usp=sharing"
            />
          </li>
        </ul>
      </section>
    </Layout>
  );
};

export default Home;
