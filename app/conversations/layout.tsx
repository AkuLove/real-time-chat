import SideBar from '@/components/SideBar/SideBar/SideBar';
import styles from './page.module.scss';
import ConversationList from '@/components/Conversations/ConversationList/ConversationList';
import getConversations from '../actions/getConversations';

const Conversationslayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const conversations = await getConversations();

  return (
    <SideBar>
      <div className={styles.layout}>
        <ConversationList initialItems={conversations} />
        {children}
      </div>
    </SideBar>
  );
};

export default Conversationslayout;
