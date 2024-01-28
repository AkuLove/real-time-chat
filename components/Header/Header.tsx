import styles from './Header.module.scss';
import Logo from '../UI/Logo';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.logo}>
          <Logo />
        </div>
      </div>
    </header>
  );
};

export default Header;
