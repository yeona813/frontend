import React, { useEffect, useState } from 'react';
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

  const updateError = (name: string, value: string) => {
    let { emailErr, passwordErr, checkPasswordErr, nicknameErr } = error;

    if (name === 'email') {
      emailErr = isValidEmail(value);
    } else if (name === 'password') {
      passwordErr = isValidPassword(value);
      if (!passwordErr) checkPasswordErr = false;
    } else if (name === 'checkPassword') {
      checkPasswordErr = value === register.password && value !== '';
    } else if (name === 'nickname') {
      nicknameErr = value.length >= 3;
    }

    setError({ emailErr, passwordErr, checkPasswordErr, nicknameErr });
  };

  useEffect(() => {
    updateError('email', register.email);
  }, [register.email]);

  useEffect(() => {
    updateError('password', register.password);
    updateError('checkPassword', register.checkPassword);
  }, [register.password, register.checkPassword]);

  const onChangeRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
    updateError(e.target.name, e.target.value);
  };

  return (
    <RegisterForm
      register={register}
      error={error}
      onChangeRegister={onChangeRegister}
    ></RegisterForm>
  );
};

export default Register;
