import React, { useCallback, useEffect, useState } from 'react';
import { info, err } from 'types/register';
import RegisterForm from './RegisterForm';

const Register = () => {
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

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const isValidPassword = (password: string) => {
    return /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password);
  };

  // error와 register.password의 값이 바뀌면 updateError 함수가 새로 생성.
  // error가 바뀌었다라는 것은 유효성 검사의 경계에 있었다는 것.
  // register.password가 바뀌었다는 것은 비밀번호 입력이 있었다는 것.
  const updateError = useCallback(
    (name: string, value: string) => {
      let { emailErr, passwordErr, checkPasswordErr, nicknameErr } = error;

      if (name === 'email') {
        emailErr = isValidEmail(value);
      } else if (name === 'password') {
        passwordErr = isValidPassword(value);
        if (!passwordErr) checkPasswordErr = false;
      } else if (name === 'checkPassword') {
        checkPasswordErr =
          value === register.password && passwordErr && value !== '';
      } else if (name === 'nickname') {
        nicknameErr = value.length >= 3;
      }

      setError({ emailErr, passwordErr, checkPasswordErr, nicknameErr });
    },
    [error, register.password],
  );

  useEffect(() => {
    // console.log('useEffect checking(email) Called');
    updateError('email', register.email);
  }, [register.email]);

  useEffect(() => {
    // console.log('useEffect checking(password, checkPassword) Called');
    updateError('password', register.password);
    updateError('checkPassword', register.checkPassword);
  }, [register.password, register.checkPassword]);

  const onChangeRegister = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log('onChangeRegister Called');
      setRegister({ ...register, [e.target.name]: e.target.value });
      updateError(e.target.name, e.target.value);
    },
    [register, updateError],
  );

  return (
    <RegisterForm
      register={register}
      error={error}
      onChangeRegister={onChangeRegister}
    ></RegisterForm>
  );
};

export default Register;
