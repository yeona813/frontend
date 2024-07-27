import React, { useState } from 'react';

interface PasswordInputProps {
  passwordInput: string;
  onChangePasswordInput(e: React.ChangeEvent<HTMLInputElement>): void;
}

const PasswordInput = ({
  passwordInput,
  onChangePasswordInput,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  return (
    <section>
      <span className="px-3 text-sm">비밀번호</span>
      <div
        className="gap-2 my-2 w-[335px]  flex-1 mx-auto rounded-lg border
         border-gray-300  h-[50px] 
        flex items-center justify-between px-3"
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
