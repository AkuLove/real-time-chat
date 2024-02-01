'use client';

import useRoutes from '@/app/hooks/useRoutes';
import styles from './MobileFooter.module.scss';
import useConversation from '@/app/hooks/useConversation';
import MobileItem from '../MobileItem/MobileItem';

const MobileFooter = () => {
  const routes = useRoutes();
  const { isOpen } = useConversation();

  if (isOpen) {
    return null;
  }

  return (
    <div className={styles.mobileFooter}>
      {routes.map((route) => (
        <MobileItem
          key={route.label}
          href={route.href}
          icon={route.icon}
          active={route.active}
          onClick={route.onClick}
        />
      ))}
    </div>
  );
};

export default MobileFooter;
