import React from 'react';

import Layout from '@components/Layout';
import TechStackItem from '@components/TechStackItem';
import styles from '@styles/techStack.module.scss';

const Tech = () => {
  return (
    <Layout
      title="Otman Maowed | Tech Stack"
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
              src="/images/nextjs-icon-dark.png"
              brand="NextJS"
              link="https://nextjs.org/"
            />
          </li>
          <li>
            <TechStackItem
              src="/images/react.png"
              brand="ReactJS"
              link="https://reactjs.org/"
            />
          </li>
          <li>
            <TechStackItem
              src="/images/redux.png"
              brand="Redux"
              link="https://redux.js.org/"
              height={32.25}
            />
          </li>
          <li>
            <TechStackItem
              src="/images/sass.png"
              brand="SASS"
              link="https://sass-lang.com/"
            />
          </li>
          <li>
            <TechStackItem
              src="/images/postcss.png"
              brand="PostCSS"
              link="https://postcss.org/"
            />
          </li>
          <li>
            <TechStackItem
              src="/images/mui.png"
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
              src="/images/nodejs.svg"
              brand="NodeJS"
              link="https://nodejs.org/"
            />
          </li>
          <li>
            <TechStackItem
              src="/images/firebase.png"
              brand="Firebase"
              link="https://firebase.google.com/"
              width={26.25}
            />
          </li>
          <li>
            <TechStackItem
              src="/images/prisma.png"
              brand="Prisma"
              link="https://www.prisma.io/"
              width={30}
            />
          </li>
          <li>
            <TechStackItem
              src="/images/psql.svg"
              brand="PostgreSQL"
              link="https://www.postgresql.org/"
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
              src="/images/tux.png"
              brand="Linux"
              link="https://www.kernel.org/"
              width={31.5}
            />
          </li>
          <li>
            <TechStackItem
              src="/images/DO.png"
              brand="DigitalOcean"
              link="https://www.digitalocean.com/"
            />
          </li>
          <li>
            <TechStackItem
              src="/images/nginx.svg"
              brand="NGINX"
              link="https://www.nginx.com/"
            />
          </li>
          <li>
            <TechStackItem
              src="/images/actions.png"
              brand="Github Actions"
              link="https://github.com/features/actions"
            />
          </li>
        </ul>
      </section>
    </Layout>
  );
};

export default Tech;
