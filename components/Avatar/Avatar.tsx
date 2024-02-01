import { User } from '@prisma/client';
import styles from './Avatar.module.scss';
import Image from 'next/image';

type AvatarProps = {
  user?: User;
};

const Avatar: React.FC<AvatarProps> = ({ user }) => {
  return (
    <div className={styles.avatar}>
      <div className={styles.avatar__body}>
        <Image alt="avatar" src={user?.image || '/images/user.png'} fill />
      </div>
      <span className={styles.span} />
    </div>
  );
};

export default Avatar;
