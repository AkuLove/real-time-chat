import DesktopSideBar from '../DesktopSideBar/DesktopSideBar';
import styles from './SideBar.module.scss';

const SideBar = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.sideBar}>
      <DesktopSideBar />
      <div className={styles.sideBar__content}>{children}</div>
    </div>
  );
};

export default SideBar;
