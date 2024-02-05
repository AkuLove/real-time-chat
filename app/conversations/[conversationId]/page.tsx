import getConversationById from '@/app/actions/getConversationById';
import getMessages from '@/app/actions/getMessages';
import EmptyState from '@/components/Users/EmptyState/EmptyState';

import styles from './page.module.scss';
import ConversationHeader from '@/components/Conversations/ConversationHeader/ConversationHeader';
import ConversationBody from '@/components/Conversations/ConversationBody/ConversationBody';
import ConversationForm from '@/components/Conversations/ConversationForm/ConversationForm';

type IParams = {
  conversationId: string;
};

const ConversationsIdPage = async ({ params }: { params: IParams }) => {
  const conversation = await getConversationById(params.conversationId);
  const messages = await getMessages(params.conversationId);

  if (!conversation) {
    return (
      <div className={styles.dialog}>
        <div className={styles.dialog__body}>
          <EmptyState />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.dialog}>
      <div className={styles.dialog__body}>
        <ConversationHeader conversation={conversation} />
        <ConversationBody />
        <ConversationForm />
      </div>
    </div>
  );
};

export default ConversationsIdPage;
