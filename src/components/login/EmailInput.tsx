import React from 'react';

interface EmailInputProps {
  emailInput: string;
  onChangeEmailInput(e: React.ChangeEvent<HTMLInputElement>): void;
}

const EmailInput = ({ emailInput, onChangeEmailInput }: EmailInputProps) => {
  return (
    <section>
      <span className="px-3 text-sm">이메일</span>
      <div
        className="gap-2 my-2 w-[335px]  flex-1 mx-auto rounded-lg border
         border-gray-300  h-[50px] bg-white
        flex items-center justify-between px-3"
      >
        <input
          value={emailInput}
          onChange={onChangeEmailInput}
          className="w-[250px] outline-none"
          name="email"
          type="text"
          placeholder="이메일를 입력하세요"
        />
      </div>
    </section>
  );
};

export default EmailInput;
