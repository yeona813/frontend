import React, { ChangeEvent, useState } from 'react';

interface ChangeNicknameProps {
  nickname: string;
  passwordCheck: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleClickButton: () => void;
}

const ChangeNickname = ({
  nickname,
  passwordCheck,
  handleChange,
  handleClickButton,
}: ChangeNicknameProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col gap-5">
      <section className="flex flex-col gap-[10px]">
        <label htmlFor="nickname" className="font-semibold text-xs">
          닉네임
        </label>
        <input
          type="text"
          id="nickname"
          name="nickname"
          placeholder={nickname}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-3 text-sm"
        />
        <label htmlFor="passwordCheck" className="font-semibold text-xs">
          비밀번호 확인
        </label>
        <div className="relative w-full">
          <input
            type={showPassword ? 'text' : 'password'}
            id="passwordCheck"
            name="passwordCheck"
            value={passwordCheck}
            placeholder="현재 비밀번호를 입력해주세요"
            onChange={handleChange}
            className="relative border w-full border-gray-300 rounded-lg p-3 text-sm"
          />
          <button
            type="button"
            onClick={toggleShowPassword}
            className="absolute inset-y-0 right-0 flex items-center px-3"
          >
            <img
              src={
                !showPassword ? '/icons/eyeClosed.svg' : '/icons/eyeOpend.svg'
              }
              alt="눈"
            />
          </button>
        </div>
      </section>
      <button
        type="button"
        onClick={handleClickButton}
        className="border border-black rounded-lg p-2 text-sm font-semibold hover:bg-black hover:text-white cursor-pointer"
      >
        닉네임 변경
      </button>
    </div>
  );
};

export default ChangeNickname;
