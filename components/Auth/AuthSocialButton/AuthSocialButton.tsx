import styles from './AuthSocialButton.module.scss';
import { IconType } from 'react-icons';

type AuthSocialButtonProps = {
  icon: IconType;
  onClick: () => void;
};

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <button type="button" onClick={onClick} className={styles.button}>
      <Icon />
    </button>
  );
};

export default AuthSocialButton;
