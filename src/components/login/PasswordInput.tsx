import React, { useState } from 'react';

interface PasswordInputProps {
  submitted: boolean;
  passwordErr: boolean;
  passwordInput: string;
  onChangePasswordInput(e: React.ChangeEvent<HTMLInputElement>): void;
  passwordRef: React.RefObject<HTMLInputElement>;
}

const PasswordInput = ({
  submitted,
  passwordErr,
  passwordInput,
  onChangePasswordInput,
  passwordRef,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  const niceInputPassword = (): JSX.Element => {
    if (submitted) {
      if (!passwordErr) {
        return (
          <span className="text-xs text-red-400">
            숫자, 영문, 특수문자 조합 최소 8자를 입력해 주세요
          </span>
        );
      }
    }
    return <span></span>;
  };

  return (
    <section>
      <span className="px-3 text-sm">비밀번호</span>
      {niceInputPassword()}
      <div
        ref={passwordRef}
        className="gap-2 my-2 w-[335px]  flex-1 mx-auto rounded-lg border
         border-gray-300  h-[50px] 
        flex items-center justify-between px-3 bg-white"
      >
        <input
          type={showPassword ? 'text' : 'password'}
          value={passwordInput}
          onChange={onChangePasswordInput}
          className="outline-none flex-1"
          name="password"
          placeholder="비밀번호를 입력하세요"
        />
        <button type="button">
          <img
            onClick={toggleShowPassword}
            src={!showPassword ? '/icons/eyeClosed.svg' : '/icons/eyeOpend.svg'}
            alt="눈"
            onKeyDown={toggleShowPassword}
          />
        </button>
      </div>
    </section>
  );
};

export default PasswordInput;
