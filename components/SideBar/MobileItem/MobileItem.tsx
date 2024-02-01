'use client';

import { IconType } from 'react-icons';
import Link from 'next/link';
import clsx from 'clsx';
import styles from './MobileItem.module.scss';

type MobileItemProps = {
  icon: IconType;
  href: string;
  onClick?: () => void;
  active?: boolean;
};

const MobileItem: React.FC<MobileItemProps> = ({
  href,
  icon: Icon,
  active,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <Link href={href} className={clsx(styles.link, active && styles.active)}>
      <button className={styles.button} onClick={handleClick}>
        <Icon className={styles.icon} />
      </button>
    </Link>
  );
};

export default MobileItem;
