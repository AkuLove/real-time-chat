'use client';

import { useRouter } from 'next/navigation';
import styles from './ConversationBox.module.scss';
import { useCallback, useMemo } from 'react';
import { Conversation, Message, User } from '@prisma/client';
import { format } from 'date-fns';
import { useSession } from 'next-auth/react';
import clsx from 'clsx';
import { FullConversationType } from '@/types';
import useOtherUser from '@/app/hooks/useOtherUser';
import Avatar from '@/components/Avatar/Avatar';

type ConversationBoxProps = {
  data: FullConversationType;
  selected?: boolean;
};

const ConversationBox: React.FC<ConversationBoxProps> = ({
  selected,
  data,
}) => {
  const otherUser = useOtherUser(data);
  const session = useSession();
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(`/conversations/${data.id}`);
  }, [data.id, router]);

  const lastMessage = useMemo(() => {
    const messages = data.messages || [];

    return messages[messages.length - 1];
  }, [data.messages]);

  const userEmail = useMemo(() => {
    return session?.data?.user?.email;
  }, [session?.data?.user?.email]);

  const hasSeen = useMemo(() => {
    if (!lastMessage) {
      return false;
    }

    const seenArray = lastMessage.seen || [];

    if (!userEmail) {
      return false;
    }

    return seenArray.filter((user) => user.email === userEmail).length !== 0;
  }, [userEmail, lastMessage]);

  const lastMessageText = useMemo(() => {
    if (lastMessage?.image) {
      return 'Sent an image';
    }

    if (lastMessage?.body) {
      return lastMessage.body;
    }

    return 'Started a conversation';
  }, [lastMessage]);

  return (
    <div
      onClick={handleClick}
      className={clsx(styles.conversation, selected ? styles.selected : '')}
    >
      <Avatar user={otherUser} />
      <div className={styles.conversation__body}>
        <div className={styles.conversation__body_focus}>
          <div className={styles.conversation__info}>
            <p className={styles.conversation__name}>
              {data.name || otherUser.name}
            </p>
            {lastMessage?.createdAt && (
              <p className={styles.conversation__lastMessageTime}>
                {format(new Date(lastMessage.createdAt), 'p')}
              </p>
            )}
          </div>
          <p
            className={clsx(
              styles.conversation__lastMessage,
              hasSeen ? styles.seen : ''
            )}
          >
            {lastMessageText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConversationBox;
