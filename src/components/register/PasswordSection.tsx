// PasswordSection.tsx
import React from 'react';
import PasswordField from 'components/common/input/PasswordField';

interface PasswordSectionProps {
  submitted: boolean;
  passwordRef: React.RefObject<HTMLInputElement>;
  checkPasswordRef: React.RefObject<HTMLInputElement>;
  password: string;
  checkPassword: string;
  passwordErr: boolean;
  checkPasswordErr: boolean;
  onChangeRegister: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordSection: React.FC<PasswordSectionProps> = ({
  submitted,
  passwordRef,
  checkPasswordRef,
  password,
  checkPassword,
  passwordErr,
  checkPasswordErr,
  onChangeRegister,
}) => {
  const getPasswordError = () => {
    if (submitted && !passwordErr) {
      return '숫자, 영문, 특수문자 조합 최소 8자를 입력해 주세요';
    }
    return '';
  };

  const getCheckPasswordError = () => {
    if (submitted && !checkPasswordErr) {
      if (!passwordErr && password === checkPassword) {
        return '비밀번호 형식을 지켜주세요.';
      }
      if (checkPassword === '') {
        return '위와 동일한 비밀번호를 입력해주세요.';
      }
      return '비밀번호가 일치하지 않습니다.';
    }
    return '';
  };

  return (
    <section className="flex flex-col gap-2">
      <PasswordField
        label="비밀번호"
        name="password"
        value={password}
        onChange={onChangeRegister}
        placeholder="숫자, 영문, 특수문자 조합 8자 이상"
        error={getPasswordError()}
        inputRef={passwordRef}
      />
      <PasswordField
        label={`비밀번호 확인 ${checkPasswordErr && passwordErr ? '✅' : ''}`}
        name="checkPassword"
        value={checkPassword}
        onChange={onChangeRegister}
        placeholder="비밀번호를 확인하세요"
        error={getCheckPasswordError()}
        inputRef={checkPasswordRef}
      />
    </section>
  );
};

export default PasswordSection;
