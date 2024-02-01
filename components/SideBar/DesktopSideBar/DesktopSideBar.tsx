'use client';

import useRoutes from '@/app/hooks/useRoutes';
import { useState } from 'react';
import styles from './DesktopSideBar.module.scss';
import DesktopItem from '../DesktopItem/DesktopItem';
import { User } from '@prisma/client';
import Avatar from '@/components/Avatar/Avatar';

type DesktopSideBarProps = {
  currentUser: User;
};

const DesktopSideBar: React.FC<DesktopSideBarProps> = ({ currentUser }) => {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);

  console.log(currentUser);

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
      <nav className={styles.sideBar__mainInfo}>
        <div>
          <button
            className={styles.sideBar__avatar}
            onClick={() => setIsOpen(true)}
          >
            <Avatar user={currentUser} />
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default DesktopSideBar;
