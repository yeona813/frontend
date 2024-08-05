import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { info, err } from 'types/register';
import RegisterForm from './RegisterForm';

const Register = () => {
  const isLoggedIn = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  const [register, setRegister] = useState<info>({
    email: '',
    password: '',
    checkPassword: '',
    nickname: '',
  });

  const [error, setError] = useState<err>({
    emailErr: false,
    passwordErr: false,
    checkPasswordErr: false,
    nicknameErr: false,
  });

  const emailMountRef = useRef(false);
  const passwordMountRef = useRef(false);

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPassword = (password: string) =>
    /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password);

  const updateError = useCallback(
    (name: string, value: string) => {
      let { emailErr, passwordErr, checkPasswordErr, nicknameErr } = error;

      if (name === 'email') {
        emailErr = !isValidEmail(value);
      } else if (name === 'password') {
        passwordErr = !isValidPassword(value);
        if (!passwordErr) checkPasswordErr = value !== register.password;
      } else if (name === 'checkPassword') {
        checkPasswordErr = value !== register.password;
      } else if (name === 'nickname') {
        nicknameErr = value.length < 3;
      }

      // 불필요한 리렌더링 방지용
      setError((prevError) => {
        if (
          prevError.emailErr !== emailErr ||
          prevError.passwordErr !== passwordErr ||
          prevError.checkPasswordErr !== checkPasswordErr ||
          prevError.nicknameErr !== nicknameErr
        ) {
          return { emailErr, passwordErr, checkPasswordErr, nicknameErr };
        }
        return prevError;
      });
    },
    [error, register.password],
  );

  useEffect(() => {
    if (!emailMountRef.current) {
      emailMountRef.current = true;
      return;
    }
    updateError('email', register.email);
  }, [register.email, updateError]);

  useEffect(() => {
    if (!passwordMountRef.current) {
      passwordMountRef.current = true;
      return;
    }
    updateError('password', register.password);
    updateError('checkPassword', register.checkPassword);
  }, [register.password, register.checkPassword, updateError]);

  const onChangeRegister = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRegister((prevRegister) => ({
        ...prevRegister,
        [e.target.name]: e.target.value,
      }));
      updateError(e.target.name, e.target.value);
    },
    [updateError],
  );

  return (
    <RegisterForm
      register={register}
      error={error}
      onChangeRegister={onChangeRegister}
    />
  );
};

export default memo(Register);
