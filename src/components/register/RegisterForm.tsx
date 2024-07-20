import React from 'react';
import { info } from 'types/register';

interface OwnProps {
  register: info;
  onChangeRegister(e: React.ChangeEvent<HTMLInputElement>): void;
}

const RegisterForm: React.FC<OwnProps> = ({ register, onChangeRegister }) => {
  return (
    <form>
      <input
        name="email"
        value={register.email}
        type="text"
        placeholder="이메일를 입력하세요"
        onChange={onChangeRegister}
      ></input>
      <br />
      <input
        name="password"
        value={register.password}
        type="password"
        placeholder="비밀번호를 입력하세요"
        onChange={onChangeRegister}
      ></input>
      <br />
      <input
        name="nickname"
        value={register.nickname}
        type="text"
        placeholder="유저 네임을 입력하세요"
        onChange={onChangeRegister}
      ></input>
      <br />

      <input
        name="name"
        value={register.name}
        type="text"
        placeholder="이름을 입력하세요"
        onChange={onChangeRegister}
      ></input>
      <br />
      <input
        name="age"
        value={register.age}
        type="text"
        placeholder="나이를 입력하세요"
        onChange={onChangeRegister}
      ></input>
      <br />
      <input
        name="sex"
        value="male"
        type="radio"
        onChange={onChangeRegister}
      ></input>
      <input
        name="sex"
        value="female"
        type="radio"
        onChange={onChangeRegister}
      ></input>
      <br />
      <input
        name="birth"
        value={register.birth}
        type="date"
        onChange={onChangeRegister}
      ></input>
      <br />
      <input
        name="phone"
        value={register.phone}
        type="tel"
        placeholder="전화번호를 입력하세요"
        onChange={onChangeRegister}
      ></input>
      <br />

      <button type="submit">가입하기</button>
    </form>
  );
};

export default RegisterForm;
