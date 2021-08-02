import React from 'react';
import Link from 'next/link';

import Layout from '@components/Layout';
import styles from '@styles/about.module.scss';

const Biography = () => {
  return (
    <Layout noIndex title="Otman Maowed | Biography">
      <h1>Biography</h1>
      <section className={styles.section}>
        <h2>Education</h2>
        <ul>
          <li>BSc. Computing Science, Sociology Minor</li>
          <li>University of Alberta, Class of 2020</li>
          <li>3.5/4 Final Year GPA, 2020 Dean&apos;s Honour Roll</li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2>Professional Information</h2>
        <p>
          I am a Web Developer that specializes in Front-End technologies. I have high personal
          standards when creating sites; I always ensure that the user experience, usability, time
          to first byte and search engine optimizations are of high quality. In fact, my{' '}
          <Link href="https://github.com/100BC/nextjs-template">
            <a>NextJS template repo</a>
          </Link>{' '}
          already comes with SEO pre-configured to be easily added to any website, and why a lot my
          sites have a perfect score on Google Lighthouse.
        </p>
        <p>
          I enjoy expanding my knowledge and adding new tools and frameworks to my tech stack.
          Recently I delved into backend development in order to create a GraphQL server for{' '}
          <Link href="https://www.mooseical.com/">
            <a>mooseical.com</a>
          </Link>
          . The project required familiarizing myself in Docker, Redis, ExpressJS, Prisma 2, and
          GraphQL (URQL client, Nexus Backend). I am always eager to expand my tech stack; At the
          start of COVID-19 pandemic I honed my skills in NextJS (React), TypeScript, and SCSS. Up
          next, I shall be learning NGINX, VueJS and Angular.
        </p>
        <p>
          I have knowledge in the following CSS frameworks: Bootstrap, Material-UI and TailwindCSS.
          However, my competence in vanilla CSS results in quicker styling and designing over using
          a framework.
        </p>
        <p>
          My university education focused substantially on Human-Computer Interaction. I
          participated in independent studies to expand my experience and knowledge in the field.
          Personally, User experience and accessibility are major factors while developing websites.
        </p>
      </section>
      <section className={styles.section}>
        <h2>Personal Information</h2>
        <p>
          I am very passionate about music. Every week I try to find a new artist, album, or genre
          to listen to. Yearly, I listen to approximately 70,000 - 90,000 minutes of music.
        </p>
        <Link href="https://open.spotify.com/playlist/1GPCQfyt6DaOUVicnUnuda?si=W9xo9KmBQh2ZZFE3sxrlZg">
          <a>Spotify Playlist: Favourite Songs of 2019</a>
        </Link>
        <Link href="https://open.spotify.com/playlist/0Bfqb3R1cIYa7KRaSxRD9r?si=oRX-0u7qRZ6Io5Llq3nzlg">
          <a>Spotify Playlist: Favourite Songs of 2020</a>
        </Link>
        <p>
          Since I was a child, I have loved paleontology. In my spare time I watch documentaries on
          dinosaurs, mammals and evolution. One of my favourite places to visit is the Royal Tyrrell
          Museum in Alberta, Canada.
        </p>
        <p>
          I am an outgoing person and I love telling stories to people around me. After the pandemic
          I hope to perform at comedy open-mic nights.
        </p>
      </section>
    </Layout>
  );
};

export default Biography;
