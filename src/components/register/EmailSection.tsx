import React from 'react';

interface EmailSectionProps {
  submitted: boolean;
  emailRef: React.RefObject<HTMLInputElement>;
  email: string;
  emailErr: boolean;
  onChangeRegister(e: React.ChangeEvent<HTMLInputElement>): void;
}

const EmailSection = ({
  submitted,
  emailRef,
  email,
  emailErr,
  onChangeRegister,
}: EmailSectionProps) => {
  const niceInputEmail = (): JSX.Element => {
    if (submitted) {
      if (emailErr) {
        return <span></span>;
      }
      return (
        <span className="px-3 text-xs text-red-400">
          이메일 형식을 입력해 주세요
        </span>
      );
    }
    return <span></span>;
  };

  return (
    <section>
      <span className="px-3 text-sm">이메일</span>

      <div className="flex gap-2 my-2 w-[335px] mx-auto ">
        <div
          className="flex-1 mx-auto rounded-lg border
          border-gray-300 w-[250px] h-[50px] 
          flex items-center justify-between px-3 bg-white"
          ref={emailRef}
        >
          <input
            autoComplete="off"
            className="w-[250px] outline-none "
            name="email"
            value={email}
            type="text"
            placeholder="example01@abc.com"
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
      {niceInputEmail()}
    </section>
  );
};

export default EmailSection;
