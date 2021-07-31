import React from 'react';
import Image from 'next/image';

import Layout from '@components/Layout';
import styles from '@styles/home.module.scss';
import TechStackItem from '@components/TechStackItem';

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
            <TechStackItem
              src="/images/ts-logo-128.png"
              brand="TypeScript"
              link="https://www.typescriptlang.org/"
            />
          </li>
          <li>
            <TechStackItem
              src="/images/js.png"
              brand="JavaScript"
              link="https://www.javascript.com/"
            />
          </li>
          <li>
            <TechStackItem
              src="/images/nextjs-icon-dark.png"
              brand="NextJS"
              link="https://nextjs.org/"
            />
          </li>
          <li>
            <TechStackItem src="/images/react.png" brand="React" link="https://reactjs.org/" />
          </li>
          <li>
            <TechStackItem src="/images/redux.png" brand="Redux" link="https://redux.js.org/" />
          </li>
          <li>
            <TechStackItem src="/images/sass.png" brand="SCSS" link="https://sass-lang.com/" />
          </li>
          <li>
            <TechStackItem src="/images/postcss.png" brand="PostCSS" link="https://postcss.org/" />
          </li>
          <li>
            <TechStackItem
              src="/images/GraphQL-mark.png"
              brand="GraphQL"
              link="https://graphql.org/"
            />
          </li>
          <li>
            <TechStackItem
              src="/images/express.png"
              brand="ExpressJS"
              link="https://expressjs.com/"
            />
          </li>
          <li>
            <TechStackItem
              src="/images/firebase.png"
              brand="Firebase"
              link="https://firebase.google.com/"
              width={32}
            />
          </li>
          <li>
            <TechStackItem
              src="/images/prisma.png"
              brand="Prisma 2"
              link="https://www.prisma.io/"
              width={40}
            />
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
