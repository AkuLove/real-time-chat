'use client';

import useRoutes from '@/app/hooks/useRoutes';
import { useState } from 'react';
import styles from './DesktopSideBar.module.scss';
import DesktopItem from '../DesktopItem/DesktopItem';

const DesktopSideBar = () => {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={styles.sideBar}>
      <nav className={styles.sideBar__navigation}>
        <ul role="list" className={styles.sideBar__list}>
          {routes.map((item) => (
            <DesktopItem
              key={item.label}
              href={item.href}
              label={item.label}
              icon={item.icon}
              active={item.active}
              onClick={item.onClick}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default DesktopSideBar;
