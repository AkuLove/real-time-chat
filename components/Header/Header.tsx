import styles from './Header.module.scss';
import Logo from '../UI/Logo';
import Link from 'next/link';
import { IoLogoGithub } from 'react-icons/io';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__links}>
          <div className={styles.header__logo}>
            <Logo />
          </div>
          <div className={styles.header__github}>
            <Link
              href="https://github.com/AkuLove"
              className={styles.header__link}
            >
              <IoLogoGithub className={styles.header__icon} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
