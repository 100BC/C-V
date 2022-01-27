import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { combine } from '@utils/styleHelpers';
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
  width = 36,
  height = 36,
}: Props) => {
  if (link) {
    return (
      <Link href={link}>
        <a className={combine(styles.item, styles.link)} rel="external">
          <Image
            src={src}
            layout="fixed"
            width={width}
            height={height}
            alt={`${brand} Logo"`}
          />
          {brand}
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
