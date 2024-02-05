'use client';

import useConversation from '@/app/hooks/useConversation';
import styles from './ConversationForm.module.scss';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { HiPhoto, HiPaperAirplane } from 'react-icons/hi2';
import MessageInput from '@/components/UI/MessageInput/MessageInput';

const ConversationForm = () => {
  const { conversationId } = useConversation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      message: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue('message', '', { shouldValidate: true });
    axios.post('/api/messages', {
      ...data,
      conversationId,
    });
  };

  return (
    <div className={styles.form}>
      <HiPhoto size={30} className={styles.form__addPhoto} />
      <form className={styles.form__body} onSubmit={handleSubmit(onSubmit)}>
        <MessageInput
          id="message"
          register={register}
          errors={errors}
          required
          placeholder="Write a message"
        />
        <button type="submit" className={styles.form__button}>
          <HiPaperAirplane size={18} className={styles.form__buttonIcon} />
        </button>
      </form>
    </div>
  );
};

export default ConversationForm;
