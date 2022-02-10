import React from 'react';

import WorkExperienceItem from '@components/WorkExperienceItem';

const PersonalProjects = () => {
  return (
    <>
      <WorkExperienceItem
        title="Mooseical"
        id="mooseical"
        jobTitle="Canadian Underground Music Database"
        time="Oct.&nbsp;2020 - Present"
        links={[{ href: 'https://www.mooseical.com/', name: 'mooseical.com' }]}
      >
        <li>
          Passion project that showcases a database of underground Canadian
          musicians. Users can find musicians and music based on location and
          genre, respectively. Further filtering base on url querying is
          available for the music database
        </li>
        <li>Front-End built with NextJS and SCSS</li>
        <li>
          The Back-End utilizes a custom GraphQL NodeJS server (Fastify). Prisma
          and PostgresSQL database manage the database structure and queries
        </li>
        <li>
          The server is self-hosted via DigitalOcean VPS which utilizes cron,
          ufw, and GitHub Actions for automation and security
        </li>
        <li>Optimized the GraphQL Schema to avoid the n+1 problem</li>
        <li>
          Cloudinary provides an image CDN that leverages the NextJS image api
          to deliver image as quickly as possible
        </li>
        <li>
          TypeScript type safety is ensured for the back-end and front-end
        </li>
        <li>
          SEO optimizations including Open Graph Protocol and Twitter Cards
        </li>
        <li>
          100% Score in Performance, Accessibility, Best Practices, and SEO in
          Google Lighthouse score
        </li>
      </WorkExperienceItem>
      <WorkExperienceItem
        title="nextjs template"
        id="nextjstemplate"
        jobTitle="Template Repository"
        time="Mar.&nbsp;2021 - Present"
        links={[
          {
            href: 'https://github.com/100BC/nextjs-template',
            name: 'Source Code',
          },
        ]}
      >
        <li>
          Template Repository to quickly bootstrap a NextJS project with
          TypeScript and SCSS already pre-configured
        </li>
        <li>
          The repo comes with easy SEO management including Open Graph Protocol
          and Twitter Cards via the Layout component
        </li>
        <li>
          The stylesheets contain Normalize.css and my own rules to ensure quick
          startup without reconfiguring global styles
        </li>
        <li>
          ESLint, StyleLint, and Prettier come pre-configured to ensure code
          quality and consistency
        </li>
        <li>
          Takes my knowledge of past projects to ensure optimal coding comfort
        </li>
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
        <li>Follows Responsive Web Design</li>
        <li>
          This website receives continuous updates to improve usability and
          update technology
        </li>
      </WorkExperienceItem>
    </>
  );
};

export default PersonalProjects;
