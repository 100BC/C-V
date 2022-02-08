import React from 'react';
import Link from 'next/link';

import Layout from '@components/Layout';
import styles from '@styles/about.module.scss';

const Info = () => {
  return (
    <Layout noIndex title="Otman Maoued | Information" canonicalUrlPath="/info">
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
          I am a Full-Stack developer that primarily specializes in Front-End
          web development due to my passion for Human-Computer Interaction. I
          develop websites and software that are user friendly, SEO friendly,
          accessible, and visually appealing. I aim to achieve a perfect score
          on Google Lighthouse (where applicable).
        </p>
        <p>
          Even though, I focus on Front-End development, I am confident in my
          Back-End abilities. I run and maintain a server for my passion project{' '}
          <Link href="/experience/projects#mooseical">
            <a>Mooseical</a>
          </Link>
          , which also utilizes serverless technologies for enhanced
          performance.
        </p>
        <p>
          In my spare time, I enjoy coding and adding the latest technologies
          towards my tech-stack. Therefore, I am always excited to adapt to a
          company&apos;s tech-stack even if I haven&apos;t previously the
          required technologies.
        </p>
        <p>
          My university education focused substantially on Human-Computer
          Interaction. I participated in independent studies to expand my
          experience and knowledge in the field.
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
