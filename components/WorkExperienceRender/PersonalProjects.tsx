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
          { href: 'https://mooseical-server.herokuapp.com/graphql', name: 'GraphQL playground' },
        ]}
      >
        <li>Passion project that showcases the database of underground Canadian musicians</li>
        <li>Users can find musicians and albums based on location and genre, respectively</li>
        <li>Front-End built with NextJS, TypeScript, and SCSS</li>
        <li>Created a custom GraphQL Express server with Prisma 2 ORM</li>
        <li>Server caching is handled by Redis</li>
        <li>Docker was used to containerize the Redis and PostgreSQL databases</li>
        <li>Nexus Schema manages the back-end GraphQL schema</li>
        <li>URQL handles the client side GraphQL</li>
        <li>Uploaded Images are compressed and resized and uploaded to Google Firebase Storage</li>
        <li>Firebase Firestore and Google ReCaptcha are used to manage user forms</li>
        <li>SEO optimizations including Open Graph Protocol</li>
        <li>Extensive testing is done to reduce time to first byte</li>
        <li>Ensured responsive design, image and code optimizations</li>
        <li>
          100% Score in Performance, Accessibility, Best Practices, and SEO in Google Lighthouse
          score
        </li>
      </WorkExperienceItem>
      <WorkExperienceItem
        title="nextjs template"
        jobTitle="Template Repository"
        time="Mar.&nbsp;2021 - Present"
        links={[{ href: 'https://github.com/100BC/nextjs-template', name: 'Source Code' }]}
      >
        <li>
          Template Repository to quickly bootstrap a NextJS project with TypeScript and SCSS already
          pre-configured
        </li>
        <li>
          The repo comes with easy SEO management including Open Graph Protocol via the Layout
          component
        </li>
        <li>
          The stylesheets contain Normalize.css and my own rules to ensure quick startup without
          reconfiguring global styles
        </li>
        <li>
          ESLint, StyleLint, and Prettier come pre-configured to ensure code quality and consistency
        </li>
        <li>Takes my knowledge of past projects to ensure optimal coding comfort</li>
        <li>Consistently updated as personal knowledge grows</li>
      </WorkExperienceItem>
      <WorkExperienceItem
        title="Online CV"
        jobTitle="Personal Website"
        time="Jun.&nbsp;2019 - Present"
        links={[{ href: 'https://github.com/100BC/cv/', name: 'Source Code' }]}
      >
        <li>Built with NextJS and TypeScript</li>
        <li>Created to better showcase my work, achievements and skill set</li>
        <li>Follows Responsive Web Design and has automatic dark theme based on user preference</li>
        <li>This website receives continuous updates to improve usability and update technology</li>
      </WorkExperienceItem>
    </>
  );
};

export default PersonalProjects;
