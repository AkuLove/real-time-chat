'use client';

import React from 'react';
import styles from './MessageInput.module.scss';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

type MessageInputProps = {
  id: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  placeholder?: string;
  type?: string;
  required?: boolean;
};

const MessageInput: React.FC<MessageInputProps> = ({
  errors,
  id,
  register,
  placeholder,
  required,
  type,
}) => {
  return (
    <div className={styles.input}>
      <input
        placeholder={placeholder}
        id={id}
        autoComplete={id}
        type={type}
        {...register(id, { required })}
        className={styles.input__input}
      />
    </div>
  );
};

export default MessageInput;
