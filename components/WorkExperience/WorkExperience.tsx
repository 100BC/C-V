import Link from 'next/link';
import React from 'react';

import styles from './styles.module.scss';

const WorkExperience = () => {
  return (
    <>
      <div className={styles.experience}>
        <h2>Buddytree</h2>
        <div className={styles.descriptor}>
          <h3>Frontend Developer Contractor</h3>
          <time>Feb.&nbsp;2021 - Present</time>
        </div>
        <address>
          Remote
          <Link href="https://buddytree.org/">
            <a>buddytree.org</a>
          </Link>
        </address>
        <ul>
          <li>Currently, the sole maintainer of the React Frontend Codebase</li>
          <li>Creating and styling pages that follow Responsive Design</li>
          <li>Ensuring that use cases are covered and coded for</li>
          <li>
            Work closely with the CEO and Project Manager to ensure the vision is met in a timely
            manner
          </li>
          <li>
            In constant communication with the backend to help create API&apos;s and ensure database
            and user security and privacy
          </li>
          <li>
            Utilize Next Auth and Redux Toolkit for authentication and state management,
            respectively
          </li>
        </ul>
      </div>
      <div className={styles.experience}>
        <h2>Freelance</h2>
        <div className={styles.descriptor}>
          <h3>Web Developer</h3>
          <time>Sep.&nbsp;2020</time>
        </div>
        <address>
          Remote
          <Link href="https://www.bbrosfinishing.ca">
            <a>www.bbrosfinishing.ca</a>
          </Link>
        </address>
        <ul>
          <li>Created a website for a local business</li>
          <li>Ensured basic SEO and responsive design</li>
          <li>Utilizes Google Firebase for file compression and serving</li>
        </ul>
      </div>
      <div className={styles.experience}>
        <h2>Trust Science</h2>
        <div className={styles.descriptor}>
          <h3>Summer Intern</h3>
          <time>May - Aug.&nbsp;2018</time>
        </div>
        <address>
          Edmonton, AB
          <Link href="https://www.trustscience.com/">
            <a>www.trustscience.com</a>
          </Link>
        </address>
        <ul>
          <li>Mobile App development with React Native</li>
          <li>Web Portal development with C#, jQuery, and ReactJS</li>
          <li>Assisted in refactoring the Mobile App to approximately 60% of its original size</li>
          <li>Created an AWS Lambda function connecting the App, Portal and Databases together</li>
          <li>Identified and corrected UI/UX problems in both the Portal and App</li>
          <li>Traced and fixed bugs in large codebases of 12,000+ lines of code</li>
        </ul>
      </div>
    </>
  );
};

export default WorkExperience;
