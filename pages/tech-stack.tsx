import React from 'react';

import Layout from '@components/Layout';
import TechStackItem from '@components/TechStackItem';
import styles from '@styles/techStack.module.scss';

const Tech = () => {
  return (
    <Layout
      title="Otman Maoued | Tech Stack"
      noIndex
      canonicalUrlPath="/tech-stack"
      className={styles.tech}
    >
      <h1>Tech Stack</h1>
      <div>
        Clicking on a tool or framework will open their respective website
      </div>
      <section>
        <h2>Languages</h2>
        <hr />
        <ul>
          <li>
            <TechStackItem
              src="/brands/ts.png"
              brand="TypeScript"
              link="https://www.typescriptlang.org/"
            />
          </li>
          <li>
            <TechStackItem
              src="/brands/js.png"
              brand="JavaScript"
              link="https://www.javascript.com/"
            />
          </li>
          <li>
            <TechStackItem
              src="/brands/graphql.png"
              brand="GraphQL"
              link="https://graphql.org/"
            />
          </li>
          <li>
            <TechStackItem
              src="/brands/python.png"
              brand="Python"
              link="https://www.python.org/"
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
              src="/brands/nextjs.png"
              brand="NextJS"
              link="https://nextjs.org/"
            />
          </li>
          <li>
            <TechStackItem
              src="/brands/react.png"
              brand="ReactJS"
              link="https://reactjs.org/"
            />
          </li>
          <li>
            <TechStackItem
              src="/brands/redux.png"
              brand="Redux"
              link="https://redux.js.org/"
              height={33}
            />
          </li>
          <li>
            <TechStackItem
              src="/brands/sass.png"
              brand="SASS"
              link="https://sass-lang.com/"
            />
          </li>
          <li>
            <TechStackItem
              src="/brands/postcss.png"
              brand="PostCSS"
              link="https://postcss.org/"
            />
          </li>
          <li>
            <TechStackItem
              src="/brands/mui.png"
              brand="MUI"
              link="https://mui.com/"
            />
          </li>
        </ul>
      </section>
      <section>
        <h2>Back-End Tools</h2>
        <hr />
        <ul>
          <li>
            <TechStackItem
              src="/brands/nodejs.svg"
              brand="NodeJS"
              link="https://nodejs.org/"
            />
          </li>
          <li>
            <TechStackItem
              src="/brands/firebase.png"
              brand="Firebase"
              link="https://firebase.google.com/"
              width={26}
            />
          </li>
          <li>
            <TechStackItem
              src="/brands/prisma.png"
              brand="Prisma"
              link="https://www.prisma.io/"
              width={29}
            />
          </li>
          <li>
            <TechStackItem
              src="/brands/psql.svg"
              brand="PostgreSQL"
              link="https://www.postgresql.org/"
            />
          </li>
          <li>
            <TechStackItem
              src="/brands/redis.svg"
              brand="Redis"
              link="https://redis.io/"
            />
          </li>
        </ul>
      </section>
      <section>
        <h2>Server Tools</h2>
        <hr />
        <ul>
          <li>
            <TechStackItem
              src="/brands/tux.png"
              brand="Linux"
              link="https://www.kernel.org/"
              width={30}
            />
          </li>
          <li>
            <TechStackItem
              src="/brands/digitalocean.png"
              brand="DigitalOcean"
              link="https://www.digitalocean.com/"
            />
          </li>
          <li>
            <TechStackItem
              src="/brands/nginx.svg"
              brand="NGINX"
              link="https://www.nginx.com/"
            />
          </li>
          <li>
            <TechStackItem
              src="/brands/github-actions.png"
              brand="GitHub Actions"
              link="https://github.com/features/actions"
            />
          </li>
          <li>
            <TechStackItem
              src="/brands/docker.png"
              brand="Docker"
              link="https://www.docker.com/"
              height={25}
            />
          </li>
        </ul>
      </section>
      <section>
        <h2>In Progress</h2>
        <hr />
        <ul>
          <li>
            <TechStackItem
              src="/brands/jest.png"
              brand="Jest"
              link="https://jestjs.io/"
              width={32}
            />
          </li>
          <li>
            <TechStackItem
              src="/brands/framer-motion.png"
              brand="Framer Motion"
              link="https://www.framer.com/motion/"
              height={34}
            />
          </li>
          <li>
            <TechStackItem
              src="/brands/vue.svg"
              brand="Vue.js"
              link="https://vuejs.org/"
            />
          </li>
        </ul>
      </section>
    </Layout>
  );
};

export default Tech;
