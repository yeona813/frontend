import React, { useEffect, useState } from 'react';
import { info, err } from 'types/register';
import RegisterForm from './RegisterForm';

const Register: React.FC = () => {
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

  useEffect(() => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(register.email)) {
      // console.log('올바른 이메일 형식이 아닙니다.');
      setError({ ...error, emailErr: false });
    } else {
      setError({ ...error, emailErr: true });
    }
  }, [register.email]);

  useEffect(() => {
    if (error.passwordErr) {
      if (register.checkPassword !== register.password) {
        // console.log('비밀번호가 일치하지 않습니다.');
        setError({ ...error, checkPasswordErr: false });
      } else if (register.password !== '' && register.checkPassword !== '') {
        setError({ ...error, checkPasswordErr: true });
      }
    }
  }, [register.password, register.checkPassword]);

  const onChangeRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'password') {
      const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/;

      setRegister({ ...register, [e.target.name]: e.target.value });

      if (!regex.test(e.target.value)) {
        // console.log('올바른 비밀번호 형식이 아닙니다.');
        setError({ ...error, passwordErr: false, checkPasswordErr: false });
      } else {
        setError({ ...error, passwordErr: true });
      }
    } else if (e.target.name === 'checkPassword') {
      setRegister({ ...register, [e.target.name]: e.target.value });
      if (!error.passwordErr) {
        setError({ ...error, checkPasswordErr: false });
      }
    } else if (e.target.name === 'nickname') {
      setRegister({ ...register, [e.target.name]: e.target.value });
      if (e.target.value.length >= 3) {
        setError({ ...error, nicknameErr: true });
      } else {
        setError({ ...error, nicknameErr: false });
      }
    } else setRegister({ ...register, [e.target.name]: e.target.value });
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
