import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import OpenExternal from '@public/svg/open-external.svg';
import styles from './styles.module.scss';

interface Props {
  link?: string;
  src: string;
  brand: string;
  width?: number;
  height?: number;
}

const TechStackItem = ({
  link,
  src,
  brand,
  width = 48,
  height = 48,
}: Props) => {
  if (link) {
    return (
      <Link href={link}>
        <a className={styles.item} rel="external">
          <Image
            src={src}
            layout="fixed"
            width={width}
            height={height}
            alt={`${brand} Logo"`}
          />

          <span className={styles.external}>
            {brand}
            <OpenExternal />
          </span>
        </a>
      </Link>
    );
  }

  return (
    <span className={styles.item}>
      <Image
        src={src}
        layout="fixed"
        width={width}
        height={height}
        alt={`${brand} Logo"`}
      />
      {brand}
    </span>
  );
};

export default TechStackItem;
