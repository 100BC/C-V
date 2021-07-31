import React, { useState } from 'react';

import Layout from '@components/Layout';
import styles from '@styles/workExperience.module.scss';
import WorkExperience from '@components/WorkExperience/WorkExperience';
import PersonalProjects from '@components/WorkExperience/PersonalProjects';
import UniProjects from '@components/WorkExperience/UniProjects';

const WorkExperiencePage = () => {
  const [filter, setFilter] = useState(0);

  return (
    <Layout noIndex title="Otman Maowed | Work Experience">
      <h1>Work Experience</h1>
      <section>
        <nav className={styles.nav}>
          <button
            onClick={() => setFilter(0)}
            type="button"
            className={filter === 0 ? styles.active : ''}
          >
            Work Experience
          </button>
          <button
            onClick={() => setFilter(1)}
            type="button"
            className={filter === 1 ? styles.active : ''}
          >
            Personal Projects
          </button>
          <button
            onClick={() => setFilter(2)}
            type="button"
            className={filter === 2 ? styles.active : ''}
          >
            University Projects
          </button>
        </nav>
        {filter === 0 && <WorkExperience />}
        {filter === 1 && <PersonalProjects />}
        {filter === 2 && <UniProjects />}
      </section>
    </Layout>
  );
};

export default WorkExperiencePage;
