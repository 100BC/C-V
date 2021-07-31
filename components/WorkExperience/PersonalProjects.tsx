import React from 'react';
import Link from 'next/link';

import styles from './styles.module.scss';

const PersonalProjects = () => {
  return (
    <>
      <div className={styles.experience}>
        <h2>Mooseical</h2>
        <div className={styles.descriptor}>
          <h3>Canadian Music Database</h3>
          <time>Oct.&nbsp;2020 - Present</time>
        </div>
        <address>
          <Link href="https://www.mooseical.com">
            <a>www.mooseical.com</a>
          </Link>
        </address>
        <ul>
          <li>
            Mooseical is a Canadian musician database specifically targeting underground artists
          </li>
          <li>Currently undergoing a major refactor</li>
          <li>Refactor includes switching from Google Firebase towards an Express GraphQL Sever</li>
          <li>Server utilizes Prisma 2 to manage a PostgreSQL database</li>
          <li>Front-End built with NextJS, TypeScript, and SCSS</li>
          <li>Went live in Feb. 2021</li>
          <li>SEO optimizations including Open Graph Protocol</li>
          <li>
            Ensured responsive design, image and code optimizations to reduce time to first byte
          </li>
        </ul>
      </div>
      <div className={styles.experience}>
        <h2>Personal Website</h2>
        <div className={styles.descriptor}>
          <h3>CV</h3>
          <time>Jun.&nbsp;2019 - Present</time>
        </div>
        <address>
          <Link href="https://github.com/100BC/cv/">
            <a>Source Code</a>
          </Link>
        </address>
        <ul>
          <li>Built with NextJS and TypeScript</li>
          <li>Created to better show my skills in usability, design, and programming</li>
          <li>Conducted user evaluations during development process to gather improvement ideas</li>
          <li>
            Follows Responsive Web Design and has automatic dark theme based on user preference
          </li>
          <li>
            This website receives continuous updates to improve usability and update technology
          </li>
          <li>Originally built with create-react-app</li>
        </ul>
      </div>
    </>
  );
};

export default PersonalProjects;
