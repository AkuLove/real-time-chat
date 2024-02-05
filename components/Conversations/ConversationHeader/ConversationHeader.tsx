'use client';

import { Conversation, User } from '@prisma/client';
import styles from './ConversationHeader.module.scss';
import useOtherUser from '@/app/hooks/useOtherUser';
import { useMemo } from 'react';
import Link from 'next/link';
import { HiChevronLeft, HiEllipsisHorizontal } from 'react-icons/hi2';
import Avatar from '@/components/Avatar/Avatar';

type ConversationHeaderProps = {
  conversation: Conversation & {
    users: User[];
  };
};

const ConversationHeader: React.FC<ConversationHeaderProps> = ({
  conversation,
}) => {
  const otherUser = useOtherUser(conversation);

  const statusText = useMemo(() => {
    if (conversation.isGroup) {
      return `${conversation.users.length} members`;
    }

    return 'Active';
  }, [conversation]);

  return (
    <div className={styles.header}>
      <div className={styles.header__body}>
        <Link href="/conversations" className={styles.header__link}>
          <HiChevronLeft className={styles.image} size={32} />
        </Link>
        <Avatar user={otherUser} />
        <div className={styles.header__name}>
          <div>{conversation.name || otherUser.name}</div>
          <div className={styles.header__status}>{statusText}</div>
        </div>
      </div>
      <HiEllipsisHorizontal
        size={32}
        className={styles.header__options}
        onClick={() => {}}
      />
    </div>
  );
};

export default ConversationHeader;
