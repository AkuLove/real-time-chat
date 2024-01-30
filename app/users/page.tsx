import styles from './page.module.scss';
import EmptyState from '@/components/Users/EmptyState/EmptyState';

const Users = () => {
  return (
    <div className={styles.users}>
      <EmptyState />
    </div>
  );
};

export default Users;
