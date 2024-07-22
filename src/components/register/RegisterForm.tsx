import React, { useRef, useState } from 'react';
import { info } from 'types/register';
import 'react-datepicker/dist/react-datepicker.min.css';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface OwnProps {
  register: info;
  onChangeRegister(e: React.ChangeEvent<HTMLInputElement>): void;
}

const RegisterForm: React.FC<OwnProps> = ({ register, onChangeRegister }) => {
  const [showPassword1, setShowPassword1] = useState<boolean>(false);
  const [showPassword2, setShowPassword2] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const checkPasswordRef = useRef<HTMLInputElement>(null);
  const nicknameRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const onSubmit = () => {
    if (
      register.email === '' ||
      register.password === '' ||
      register.checkPassword === '' ||
      register.nickname === '' ||
      register.name === '' ||
      register.phone === ''
    ) {
      if (register.email === '') {
        emailRef.current?.style.setProperty('border', '1.5px solid red');
        emailRef.current?.style.setProperty('border-radius', '4px');
      }
      if (register.password === '') {
        passwordRef.current?.style.setProperty('border', '1.5px solid red');
        passwordRef.current?.style.setProperty('border-radius', '4px');
      }
      if (register.checkPassword === '') {
        checkPasswordRef.current?.style.setProperty(
          'border',
          '1.5px solid red',
        );
        checkPasswordRef.current?.style.setProperty('border-radius', '4px');
      }
      if (register.nickname === '') {
        nicknameRef.current?.style.setProperty('border', '1.5px solid red');
        nicknameRef.current?.style.setProperty('border-radius', '4px');
      }
      if (register.name === '') {
        nameRef.current?.style.setProperty('border', '1.5px solid red');
        nameRef.current?.style.setProperty('border-radius', '4px');
      }

      if (register.phone === '') {
        phoneRef.current?.style.setProperty('border', '1.5px solid red');
        phoneRef.current?.style.setProperty('border-radius', '4px');
      }
    } else {
      console.log(register);
      console.log(typeof register.age);
      axios
        .post('#', {
          email: register.email,
          password: register.password,
          nickname: register.nickname,
          name: register.name,
          age: Number(register.age),
          sex: register.sex,
          birth: register.birth,
          phone: register.phone,
        })
        .then((response) => {
          // Handle success.
          console.log('Well done!');
          console.log('User profile', response.data.user);
          console.log('User token', response.data.jwt);
          localStorage.setItem('data', response.data.jwt);
          navigate('/홈화면');
        })
        .catch((error) => {
          // Handle error.
          console.log('An error occurred:', error.response);
        });
    }
  };

  const onBlur = () => {
    if (register.email !== '') {
      emailRef.current?.style.removeProperty('border');
      emailRef.current?.style.removeProperty('border-radius');
    }
    if (register.password !== '') {
      passwordRef.current?.style.removeProperty('border');
      passwordRef.current?.style.removeProperty('border-radius');
    }
    if (register.checkPassword !== '') {
      checkPasswordRef.current?.style.removeProperty('border');
      checkPasswordRef.current?.style.removeProperty('border-radius');
    }
    if (register.nickname !== '') {
      nicknameRef.current?.style.removeProperty('border');
      nicknameRef.current?.style.removeProperty('border-radius');
    }
    if (register.name !== '') {
      nameRef.current?.style.removeProperty('border');
      nameRef.current?.style.removeProperty('border-radius');
    }
    if (register.phone !== '') {
      phoneRef.current?.style.removeProperty('border');
      phoneRef.current?.style.removeProperty('border-radius');
    }
  };

  const onClickShowPassword1 = (): void => {
    setShowPassword1(!showPassword1);
  };

  const onClickShowPassword2 = (): void => {
    setShowPassword2(!showPassword2);
  };

  const onKeyDownShowPassword1 = (e: React.KeyboardEvent<HTMLImageElement>) => {
    if (e.key === ' ') {
      setShowPassword1(!showPassword1);
    }
  };
  const onKeyDownShowPassword2 = (e: React.KeyboardEvent<HTMLImageElement>) => {
    if (e.key === ' ') {
      setShowPassword2(!showPassword2);
    }
  };

  const onDateChange = (date: Date | null) => {
    setStartDate(date);
    const thisYear: number = new Date().getFullYear();
    const birthYear: number = date!.getFullYear();

    if (date) {
      const formatted = date.toISOString().split('T')[0]; // YYYY-MM-DD 형식

      onChangeRegister({
        target: {
          name: 'birth',
          value: formatted,
        },
      } as React.ChangeEvent<HTMLInputElement>);

      onChangeRegister({
        target: {
          name: 'age',
          value: (thisYear - birthYear).toString(),
        },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <form className="p-3">
      <div>
        <p className="px-3 my-4 text-xl">회원가입</p>
      </div>

      <p className="px-3 text-sm">이메일</p>
      <div className="mx-auto rounded-lg border border-gray-300 bg-white w-[335px] h-[40px] flex items-center justify-between px-3 my-2">
        <input
          ref={emailRef}
          className="w-[280px]"
          name="email"
          value={register.email}
          type="text"
          placeholder="이메일를 입력하세요"
          onChange={onChangeRegister}
          onBlur={onBlur}
        />
      </div>

      <p className="px-3 text-sm">비밀번호</p>
      <div className="mx-auto rounded-lg border border-gray-300 bg-white w-[335px] h-[40px] flex items-center justify-between px-3 my-2">
        <input
          ref={passwordRef}
          className="w-[280px]"
          name="password"
          value={register.password}
          type={showPassword1 ? 'text' : 'password'}
          placeholder="비밀번호를 입력하세요"
          onChange={onChangeRegister}
          onBlur={onBlur}
        />
        <button type="button">
          <img
            onClick={onClickShowPassword1}
            src={
              !showPassword1 ? '/icons/eyeClosed.svg' : '/icons/eyeOpend.svg'
            }
            alt="눈"
            onKeyDown={onKeyDownShowPassword1}
          />
        </button>
      </div>

      <p className="px-3 text-sm">비밀번호 확인</p>
      <div className="mx-auto rounded-lg border border-gray-300 bg-white w-[335px] h-[40px] flex items-center justify-between px-3 my-2">
        <input
          ref={checkPasswordRef}
          className="w-[280px]"
          name="checkPassword"
          value={register.checkPassword}
          type={showPassword2 ? 'text' : 'password'}
          placeholder="비밀번호를 확인하세요"
          onChange={onChangeRegister}
          onBlur={onBlur}
        ></input>
        <button type="button">
          <img
            onClick={onClickShowPassword2}
            src={
              !showPassword2 ? '/icons/eyeClosed.svg' : '/icons/eyeOpend.svg'
            }
            alt="눈"
            onKeyDown={onKeyDownShowPassword2}
          />
        </button>
      </div>

      <p className="px-3 text-sm">닉네임</p>
      <div className="mx-auto rounded-lg border border-gray-300 bg-white w-[335px] h-[40px] flex items-center justify-between px-3 my-2">
        <input
          ref={nicknameRef}
          className="w-[280px]"
          name="nickname"
          value={register.nickname}
          type="text"
          placeholder="닉네임를 입력하세요"
          onChange={onChangeRegister}
          onBlur={onBlur}
        />
      </div>

      <p className="px-3 text-sm">이름/성별</p>
      <div className="m-2 rounded-lg border border-gray-300 bg-white w-[160px] h-[40px] flex items-center">
        <input
          ref={nameRef}
          className="w-[135px] ml-3"
          name="name"
          value={register.name}
          type="text"
          placeholder="이름을 입력하세요"
          onChange={onChangeRegister}
          onBlur={onBlur}
        />
        <div className="flex items-center ml-7">
          <input
            id="sex1"
            className="hidden peer"
            name="sex"
            type="radio"
            value="male"
            onChange={onChangeRegister}
            checked={register.sex === 'male'}
          />
          <label
            className="flex justify-center items-center text-sm peer-checked:bg-yellow-300 rounded-lg text-center w-[75px] h-[40px] border border-solid border-gray-300"
            htmlFor="sex1"
          >
            Male
          </label>
        </div>
        <div className="flex items-center ml-2.5">
          <input
            id="sex2"
            className="hidden peer"
            name="sex"
            type="radio"
            value="female"
            onChange={onChangeRegister}
            checked={register.sex === 'female'}
          />
          <label
            className="flex justify-center items-center text-sm peer-checked:bg-yellow-300 rounded-lg text-center w-[75px] h-[40px] border border-solid border-gray-300"
            htmlFor="sex2"
          >
            Female
          </label>
        </div>
      </div>

      <p className="px-3 text-sm">생년월일/휴대전화</p>
      <div className="flex">
        <div>
          <DatePicker
            className="text-center w-[160px] h-[40px] m-2 rounded-lg border border-gray-300 bg-white items-center "
            name="birth"
            selected={startDate}
            onChange={onDateChange}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            dateFormat="yyyy-MM-dd"
          />
        </div>

        <div className="m-2 rounded-lg border border-gray-300 bg-white flex items-center w-[160px] h-[40px]">
          <input
            ref={phoneRef}
            className="w-[135px] ml-3 text-center"
            name="phone"
            value={register.phone}
            type="text"
            placeholder="010-0000-0000"
            onChange={onChangeRegister}
            onBlur={onBlur}
          />
        </div>
      </div>

      <div className="mt-[20px] text-center">
        <button
          onClick={onSubmit}
          className="rounded-lg bg-yellow-300 w-[335px] h-[45px]"
          type="button"
        >
          회원가입
        </button>
        <div>
          <span>이미 회원이신가요? </span>
          <button className="underline" type="button">
            로그인하기
          </button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
