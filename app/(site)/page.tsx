import AuthForm from '@/components/Auth/AuthForm/AuthForm';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.body}>
      <h2 className={styles.title}>Sign in to your account</h2>
      <AuthForm />
    </div>
  );
}
