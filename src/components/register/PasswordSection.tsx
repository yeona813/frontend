import React, { useState } from 'react';

interface PasswordSectionProps {
  submitted: boolean;
  passwordRef: React.RefObject<HTMLInputElement>;
  checkPasswordRef: React.RefObject<HTMLInputElement>;
  password: string;
  checkPassword: string;
  passwordErr: boolean;
  checkPasswordErr: boolean;
  onChangeRegister(e: React.ChangeEvent<HTMLInputElement>): void;
}

const PasswordSection = ({
  submitted,
  passwordRef,
  checkPasswordRef,
  password,
  checkPassword,
  passwordErr,
  checkPasswordErr,
  onChangeRegister,
}: PasswordSectionProps) => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  // 중복 로직 줄이기
  const toggleShowPassword = (passwordNumber: number) => {
    if (passwordNumber === 1) {
      setShowPassword1(!showPassword1);
    } else if (passwordNumber === 2) {
      setShowPassword2(!showPassword2);
    }
  };

  const niceInputPassword = (index: number): JSX.Element => {
    if (submitted) {
      if (index === 1 && !passwordErr) {
        return (
          <span className="px-3 text-xs text-red-400">
            숫자, 영문, 특수문자 조합 최소 8자를 입력해 주세요
          </span>
        );
      }
      if (index === 2 && !checkPasswordErr) {
        if (checkPassword === '')
          return (
            <span className="px-3 text-xs text-red-400">
              위와 동일한 비밀번호를 입력해주세요.
            </span>
          );
        return (
          <span className="px-3 text-xs text-red-400">
            비밀번호가 일치하지 않습니다.
          </span>
        );
      }
    }
    return <span></span>;
  };

  return (
    <section className="flex flex-col gap-2">
      <div>
        <span className="px-3 text-sm">비밀번호</span>
        <div
          className="mx-auto rounded-lg border border-gray-300
           w-[335px] h-[50px] flex items-center justify-between px-3 my-2"
          ref={passwordRef}
        >
          <input
            className="w-[280px] outline-none flex-1"
            name="password"
            value={password}
            type={showPassword1 ? 'text' : 'password'}
            placeholder="숫자, 영문, 특수문자 조합 8자 이상"
            onChange={onChangeRegister}
          />
          <button type="button" name="password">
            <img
              src={
                !showPassword1 ? '/icons/eyeClosed.svg' : '/icons/eyeOpend.svg'
              }
              alt="비밀번호눈"
              onClick={() => toggleShowPassword(1)}
              onKeyDown={() => toggleShowPassword(1)}
            />
          </button>
        </div>
        {niceInputPassword(1)}
      </div>

      <div>
        <span className="px-3 text-sm">비밀번호 확인</span>
        {checkPasswordErr ? (
          <span className="text-xs text-gray-400">✅</span>
        ) : null}
        <div
          className="mx-auto rounded-lg border border-gray-300
           w-[335px] h-[50px] flex items-center justify-between px-3 my-2"
          ref={checkPasswordRef}
        >
          <input
            className="w-[280px] outline-none"
            name="checkPassword"
            value={checkPassword}
            type={showPassword2 ? 'text' : 'password'}
            placeholder="비밀번호를 확인하세요"
            onChange={onChangeRegister}
          ></input>
          <button type="button">
            <img
              src={
                !showPassword2 ? '/icons/eyeClosed.svg' : '/icons/eyeOpend.svg'
              }
              alt="비밀번호확인눈"
              onClick={() => toggleShowPassword(2)}
              onKeyDown={() => toggleShowPassword(2)}
            />
          </button>
        </div>
        {niceInputPassword(2)}
      </div>
    </section>
  );
};
export default PasswordSection;
