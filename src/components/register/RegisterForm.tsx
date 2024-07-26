import React, { useEffect, useRef, useState } from 'react';
import { info, err } from 'types/register';
import 'react-datepicker/dist/react-datepicker.min.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

// 추가해야될 사항
// 1. 이메일 유효성 검사 - 해결
// 2. 이메일 중복 검사(API 명세서 나오면 확인)
// 3. 비밀번호 유효성 검사 - 해결
// 4. 비밀번호 일치 검사 - 해결
// 5. 닉네임 중복 검사(API 명세서 나오면 확인)
// 6. 컴포넌트 부분 별로 나누기
// 7. 조건이 만족되지 않으면 빨간 경고 메세지 뜨도록 수정하기 - 해결
// 8. 이미 회원이신가요? => 로그인하기 버튼 링크하기 - 해결

// 문제사항: 비밀번호 일치 불일치 - 해결

interface RegisterProps {
  register: info;
  error: err;
  onChangeRegister(e: React.ChangeEvent<HTMLInputElement>): void;
}

const RegisterForm = ({ register, error, onChangeRegister }: RegisterProps) => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const checkPasswordRef = useRef<HTMLInputElement>(null);
  const nicknameRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (submitted) {
      emailRef.current?.style.setProperty(
        'border',
        error.emailErr ? '1px solid rgb(50,180,50)' : '1px solid red',
      );
      passwordRef.current?.style.setProperty(
        'border',
        error.passwordErr ? '1px solid rgb(50,180,50)' : '1px solid red',
      );
      checkPasswordRef.current?.style.setProperty(
        'border',
        error.checkPasswordErr ? '1px solid rgb(50,180,50)' : '1px solid red',
      );
      nicknameRef.current?.style.setProperty(
        'border',
        error.nicknameErr ? '1px solid rgb(50,180,50)' : '1px solid red',
      );
    }
  }, [submitted, error]);

  const onSubmit = () => {
    setSubmitted(true);
    const isErrorFree = Object.values(error).every(
      (element) => element === true,
    );

    if (isErrorFree) {
      axios
        .post('#', {
          email: register.email,
          password: register.password,
          nickname: register.nickname,
        })
        .then((response) => {
          console.log('User token', response.data.jwt);
          localStorage.setItem('data', response.data.jwt);
          navigate('/login');
        })
        .catch((error) => {
          console.log('An error occurred:', error.response);
        });
    }
  };

  // 중복 로직 줄이기
  const onClickShowPassword1 = (): void => {
    setShowPassword1(!showPassword1);
  };

  const onClickShowPassword2 = (): void => {
    setShowPassword2(!showPassword2);
  };

  const onKeyDownShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const onKeyDownShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  return (
    <form className="p-3 flex flex-col gap-3 bg-white">
      <h2 className="px-3 my-4 text-xl">회원가입</h2>
      <section>
        <span className="px-3 text-sm">이메일</span>
        {error.emailErr ? null : (
          <span className="text-xs text-gray-400">
            이메일 형식을 입력해 주세요
          </span>
        )}
        <div className="flex gap-2 my-2 w-[335px] mx-auto ">
          <div
            className="flex-1 mx-auto rounded-lg border
       border-gray-300 w-[250px] h-[50px] 
       flex items-center justify-between px-3 "
            ref={emailRef}
          >
            <input
              className="w-[250px] outline-none"
              name="email"
              value={register.email}
              type="text"
              placeholder="이메일를 입력하세요"
              onChange={onChangeRegister}
            />
          </div>
          <button
            className="rounded-lg text-xs 
            border bg-yellow-300 px-2 shadow-md"
            type="button"
          >
            중복 확인
          </button>
        </div>
      </section>

      <section>
        <span className="px-3 text-sm">비밀번호</span>
        {error.passwordErr ? null : (
          <span className="text-xs text-gray-400">
            숫자, 영문, 특수문자 조합 최소 8자를 입력해 주세요
          </span>
        )}
        <div
          className="mx-auto rounded-lg border
       border-gray-300 w-[335px] h-[50px] 
       flex items-center justify-between px-3 my-2"
          ref={passwordRef}
        >
          <input
            className="w-[280px] outline-none flex-1"
            name="password"
            value={register.password}
            type={showPassword1 ? 'text' : 'password'}
            placeholder="비밀번호를 입력하세요"
            onChange={onChangeRegister}
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
          <span className="text-xs text-gray-400">✅</span>
        ) : (
          <span className="text-xs text-gray-400">
            비밀번호가 일치하지 않습니다
          </span>
        )}
        <div
          className="mx-auto rounded-lg border
       border-gray-300 w-[335px] h-[50px] 
       flex items-center justify-between px-3 my-2"
          ref={checkPasswordRef}
        >
          <input
            className="w-[280px] outline-none"
            name="checkPassword"
            value={register.checkPassword}
            type={showPassword2 ? 'text' : 'password'}
            placeholder="비밀번호를 확인하세요"
            onChange={onChangeRegister}
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
        <span className="px-3 text-sm">닉네임</span>
        {error.nicknameErr ? null : (
          <span className="text-xs text-gray-400">
            닉네임을 최소 3자 입력해주세요
          </span>
        )}
        <div
          ref={nicknameRef}
          className="mx-auto rounded-lg border border-gray-300 
      w-[335px] h-[50px] flex items-center justify-between px-3 my-2"
        >
          <input
            ref={nicknameRef}
            className="w-[280px] outline-none"
            name="nickname"
            value={register.nickname}
            type="text"
            placeholder="닉네임를 입력하세요"
            onChange={onChangeRegister}
          />
        </div>
      </section>

      <section>
        <div className="mt-[20px] text-center flex flex-col gap-4 items-center">
          <button
            onClick={onSubmit}
            className="rounded-lg bg-yellow-300 w-[335px] h-[45px] shadow-md"
            type="button"
          >
            회원가입
          </button>
          <div>
            <span>이미 회원이신가요? </span>
            <Link className="underline" to="/login">
              로그인하기
            </Link>
          </div>
        </div>
      </section>
    </form>
  );
};

export default RegisterForm;
