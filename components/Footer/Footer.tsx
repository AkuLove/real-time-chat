import Image from 'next/image';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Image
          src={'/images/logo.png'}
          alt="logo"
          height={48}
          width={48}
          className={styles.logo}
        />
      </div>
    </footer>
  );
};

export default Footer;
