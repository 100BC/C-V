import React from 'react';
import Link from 'next/link';

import styles from './styles.module.scss';

const UniProjects = () => {
  return (
    <>
      <div className={styles.experience}>
        <h2>this.node.app</h2>
        <div className={styles.descriptor}>
          <h3>Frontend Developer</h3>
          <time>Jan. - Apr.&nbsp;2020</time>
        </div>
        <address>
          CMPUT 404 - Web Applications and Architecture
          <Link href="https://github.com/CMPUT404W20-Wed/CMPUT404-project-socialdistribution">
            <a>Source Code</a>
          </Link>
        </address>
        <ul>
          <li>Created a Social Media Web App, this.node.app, as part of the class project</li>
          <li>this.node.app was developed in a team of 5 with ReactJS and Django</li>
          <li>Implemented React Redux and many API calls to the database</li>
        </ul>
      </div>
      <div className={styles.experience}>
        <h2>Indigenous AR Learning Experience</h2>
        <div className={styles.descriptor}>
          <h3>Creator / Researcher</h3>
          <time>Jan. - Apr.&nbsp;2020</time>
        </div>
        <address>CMPUT 399 - Independent Study</address>
        <ul>
          <li>Enrolled in a independent study/research with Dr.Demmans Epp</li>
          <li>
            Created an Augmented Reality Tour via the app izi.Travel The tour highlights Indigenous
            art and landmarks on University of Alberta
          </li>
          <li>
            Followed a participatory design approach to ensure that the Indigenous culture is
            properly represented
          </li>
          <li>Improved the tour based on user feedback of 45 individuals</li>
        </ul>
      </div>
      <div className={styles.experience}>
        <h2>MyAdvisor</h2>
        <div className={styles.descriptor}>
          <h3>Designer</h3>
          <time>Jan. - Apr.&nbsp;2019</time>
        </div>
        <address>
          CMPUT 302 - Human Computer Interaction
          <Link href="https://drive.google.com/file/d/1tlBIiTXrjc9vt8YGXc7kL5np5CscnuzA/view">
            <a>Video Demo</a>
          </Link>
          <Link href="https://imgur.com/a/YhpUo2L">
            <a>UI Gallery</a>
          </Link>
        </address>
        <ul>
          <li>Studied the basics of UI/UX in lectures, including UX Research</li>
          <li>
            Final project consisted of creating a medium-fidelity prototype of an advisory system
          </li>
          <li>Worked in a team of 5 to create MyAdvisor in Adobe XD</li>
          <li>Conducted heuristic and user evaluations while prototyping</li>
          <li>Maintained the style and theme presented by other university websites</li>
        </ul>
      </div>
      <div className={styles.experience}>
        <h2>Alexandria</h2>
        <div className={styles.descriptor}>
          <h3>Developer / Designer</h3>
          <time>Jan. - Apr.&nbsp;2019</time>
        </div>
        <address>
          CMPUT 301 - Introduction to Software Engineering
          <Link href="https://github.com/cmput301w19t02/Alexandria">
            <a>Source</a>
          </Link>
          <Link href="https://github.com/cmput301w19t02/Alexandria/wiki/Interface">
            <a>UI Gallery</a>
          </Link>
        </address>
        <ul>
          <li>Created an Android App, Alexandria, as part of the class project</li>
          <li>Alexandria was developed with Java in Android Studio</li>
          <li>Worked in a team of 6, following scrum practices</li>
          <li>Lead the creation of the UI with Adobe XD</li>
          <li>Opted for a cozy theme to match the book sharing aspect of the App</li>
          <li>Programmed the majority of the Front-End code</li>
        </ul>
      </div>
      <div className={styles.experience}>
        <h2>Canned</h2>
        <div className={styles.descriptor}>
          <h3>Producer / Developer</h3>
          <time>Jan. - Apr.&nbsp;2017</time>
        </div>
        <address>
          CMPUT 250 - Computer and Games
          <Link href="https://drive.google.com/file/d/1HRMVdFSU6mh71yW10tTI6SQA3tWcnzGF/view">
            <a>Video Demo</a>
          </Link>
          <Link href="https://sites.google.com/ualberta.ca/cmput250/9th-ceremony-2017">
            <a>Award Page</a>
          </Link>
        </address>
        <ul>
          <li>
            Created ‘Canned’, a stealth video game in a team of six as part of the class project
          </li>
          <li>Built with GameMaker Studio using GML, a C and JavaScript like language </li>
          <li>Recipient of the Game of the Year, and the Technical Achievement Award</li>
          <li>Scripted player controls and the behavioural AI of enemies</li>
          <li>Organized tasks and deadlines for team members</li>
          <li>Ensured the completion and quality of each milestone</li>
        </ul>
      </div>
    </>
  );
};

export default UniProjects;
