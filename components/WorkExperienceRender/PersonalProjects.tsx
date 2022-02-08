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
          musicians
        </li>
        <li>
          Users can find musicians and music based on location and genre,
          respectively. Further filtering base on url querying is available for
          the music database
        </li>
        <li>Front-End built with NextJS, TypeScript, and SCSS</li>
        <li>
          Created a custom GraphQL NodeJS server (Fastify) with Prisma ORM that
          is connected to PostgresSQL database
        </li>
        <li>The server is self-hosted via DigitalOcean VPS</li>
        <li>The server utilizes GitHub Actions to automate deployment</li>
        <li>The back-end GraphQL schema was built with Pothos</li>
        <li>
          URQL handles the client side GraphQL with graphql-codegen to manage
          TypeScript typings
        </li>
        <li>
          Cloudinary manages image CDN to optimize images to reduce Time to
          First Byte on the Front-End
        </li>
        <li>
          Firebase Firestore and Google ReCaptcha are used to manage user forms
        </li>
        <li>
          SEO optimizations including Open Graph Protocol and Twitter Cards
        </li>
        <li>Extensive testing is done to reduce time to first byte</li>
        <li>Ensured responsive design, image and code optimizations</li>
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
