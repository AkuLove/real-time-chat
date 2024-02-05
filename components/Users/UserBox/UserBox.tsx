'use client';

import { User } from '@prisma/client';
import styles from './UserBox.module.scss';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import axios from 'axios';
import Avatar from '@/components/Avatar/Avatar';

type UserBoxProps = {
  data: User;
};

const UserBox: React.FC<UserBoxProps> = ({ data }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(() => {
    setIsLoading(true);

    axios
      .post('/api/conversations', {
        userId: data.id,
      })
      .then((data) => {
        router.push(`/conversations/${data.data.id}`);
      })
      .finally(() => setIsLoading(false));
  }, [data, router]);

  return (
    <div onClick={handleClick} className={styles.box}>
      <Avatar user={data} />
      <div className={styles.box__body}>
        <div className={styles.box__body_focus}>
          <div className={styles.box__info}>
            <p className={styles.box__name}>{data.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBox;
