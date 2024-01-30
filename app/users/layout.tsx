import SideBar from '@/components/SideBar/SideBar/SideBar';
import styles from './page.module.scss';

const UsersLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SideBar>
      <div className={styles.sideBar}>{children}</div>
    </SideBar>
  );
};

export default UsersLayout;
