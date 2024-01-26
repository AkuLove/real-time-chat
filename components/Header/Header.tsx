import Image from 'next/image';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <div className="container">
        <Image
          src={'/images/logo.png'}
          alt="logo"
          height={48}
          width={48}
          className={styles.logo}
        />
      </div>
    </header>
  );
};

export default Header;
