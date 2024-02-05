'use client';

import useConversation from '../hooks/useConversation';
import styles from './page.module.scss';
import clsx from 'clsx';
import EmptyState from '@/components/Users/EmptyState/EmptyState';

const Home = () => {
  const { isOpen } = useConversation();

  return (
    <div
      className={clsx(
        styles.conversations,
        isOpen ? styles.open : styles.hidden
      )}
    >
      <EmptyState />
    </div>
  );
};

export default Home;
