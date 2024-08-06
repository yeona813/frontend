import React from 'react';

interface NicknameSectionProps {
  submitted: boolean;
  nicknameRef: React.RefObject<HTMLInputElement>;
  nickname: string;
  nicknameErr: boolean;
  onChangeRegister(e: React.ChangeEvent<HTMLInputElement>): void;
}

const NicknameSection = ({
  submitted,
  nicknameRef,
  nickname,
  nicknameErr,
  onChangeRegister,
}: NicknameSectionProps) => {
  const niceInputNickname = (): JSX.Element => {
    if (submitted) {
      if (nicknameErr) {
        return <span></span>;
      }
      return (
        <span className="px-3 text-xs text-red-400">
          닉네임을 3자 이상 입력해주세요
        </span>
      );
    }
    return <span></span>;
  };

  return (
    <section>
      <span className="text-sm">닉네임</span>
      <div
        className="mx-auto rounded-lg border border-gray-300 w-[335px] h-[50px] flex items-center justify-between px-3 my-2 bg-white"
        ref={nicknameRef}
      >
        <input
          className="w-[280px] outline-none"
          name="nickname"
          value={nickname}
          type="text"
          placeholder="닉네임 3자 이상"
          onChange={onChangeRegister}
        />
      </div>
      {niceInputNickname()}
    </section>
  );
};

export default NicknameSection;
