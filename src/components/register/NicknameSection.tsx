// NicknameSection.tsx
import React from 'react';
import NicknameField from 'components/common/input/NicknameField';

interface NicknameSectionProps {
  submitted: boolean;
  nicknameRef: React.RefObject<HTMLInputElement>;
  nickname: string;
  nicknameErr: boolean;
  onChangeRegister(e: React.ChangeEvent<HTMLInputElement>): void;
}

const NicknameSection: React.FC<NicknameSectionProps> = ({
  submitted,
  nicknameRef,
  nickname,
  nicknameErr,
  onChangeRegister,
}) => {
  const getErrorMessage = (): string => {
    if (submitted && !nicknameErr) {
      return '닉네임을 3자 이상 입력해주세요';
    }
    return '';
  };

  return (
    <section>
      <NicknameField
        value={nickname}
        onChange={onChangeRegister}
        error={getErrorMessage()}
        inputRef={nicknameRef}
      />
    </section>
  );
};

export default NicknameSection;
