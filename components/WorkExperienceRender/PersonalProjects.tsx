import React from 'react';

import WorkExperienceItem from '@components/WorkExperienceItem';

const PersonalProjects = () => {
  return (
    <>
      <WorkExperienceItem
        title="Mooseical"
        jobTitle="Canadian Underground Music Database"
        time="Oct.&nbsp;2020 - Present"
        links={[
          { href: 'https://www.mooseical.com/', name: 'mooseical.com' },
          { href: 'https://mooseical-server.herokuapp.com/graphql', name: 'graphql playground' },
        ]}
      >
        <li>Passion project that is a database of underground Canadian musicians</li>
        <li>Front-End built with NextJS, TypeScript, and SCSS</li>
        <li>Utilizes a custom built Graphql Express server with Prisma 2 ORM</li>
        <li>Originally built with Google Firebase backend</li>
        <li>Went live in Feb. 2021</li>
        <li>SEO optimizations including Open Graph Protocol</li>
        <li>Perfect Google Lighthouse score</li>
        <li>
          Ensured responsive design, image and code optimizations to reduce time to first byte
        </li>
      </WorkExperienceItem>
      <WorkExperienceItem
        title="Online CV"
        jobTitle="Personal Website"
        time="Jun.&nbsp;2019 - Present"
        links={[{ href: 'https://github.com/100BC/cv/', name: 'Source Code' }]}
      >
        <li>Built with NextJS and TypeScript</li>
        <li>Created to better show my skills in usability, design, and programming</li>
        <li>Conducted user evaluations during development process to gather improvement ideas</li>
        <li>Follows Responsive Web Design and has automatic dark theme based on user preference</li>
        <li>This website receives continuous updates to improve usability and update technology</li>
        <li>Originally built with create-react-app</li>
      </WorkExperienceItem>
    </>
  );
};

export default PersonalProjects;
