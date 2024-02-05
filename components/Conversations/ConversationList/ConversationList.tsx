'use client';

import styles from './ConversationList.module.scss';
import React, { useState } from 'react';
import { FullConversationType } from '@/types';
import { useRouter } from 'next/navigation';
import useConversation from '@/app/hooks/useConversation';
import clsx from 'clsx';
import { MdOutlineGroupAdd } from 'react-icons/md';
import ConversationBox from '../ConversationBox/ConversationBox';

type ConversationListProps = {
  initialItems: FullConversationType[];
};

const ConversationList: React.FC<ConversationListProps> = ({
  initialItems,
}) => {
  const [items, setItems] = useState(initialItems);
  const router = useRouter();
  const { conversationId, isOpen } = useConversation();

  return (
    <aside
      className={clsx(
        styles.conversations,
        isOpen && styles.open,
        conversationId && styles.hidden
      )}
    >
      <div className={styles.conversations__body}>
        <div className={styles.conversations__list}>
          <div className={styles.conversations__messages}>Messages</div>
          <div className={styles.addUsers}>
            <MdOutlineGroupAdd size={20} />
          </div>
        </div>
        {items.map((item) => (
          <ConversationBox
            key={item.id}
            data={item}
            selected={conversationId === item.id}
          />
        ))}
      </div>
    </aside>
  );
};

export default ConversationList;
