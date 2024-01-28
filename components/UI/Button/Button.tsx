'use client';

import clsx from 'clsx';
import styles from './Button.module.scss';
import React from 'react';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  danger,
  disabled,
  fullWidth,
  onClick,
  secondary,
  type,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        styles.button,
        disabled && styles.disabled,
        fullWidth && styles.full,
        secondary && styles.secondary,
        danger && styles.danger,
        !secondary && !danger && styles.default
      )}
    >
      {children}
    </button>
  );
};

export default Button;
