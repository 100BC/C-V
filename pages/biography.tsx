import React from 'react';

import Layout from '@components/Layout';
import styles from '@styles/about.module.scss';

const Biography = () => {
  return (
    <Layout noIndex title="Otman Maowed | Biography">
      <h1>Biography</h1>
      <section className={styles.section}>
        <h2>Education</h2>
        <p>
          BSc. Computing Science, Sociology Minor
          <br />
          University of Alberta, Class of 2020
          <br />
          3.5/4 Final Year GPA
        </p>
      </section>
      <section className={styles.section}>
        <h2>Professional Information</h2>
        <p>
          I mainly specialize in Frontend Development, and I am a heavy proponent of User
          Experience. My university education focused substantially on Human-Computer Interaction
          that included independent studies. Personally, User experience and accessibility are major
          factors while developing websites.
        </p>
        <p>
          During COVID-19 lock downs, I have been honing my skills in Web Development. Originally I
          focused on solidifying my skills in React, TypeScript (JavaScript) and HTML/CSS, but I
          have since I have expanded towards backend technologies such as ExpressJS and GraphQL.
        </p>
      </section>
      <section className={styles.section}>
        <h2>Personal Information</h2>
        <p>
          Outside of web development, I am very passionate about music. Every week I try to find a
          new artist, album, or genre to listen to. Yearly, I listen to approximately 70,000 -
          90,000 minutes of music.
        </p>
        <a
          className={styles.spotifyLink}
          rel="noopener noreferrer nofollow"
          target="_blank"
          href="https://open.spotify.com/playlist/1GPCQfyt6DaOUVicnUnuda?si=W9xo9KmBQh2ZZFE3sxrlZg"
        >
          Spotify Playlist: Favourite Songs of 2019
        </a>
        <a
          className={styles.spotifyLink}
          rel="noopener noreferrer nofollow"
          target="_blank"
          href="https://open.spotify.com/playlist/0Bfqb3R1cIYa7KRaSxRD9r?si=oRX-0u7qRZ6Io5Llq3nzlg"
        >
          Spotify Playlist: Favourite Songs of 2020
        </a>

        <p>
          Since I was a child, I have loved paleontology. In my spare time I watch documentaries on
          dinosaurs, mammals and evolution. The fossil I am standing next to is one of the most
          significant fossil finds of the past decade.{' '}
          <a
            href="https://www.youtube.com/watch?v=a-UZXBF63z4"
            rel="noopener noreferrer nofollow"
            target="_blank"
            className={styles.link}
            title="PBS Eons: The Dinosaur Who Was Buried at Sea"
          >
            This YouTube Video by PBS Eons explains why.
          </a>
        </p>
        <p>
          I am an outgoing person and I love telling stories to people around me. After the pandemic
          I hope to perform at comedy open-mic nights
        </p>
      </section>
    </Layout>
  );
};

export default Biography;
