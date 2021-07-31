import React from 'react';

import WorkExperienceItem from '@components/WorkExperienceItem';

const PersonalProjects = () => {
  return (
    <>
      <WorkExperienceItem
        title="Mooseical"
        jobTitle="Canadian Music Database"
        time="Oct.&nbsp;2020 - Present"
        links={[
          { href: 'https://www.mooseical.com/', name: 'mooseical.com' },
          { href: 'https://mooseical-server.herokuapp.com/graphql', name: 'graphql playground' },
        ]}
      >
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
