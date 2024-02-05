import { User } from '@prisma/client';
import styles from './UsersList.module.scss';
import UserBox from '../UserBox/UserBox';

type UsersListProps = {
  items: User[];
};

const UsersList: React.FC<UsersListProps> = ({ items }) => {
  return (
    <aside className={styles.users}>
      <div className={styles.users__body}>
        <div className={styles.users__list}>
          <div className={styles.users__user}>People</div>
        </div>
        {items.map((item) => (
          <UserBox key={item.id} data={item} />
        ))}
      </div>
    </aside>
  );
};

export default UsersList;
