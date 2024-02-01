import getCurrentUser from '@/app/actions/getCurrentUser';
import DesktopSideBar from '../DesktopSideBar/DesktopSideBar';
import MobileFooter from '../MobileFooter/MobileFooter';
import styles from './SideBar.module.scss';

const SideBar = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();

  return (
    <div className={styles.sideBar}>
      <DesktopSideBar currentUser={currentUser!} />
      <MobileFooter />
      <div className={styles.sideBar__content}>{children}</div>
    </div>
  );
};

export default SideBar;
