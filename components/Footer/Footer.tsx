import Link from 'next/link';
import styles from './Footer.module.scss';
import { IoLogoGithub } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <Link href="https://github.com/AkuLove" className={styles.footer__link}>
          <IoLogoGithub className={styles.footer__icon} />
          <p className={styles.footer__text}>AkuLove</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
