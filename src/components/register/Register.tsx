import React, { useState } from 'react';
import { info } from 'types/register';
import RegisterForm from './RegisterForm';

const Register: React.FC = () => {
  const [register, setRegister] = useState<info>({
    email: '',
    password: '',
    nickname: '',
    name: '',
    age: 0,
    sex: '',
    birth: '',
    phone: '',
  });

  const onChangeRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };
  return (
    <RegisterForm
      register={register}
      onChangeRegister={onChangeRegister}
    ></RegisterForm>
  );
};

export default Register;
