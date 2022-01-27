import React from 'react';
import Link from 'next/link';

import Layout from '@components/Layout';
import styles from '@styles/about.module.scss';

const Info = () => {
  return (
    <Layout noIndex title="Otman Maowed | Information" canonicalUrlPath="/info">
      <h1>Information</h1>
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
          I am a Web Developer with Full-Stack knowledge that primarily
          specializes in Front-End technologies. I have high personal standards
          when developing websites; I always ensure that the user experience,
          accessibility, time to first byte and search engine optimizations
          (SEO) are of high quality. In fact, my{' '}
          <Link href="/experience/projects#nextjstemplate">
            <a>NextJS template repo</a>
          </Link>{' '}
          already comes with SEO pre-configured with Open Graph Protocol and
          Twitter Cards, and why a lot of my sites have a perfect score on
          Google Lighthouse (where applicable).
        </p>
        <p>
          I enjoy expanding my knowledge and adding new tools and frameworks to
          my tech stack. My passion project,{' '}
          <Link href="/experience/projects#mooseical">
            <a>Mooseical</a>
          </Link>{' '}
          is constantly updated with the latest technologies. Most recently, I
          configured an Ubuntu server on DigitalOcean to host Mooseical&apos;s
          server. This required learning NGINX, GitHub Actions, cron, and many
          other technologies. For my next undertaking I shall be adding more
          animation to Mooseical via Framer Motion.
        </p>
        <p>
          My university education focused substantially on Human-Computer
          Interaction. I participated in independent studies to expand my
          experience and knowledge in the field. Personally, user experience and
          accessibility are major considerations when developing websites.
        </p>
      </section>
      <section className={styles.section}>
        <h2>Personal Information</h2>
        <p>
          I am very passionate about music. Every week I try to find a new
          artist, album, or genre to listen to. Yearly, I listen to
          approximately 70,000 - 90,000 minutes of music.
        </p>
        <ul>
          <li>
            <Link href="https://open.spotify.com/playlist/1GPCQfyt6DaOUVicnUnuda?si=W9xo9KmBQh2ZZFE3sxrlZg">
              <a>Spotify Playlist: Favourite Songs of 2019</a>
            </Link>
          </li>
          <li>
            <Link href="https://open.spotify.com/playlist/0Bfqb3R1cIYa7KRaSxRD9r?si=oRX-0u7qRZ6Io5Llq3nzlg">
              <a>Spotify Playlist: Favourite Songs of 2020</a>
            </Link>
          </li>
          <li>
            <Link href="https://open.spotify.com/playlist/54x7ANI1GNM6uNUC4jMaTH?si=587d288cc1824189">
              <a>Spotify Playlist: Favourite Songs of 2021</a>
            </Link>
          </li>
        </ul>

        <p>
          Since I was a child, I have loved paleontology. In my spare time I
          watch documentaries on dinosaurs, mammals and evolution. One of my
          favourite places to visit is the Royal Tyrrell Museum in Alberta,
          Canada.
          <br />
          <br />I am an outgoing person and I love telling stories to people
          around me. After the pandemic I hope to perform at comedy open-mic
          nights.
        </p>
      </section>
    </Layout>
  );
};

export default Info;
