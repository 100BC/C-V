import React from 'react';

import WorkExperienceItem from '@components/WorkExperienceItem';

const WorkExperience = () => {
  return (
    <>
      <WorkExperienceItem
        title="Interface Fluidics"
        id="interfacefluidics"
        address="Edmonton, AB / Remote"
        jobTitle="React Developer"
        time="Oct.&nbsp;2021 - Jan.&nbsp;2022"
        links={[
          {
            href: 'https://www.interfacefluidics.com/',
            name: 'interfacefluidics.com',
          },
        ]}
      >
        <li>Designed and created a customer facing React portal</li>
        <li>
          Refactored the internal portal with up to date React, react-router and
          Material UI standards
        </li>
        <li>
          Provided and implemented new designs for the portal to improve look
          and feel, usability, and navigation
        </li>
        <li>
          Utilized GraphQL and Apollo Client to connect the front-end and the
          API
        </li>
      </WorkExperienceItem>
      <WorkExperienceItem
        title="Buddytree"
        id="buddytree"
        address="Remote"
        jobTitle="Web Developer"
        time="Feb.&nbsp;2021 - Sep.&nbsp;2021"
        links={[{ href: 'https://buddytree.org/', name: 'buddytree.org' }]}
      >
        <li>Developed and maintained the entirety of the front-end codebase</li>
        <li>NextJS (ReactJS) framework used for the codebase</li>
        <li>Utilized Redux-Toolkit for global state management</li>
        <li>Configured Next Auth for user authentication</li>
        <li>
          Coordinated with back-end developer and systems engineer in order to
          implement new features and services
        </li>
        <li>
          Collaborated with another web developer during the initial months of
          the project
        </li>
        <li>
          Created and styled pages that follow responsive design, and taking
          advantage of CSS modules
        </li>
        <li>Followed the Figma designs provided by the CEO and the designer</li>
        <li>
          Worked closely with the CEO and Project Manager to ensure the vision
          is met in a timely manner
        </li>
        <li>
          Managed and educated university interns in React, and front-end
          development best practices
        </li>
      </WorkExperienceItem>
      <WorkExperienceItem
        title="B.Bros Finishing"
        address="Remote"
        time="Sep.&nbsp;2020"
        jobTitle="Freelance Contractor"
        links={[
          { href: 'https://www.bbrosfinishing.ca', name: 'bbrosfinishing.ca' },
        ]}
      >
        <li>Created a website for a local business</li>
        <li>Ensured basic SEO and responsive design</li>
        <li>Google Firebase Storage and Firestore are used for file serving</li>
        <li>
          100% Score in Performance, Accessibility, Best Practices, and SEO in
          Google Lighthouse score
        </li>
      </WorkExperienceItem>
      <WorkExperienceItem
        title="Trust Science"
        address="Edmonton, AB"
        time="May - Aug.&nbsp;2018"
        jobTitle="Summer Intern"
        links={[
          { href: 'https://www.trustscience.com/', name: 'trustscience.com' },
        ]}
      >
        <li>Mobile App development with React Native</li>
        <li>Web Portal development with C#, jQuery, and React</li>
        <li>
          Assisted in refactoring the Mobile App to approximately 60% of its
          original size
        </li>
        <li>
          Created an AWS Lambda function connecting the App, Portal and
          Databases together
        </li>
        <li>
          Identified and corrected UI/UX problems in both the Portal and App
        </li>
        <li>
          Traced and fixed bugs in large codebases of 12,000+ lines of code
        </li>
      </WorkExperienceItem>
    </>
  );
};

export default WorkExperience;
