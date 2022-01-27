import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { conditional } from '@utils/styleHelpers';

import Layout from '@components/Layout';
import styles from '@styles/workExperience.module.scss';
import WorkExperience from '@components/WorkExperienceRender/WorkExperience';
import PersonalProjects from '@components/WorkExperienceRender/PersonalProjects';
import UniProjects from '@components/WorkExperienceRender/UniProjects';

interface Props {
  page: 'work' | 'projects' | 'university';
}

const Experience = ({ page }: Props) => {
  return (
    <Layout
      noIndex
      canonicalUrlPath={`/experience/${page}`}
      title="Otman Maowed | Work Experience"
    >
      <h1>Work Experience</h1>
      <nav className={styles.nav}>
        <Link href="/experience/work">
          <a className={conditional(page === 'work', styles.active)}>
            Work Experience
          </a>
        </Link>
        <Link href="/experience/projects">
          <a className={conditional(page === 'projects', styles.active)}>
            Personal Projects
          </a>
        </Link>
        <Link href="/experience/university">
          <a className={conditional(page === 'university', styles.active)}>
            University Projects
          </a>
        </Link>
      </nav>
      <section>
        {page === 'work' && <WorkExperience />}
        {page === 'projects' && <PersonalProjects />}
        {page === 'university' && <UniProjects />}
      </section>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      { params: { experience: 'work' } },
      { params: { experience: 'projects' } },
      { params: { experience: 'university' } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  if (!params?.experience) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page: params.experience,
      key: params,
    },
  };
};

export default Experience;
