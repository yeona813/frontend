import React, { useEffect, useRef, useState } from 'react';
import { info, err } from 'types/register';
import 'react-datepicker/dist/react-datepicker.min.css';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// 추가해야될 사항
// 1. 이메일 유효성 검사 - 해결
// 2. 이메일 중복 검사
// 3. 비밀번호 유효성 검사 - 해결
// 4. 비밀번호 일치 검사 - 해결
// 5. 닉네임 중복 검사
// 6. 컴포넌트 부분 별로 나누기
// 7. 전화번호 대쉬로 가공하기 - 절반 해결
// 8. 조건이 만족되지 않으면 빨간박스 대신 빨간 경고 메세지 뜨도록 수정하기 - 절반 해결

// 문제사항: 비밀번호 일치 불일치 - 해결
// 문제사항: 제출하기 2번 눌러야 age가 넘어감 그리고 birth값 미아됨 - 해결

interface OwnProps {
  register: info;
  error: err;
  onChangeRegister(e: React.ChangeEvent<HTMLInputElement>): void;
}

const RegisterForm: React.FC<OwnProps> = ({
  register,
  error,
  onChangeRegister,
}) => {
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
      if (!error.emailErr) {
        // 중복 검사 적용 필요
        emailRef.current?.style.setProperty('color', 'red');
        emailRef.current?.style.setProperty('font-weight', 'bold');
      }
      if (!error.passwordErr) {
        passwordRef.current?.style.setProperty('color', 'red');
        passwordRef.current?.style.setProperty('font-weight', 'bold');
      }
      if (!error.checkPasswordErr) {
        checkPasswordRef.current?.style.setProperty('color', 'red');
        checkPasswordRef.current?.style.setProperty('font-weight', 'bold');
      }
      if (register.nickname === '') {
        // 중복 검사 적용 필요
        nicknameRef.current?.style.setProperty('color', 'red');
        nicknameRef.current?.style.setProperty('font-weight', 'bold');
      }
      if (register.name === '') {
        nameRef.current?.style.setProperty('color', 'red');
        nameRef.current?.style.setProperty('font-weight', 'bold');
      }

      if (register.phone === '') {
        // 중복 검사 적용 필요
        phoneRef.current?.style.setProperty('color', 'red');
        phoneRef.current?.style.setProperty('font-weight', 'bold');
      }
    } else {
      axios
        .post('#', {
          email: register.email,
          password: register.password,
          nickname: register.nickname,
          name: register.name,
          age:
            Number(new Date().getFullYear()) -
            Number(register.birth.slice(0, 4)),
          sex: register.sex,
          birth: register.birth,
          phone: register.phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
        })
        .then((response) => {
          // Handle success.
          // console.log('Well done!');
          // console.log('User profile', response.data.user);
          console.log('User token', response.data.jwt);
          localStorage.setItem('data', response.data.jwt);
          navigate('/login');
        })
        .catch((error) => {
          // Handle error.
          console.log('An error occurred:', error.response);
        });
      console.log(register);
    }
  };

  const onBlur = () => {
    if (error.emailErr) {
      emailRef.current?.style.removeProperty('color');
      emailRef.current?.style.removeProperty('font-weight');
    }
    if (error.passwordErr) {
      passwordRef.current?.style.removeProperty('color');
      passwordRef.current?.style.removeProperty('font-weight');
    }
    if (error.checkPasswordErr) {
      checkPasswordRef.current?.style.removeProperty('color');
      checkPasswordRef.current?.style.removeProperty('font-weight');
    }
    if (register.nickname !== '') {
      nicknameRef.current?.style.removeProperty('color');
      nicknameRef.current?.style.removeProperty('font-weight');
    }
    if (register.name !== '') {
      nameRef.current?.style.removeProperty('color');
      nameRef.current?.style.removeProperty('font-weight');
    }
    if (register.phone !== '') {
      phoneRef.current?.style.removeProperty('color');
      phoneRef.current?.style.removeProperty('font-weight');
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

  useEffect(() => {
    if (startDate) {
      const formatted = startDate!.toISOString().split('T')[0]; // YYYY-MM-DD 형식
      onChangeRegister({
        target: {
          name: 'birth',
          value: formatted,
        },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  }, [startDate]);

  return (
    <form className="p-3">
      <div>
        <p className="px-3 my-4 text-xl">회원가입</p>
      </div>

      <section>
        <span className="px-3 text-sm">이메일</span>
        {error.emailErr ? null : (
          <span className="text-xs text-gray-400" ref={emailRef}>
            이메일 형식을 입력해 주세요
          </span>
        )}
        <div className="flex gap-2 my-2 w-[335px] mx-auto">
          <div
            className="flex-1 mx-auto rounded-lg border
       border-gray-300 w-[250px] h-[40px] 
       flex items-center justify-between px-3 "
          >
            <input
              className="w-[250px] outline-none"
              name="email"
              value={register.email}
              type="text"
              placeholder="이메일를 입력하세요"
              onChange={onChangeRegister}
              onBlur={onBlur}
            />
          </div>
          <button
            className="rounded-lg text-xs border bg-yellow-300 px-2"
            type="button"
          >
            중복 확인
          </button>
        </div>
      </section>

      <section>
        <span className="px-3 text-sm">비밀번호</span>
        {error.passwordErr ? null : (
          <span className="text-xs text-gray-400" ref={passwordRef}>
            숫자, 영문, 특수문자 조합 최소 8자를 입력해 주세요
          </span>
        )}
        <div
          className="mx-auto rounded-lg border
       border-gray-300 w-[335px] h-[40px] 
       flex items-center justify-between px-3 my-2"
        >
          <input
            className="w-[280px] outline-none flex-1"
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

        <span className="px-3 text-sm">비밀번호 확인</span>
        {error.checkPasswordErr ? (
          <span className="text-xs text-gray-400" ref={checkPasswordRef}>
            ✅
          </span>
        ) : (
          <span className="text-xs text-gray-400" ref={checkPasswordRef}>
            비밀번호가 일치하지 않습니다
          </span>
        )}
        <div
          className="mx-auto rounded-lg border
       border-gray-300 w-[335px] h-[40px] 
       flex items-center justify-between px-3 my-2"
        >
          <input
            className="w-[280px] outline-none"
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
      </section>

      <section>
        <p className="px-3 text-sm">닉네임</p>
        <div
          className="mx-auto rounded-lg border border-gray-300 
      w-[335px] h-[40px] flex items-center justify-between px-3 my-2"
        >
          <input
            ref={nicknameRef}
            className="w-[280px] outline-none"
            name="nickname"
            value={register.nickname}
            type="text"
            placeholder="닉네임를 입력하세요"
            onChange={onChangeRegister}
            onBlur={onBlur}
          />
        </div>
      </section>

      <section>
        <p className="px-3 text-sm">이름/성별</p>
        <div
          className="m-2 rounded-lg border border-gray-300
       w-[160px] h-[40px] flex items-center"
        >
          <input
            ref={nameRef}
            className="w-[135px] ml-3 outline-none"
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
              className="flex justify-center items-center text-sm
             peer-checked:bg-yellow-300 rounded-lg text-center
              w-[75px] h-[40px] border border-solid border-gray-300"
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
              className="flex justify-center items-center text-sm
             peer-checked:bg-yellow-300 rounded-lg text-center
              w-[75px] h-[40px] border border-solid border-gray-300"
              htmlFor="sex2"
            >
              Female
            </label>
          </div>
        </div>
      </section>

      <section>
        <p className="px-3 text-sm">생년월일/휴대전화</p>
        <div className="flex">
          <div>
            <DatePicker
              className="outline-none text-center w-[160px] h-[40px]
             m-2 rounded-lg border border-gray-300 bg-white items-center "
              name="birth"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              dateFormat="yyyy-MM-dd"
            />
          </div>

          <div
            className="m-2 rounded-lg border border-gray-300
         flex items-center w-[160px] h-[40px]"
          >
            <input
              ref={phoneRef}
              className="w-[135px] ml-3 text-center outline-none"
              name="phone"
              value={register.phone}
              type="text"
              placeholder="010-0000-0000"
              onChange={onChangeRegister}
              onBlur={onBlur}
            />
          </div>
        </div>
      </section>

      <section>
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
      </section>
    </form>
  );
};

export default RegisterForm;
