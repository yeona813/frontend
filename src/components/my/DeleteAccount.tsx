import React, { useState } from 'react';

const DeleteAccount = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = (): void => {
    setShowPassword(!showPassword);
  };
  return (
    <form className="p-3 flex flex-col gap-3 bg-white h-screen items-center">
      <div className="my-4 text-xl">
        <h2 className="text-xl w-[335px]">회원 탈퇴</h2>
      </div>
      <section>
        <span className="text-sm">비밀번호</span>
        <div className="gap-2 my-2 w-[335px] flex-1 mx-auto rounded-lg border border-gray-300  h-[50px] flex items-center justify-between px-3 bg-white">
          <input
            type={showPassword ? 'text' : 'password'}
            className="outline-none flex-1"
            name="password"
            placeholder="비밀번호를 입력하세요"
          />
          <button type="button">
            <img
              onClick={toggleShowPassword}
              src={
                !showPassword ? '/icons/eyeClosed.svg' : '/icons/eyeOpend.svg'
              }
              alt="눈"
              onKeyDown={toggleShowPassword}
            />
          </button>
        </div>
      </section>
      <section>
        <button
          className="rounded-lg bg-black w-[335px] h-[45.5px] shadow-md text-white mt-3"
          type="button"
        >
          탈퇴하기
        </button>
      </section>
    </form>
  );
};

export default DeleteAccount;
