import React from 'react';

import WorkExperienceItem from '@components/WorkExperienceItem';

const UniProjects = () => {
  return (
    <>
      <WorkExperienceItem
        title="this.node.app"
        address="CMPUT 404 - Web Applications and Architecture"
        jobTitle="Front-End Developer"
        time="Jan. - Apr.&nbsp;2020"
        links={[
          {
            href: 'https://github.com/CMPUT404W20-Wed/CMPUT404-project-socialdistribution',
            name: 'Source Code',
          },
        ]}
      >
        <li>
          Created a Social Media Web App, this.node.app, as part of the class
          project
        </li>
        <li>
          this.node.app was developed in a team of 5 with ReactJS and Django
        </li>
        <li>Implemented React Redux and many API calls to the database</li>
      </WorkExperienceItem>
      <WorkExperienceItem
        title="Indigenous AR Learning Experience"
        address="CMPUT 399 - Independent Study"
        jobTitle="Creator / Researcher"
        time="Sep.&nbsp;2019 - Apr.&nbsp;2020"
      >
        <li>Enrolled in a independent study/research with Dr.Demmans Epp</li>
        <li>
          Created an Augmented Reality Tour via the app izi.Travel The tour
          highlights Indigenous art and landmarks on University of Alberta
        </li>
        <li>
          Followed a participatory design approach to ensure that the Indigenous
          culture is properly represented
        </li>
        <li>Improved the tour based on user feedback of 45 individuals</li>
      </WorkExperienceItem>
      <WorkExperienceItem
        title="MyAdvisor"
        address="CMPUT 302 - Human Computer Interaction"
        jobTitle="Designer"
        time="Jan. - Apr.&nbsp;2019"
        links={[
          {
            href: 'https://drive.google.com/file/d/1tlBIiTXrjc9vt8YGXc7kL5np5CscnuzA/view',
            name: 'Video Demo',
          },
          {
            href: 'https://imgur.com/a/YhpUo2L',
            name: 'UI Gallery',
          },
        ]}
      >
        <li>Studied the basics of UI/UX in lectures, including UX Research</li>
        <li>
          Final project consisted of creating a medium-fidelity prototype of an
          advisory system
        </li>
        <li>Worked in a team of 5 to create MyAdvisor in Adobe XD</li>
        <li>Conducted heuristic and user evaluations while prototyping</li>
        <li>
          Maintained the style and theme presented by other university websites
        </li>
      </WorkExperienceItem>
      <WorkExperienceItem
        title="Alexandria"
        address="CMPUT 301 - Introduction to Software Engineering"
        jobTitle="Designer"
        time="Jan. - Apr.&nbsp;2019"
        links={[
          {
            href: 'https://github.com/cmput301w19t02/Alexandria',
            name: 'Source Code',
          },
          {
            href: 'https://github.com/cmput301w19t02/Alexandria/wiki/Interface',
            name: 'UI Gallery',
          },
        ]}
      >
        <li>
          Created an Android App, Alexandria, as part of the class project
        </li>
        <li>Alexandria was developed with Java in Android Studio</li>
        <li>Worked in a team of 6, following scrum practices</li>
        <li>Lead the creation of the UI with Adobe XD</li>
        <li>
          Opted for a cozy theme to match the book sharing aspect of the App
        </li>
        <li>Programmed the majority of the Front-End code</li>
      </WorkExperienceItem>
      <WorkExperienceItem
        title="Canned"
        address="CMPUT 250 - Computer and Games"
        jobTitle="Producer / Developer"
        time="Jan. - Apr.&nbsp;2017"
        links={[
          {
            href: 'https://drive.google.com/file/d/1HRMVdFSU6mh71yW10tTI6SQA3tWcnzGF/view',
            name: 'Video Demo',
          },
          {
            href: 'https://sites.google.com/ualberta.ca/cmput250/9th-ceremony-2017',
            name: 'Award Page',
          },
        ]}
      >
        <li>
          Created ‘Canned’, a stealth video game in a team of six as part of the
          class project
        </li>
        <li>
          Built with GameMaker Studio using GML, a C and JavaScript like
          language{' '}
        </li>
        <li>
          Recipient of the Game of the Year, and the Technical Achievement Award
        </li>
        <li>Scripted player controls and the behavioural AI of enemies</li>
        <li>Organized tasks and deadlines for team members</li>
        <li>Ensured the completion and quality of each milestone</li>
      </WorkExperienceItem>
    </>
  );
};

export default UniProjects;
