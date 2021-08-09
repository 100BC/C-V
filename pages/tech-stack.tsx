import React from 'react';

import Layout from '@components/Layout';
import TechStackItem from '@components/TechStackItem';
import styles from '@styles/techStack.module.scss';

const Tech = () => {
  const isDarkMode =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
      : false;

  return (
    <Layout
      title="Otman Maowed | Tech Stack"
      noIndex
      canonicalUrlPath="/tech-stack"
      className={styles.tech}
    >
      <h1>Tech Stack</h1>
      <section>
        <h2>Languages</h2>
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
              src="/images/GraphQL-mark.png"
              brand="GraphQL"
              link="https://graphql.org/"
            />
          </li>
        </ul>
      </section>
      <section>
        <h2>Front-End Tools</h2>
        <hr />
        <ul>
          <li>
            <TechStackItem
              src={isDarkMode ? '/images/nextjs-light.png' : '/images/nextjs-icon-dark.png'}
              brand="NextJS"
              link="https://nextjs.org/"
            />
          </li>
          <li>
            <TechStackItem src="/images/react.png" brand="ReactJS" link="https://reactjs.org/" />
          </li>
          <li>
            <TechStackItem
              src="/images/redux.png"
              brand="Redux"
              link="https://redux.js.org/"
              height={43}
            />
          </li>
          <li>
            <TechStackItem src="/images/sass.png" brand="SASS" link="https://sass-lang.com/" />
          </li>
          <li>
            <TechStackItem src="/images/postcss.png" brand="PostCSS" link="https://postcss.org/" />
          </li>
        </ul>
      </section>
      <section>
        <h2>Back-End Tools</h2>
        <hr />
        <ul>
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
              width={35}
            />
          </li>
          <li>
            <TechStackItem
              src={isDarkMode ? '/images/prisma-light.png' : '/images/prisma.png'}
              brand="Prisma"
              link="https://www.prisma.io/"
              width={40}
            />
          </li>
          <li>
            <TechStackItem
              src="/images/docker.png"
              brand="Docker"
              link="https://www.docker.com/"
              height={34.5}
            />
          </li>
          <li>
            <TechStackItem
              src="/images/redis-cube.png"
              brand="Redis"
              link="https://redis.io/"
              height={41}
            />
          </li>
        </ul>
      </section>
    </Layout>
  );
};

export default Tech;
