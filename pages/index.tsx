import React from 'react';
import Image from 'next/image';

import Layout from '@components/Layout';

const Home = () => {
  return (
    <Layout noIndex>
      <section>
        <h1>Otman Maowed</h1>
        <Image
          src="/images/otman.png"
          layout="intrinsic"
          width={300}
          height={300}
          alt="Otman Maowed smiling at the camera"
          objectFit="cover"
        />
        <ul>
          <li>Frontend Developer</li>
          <li>BSc. Computing Science</li>
          <li>University of Alberta, 2020</li>
        </ul>
        <h2>Tech Stack</h2>
        <ul>
          <li>TypeScript</li>
          <li>NextJS (React)</li>
          <li>SCSS & HTML</li>
          <li>GraphQL</li>
        </ul>
      </section>
      <section>
        <h1>My Work</h1>
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
