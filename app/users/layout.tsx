import SideBar from '@/components/SideBar/SideBar/SideBar';
import styles from './page.module.scss';
import getUsers from '../actions/getUsers';
import UsersList from '@/components/Users/UsersList/UsersList';

const UsersLayout = async ({ children }: { children: React.ReactNode }) => {
  const users = await getUsers();

  return (
    <SideBar>
      <div className={styles.sideBar}>
        <UsersList items={users} />
        {children}
      </div>
    </SideBar>
  );
};

export default UsersLayout;
