'use client';
import { useCallback, useState } from 'react';
import styles from './AuthForm.module.scss';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from '@/components/UI/Input/Input';
import Button from '@/components/UI/Button/Button';
import AuthSocialButton from '../AuthSocialButton/AuthSocialButton';
import { BsGithub, BsGoogle } from 'react-icons/bs';
import axios from 'axios';

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER');
    } else {
      setVariant('LOGIN');
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (variant === 'REGISTER') {
      axios.post('/api/register', data);
    }

    if (variant === 'LOGIN') {
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
  };

  // Check later onSubmit arrow form event
  return (
    <div className={styles.form__block}>
      <div className={styles.form__body}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          {variant === 'REGISTER' && (
            <Input
              id="name"
              label="Name"
              register={register}
              errors={errors}
              disabled={isLoading}
            />
          )}
          <Input
            id="email"
            label="Email address"
            register={register}
            errors={errors}
            type="email"
            disabled={isLoading}
          />
          <Input
            id="password"
            label="Password"
            register={register}
            errors={errors}
            type="password"
            disabled={isLoading}
          />
          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              {variant === 'LOGIN' ? 'Sign in' : 'Register'}
            </Button>
          </div>
        </form>

        <div className={styles.border}>
          <div className={styles.border__container}>
            <div className={styles.border__body}>
              <div className={styles.border__border} />
            </div>
            <div className={styles.border__textBody}>
              <span className={styles.border__text}>Or continue with</span>
            </div>
          </div>
          <div className={styles.socialButtons}>
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction('github')}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialAction('google')}
            />
          </div>
        </div>
        <div className={styles.switchMessage}>
          <div>
            {variant === 'LOGIN'
              ? 'New to AkuChat?'
              : 'Already have an account?'}
          </div>
          <button
            type="button"
            onClick={toggleVariant}
            className={styles.switchButton}
          >
            {variant === 'LOGIN' ? 'Create an account' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
