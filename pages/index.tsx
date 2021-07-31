import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Layout from '@components/Layout';
import styles from '@styles/home.module.scss';
import TechStackItem from '@components/TechStackItem';

const Home = () => {
  return (
    <Layout noIndex className={styles.home}>
      <h1>Otman Maowed</h1>
      <div className={styles.links}>
        <Link href="mailto:omaowed1@gmail.com">
          <a>Email: omaowed1@gmail.com</a>
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
            <li>BSc. Computing Science</li>
            <li>University of Alberta, 2020</li>
            <li>Alberta, Canada</li>
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
          <li>
            <TechStackItem
              src="/images/docker.png"
              brand="Docker"
              link="https://www.docker.com/"
              height={34.5}
            />
          </li>
        </ul>
      </section>
      <section>
        <h2>My Work</h2>
        <hr />
        <Link href="/work-experience">
          <a className={styles.readMore}>Read more about my work experience &#x2192;</a>
        </Link>
        <ul className={styles.work}>
          <li>
            <Link href="https://www.buddytree.org">
              <a>Buddytree</a>
            </Link>
          </li>
          <li>
            <Link href="https://www.mooseical.com">
              <a>Mooseical</a>
            </Link>
          </li>
          <li>
            <Link href="https://www.bbrosfinishing.ca">
              <a>B.Bros Finishing</a>
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
              src="/images/github.png"
              brand="GitHub"
              link="https://github.com/100BC"
            />
          </li>
          <li>
            <TechStackItem
              src="/images/linkedin.png"
              brand="LinkedIn"
              link="https://www.linkedin.com/in/omaowed/"
              width={56.4}
            />
          </li>
        </ul>
      </section>
    </Layout>
  );
};

export default Home;
