import React, { ReactNode } from 'react';
import Link from 'next/link';

import styles from './styles.module.scss';

interface Props {
  title: string;
  jobTitle: string;
  time: string;
  address?: string;
  links?: { href: string; name: string }[];
  children: ReactNode;
}

const WorkExperienceItem = ({
  title,
  jobTitle,
  time,
  address,
  links,
  children,
}: Props) => {
  return (
    <div className={styles.experience}>
      <h2>{title}</h2>
      <div className={styles.descriptor}>
        <h3>{jobTitle}</h3>
        <time>{time}</time>
      </div>
      <address>
        {address}
        {links &&
          links.map((i) => (
            <Link href={i.href} key={i.href}>
              <a>{i.name}</a>
            </Link>
          ))}
      </address>
      <ul>{children}</ul>
    </div>
  );
};

export default WorkExperienceItem;
