import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { conditional } from '@utils/styleHelpers';

import Layout from '@components/Layout';
import styles from '@styles/experience.module.scss';
import WorkExperience from '@components/WorkExperienceRender/WorkExperience';
import PersonalProjects from '@components/WorkExperienceRender/PersonalProjects';

interface Props {
  page: 'work' | 'projects';
}

const Experience = ({ page }: Props) => {
  return (
    <Layout
      noIndex
      canonicalUrlPath={`/experience/${page}`}
      title="Otman Maoued | Work Experience"
    >
      <h1>Experience</h1>
      <nav className={styles.nav} aria-label="swap type of experience">
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
      </nav>
      <section>
        {page === 'work' && <WorkExperience />}
        {page === 'projects' && <PersonalProjects />}
      </section>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      { params: { experience: 'work' } },
      { params: { experience: 'projects' } },
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
