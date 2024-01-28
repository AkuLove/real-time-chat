'use client';

import clsx from 'clsx';
import styles from './Input.module.scss';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import React from 'react';

type InputProps = {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
};

const Input: React.FC<InputProps> = ({
  label,
  id,
  required,
  register,
  disabled,
  errors,
  type,
}) => {
  return (
    <div>
      <label htmlFor="id" className={styles.label}>
        {label}
      </label>
      <div className={styles.inputBody}>
        <input
          type={type}
          autoComplete={id}
          disabled={disabled}
          id={id}
          {...register(id, { required })}
          className={clsx(
            styles.input,
            errors[id] && styles.error,
            disabled && styles.disabled
          )}
        />
      </div>
    </div>
  );
};

export default Input;
