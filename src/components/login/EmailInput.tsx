import React from 'react';

interface EmailInputProps {
  emailErr: boolean;
  submitted: boolean;
  emailInput: string;
  onChangeEmailInput(e: React.ChangeEvent<HTMLInputElement>): void;
  emailRef: React.RefObject<HTMLInputElement>;
}

const EmailInput = ({
  emailErr,
  submitted,
  emailInput,
  onChangeEmailInput,
  emailRef,
}: EmailInputProps) => {
  const niceInputPassword = (): JSX.Element => {
    if (submitted) {
      if (!emailErr) {
        return (
          <span className="text-xs text-red-400">
            이메일 형식을 입력해주세요
          </span>
        );
      }
    }
    return <span></span>;
  };

  return (
    <section>
      <span className="text-sm">이메일</span>
      {niceInputPassword()}
      <div
        ref={emailRef}
        className="gap-2 my-2 w-[335px]  flex-1 mx-auto rounded-lg border border-gray-300  h-[50px] bg-white flex items-center justify-between px-3"
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
