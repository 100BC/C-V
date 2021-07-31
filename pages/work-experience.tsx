import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Layout from '@components/Layout';
import styles from '@styles/workExperience.module.scss';
import WorkExperience from '@components/WorkExperienceRender/WorkExperience';
import PersonalProjects from '@components/WorkExperienceRender/PersonalProjects';
import UniProjects from '@components/WorkExperienceRender/UniProjects';

const WorkExperiencePage = () => {
  const router = useRouter();
  const activePage = router.query.page;

  useEffect(() => {
    if (!activePage) {
      router.push('/work-experience?page=0');
    }
  }, [activePage, router]);

  return (
    <Layout noIndex title="Otman Maowed | Work Experience">
      <h1>Work Experience</h1>
      <nav className={styles.nav}>
        <Link href="/work-experience?page=0">
          <a className={activePage === '0' ? styles.active : ''}>Work Experience</a>
        </Link>
        <Link href="/work-experience?page=1">
          <a className={activePage === '1' ? styles.active : ''}>Personal Projects</a>
        </Link>
        <Link href="/work-experience?page=2">
          <a className={activePage === '2' ? styles.active : ''}>University Projects</a>
        </Link>
      </nav>
      <section>
        {(activePage === '0' || !activePage) && <WorkExperience />}
        {activePage === '1' && <PersonalProjects />}
        {activePage === '2' && <UniProjects />}
      </section>
    </Layout>
  );
};

export default WorkExperiencePage;
