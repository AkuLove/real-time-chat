'use client';

import { IconType } from 'react-icons';
import clsx from 'clsx';
import Link from 'next/link';

import styles from './DesktopItem.module.scss';

type DesktopItemProps = {
  label: string;
  icon: IconType;
  href: string;
  onClick?: () => void;
  active?: boolean;
};

const DesktopItem: React.FC<DesktopItemProps> = ({
  label,
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
    <li>
      <Link href={href} className={clsx(styles.link, active && styles.active)}>
        <button className={styles.button} onClick={handleClick}>
          <Icon className={styles.icon} />
          <span className={styles.text}>{label}</span>
        </button>
      </Link>
    </li>
  );
};

export default DesktopItem;
