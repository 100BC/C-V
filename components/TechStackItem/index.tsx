import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.scss';

interface Props {
  link: string;
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
  return (
    <Link href={link}>
      <a className={styles.item}>
        <Image
          src={src}
          layout="fixed"
          width={width}
          height={height}
          alt={`${brand} Logo"`}
        />
        &nbsp;{brand}
      </a>
    </Link>
  );
};

export default TechStackItem;
