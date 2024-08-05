import React from 'react';
import PasswordField from 'components/common/input/PasswordField';

interface PasswordInputProps {
  submitted: boolean;
  passwordErr: boolean;
  passwordInput: string;
  onChangePasswordInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  passwordRef: React.RefObject<HTMLInputElement>;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  submitted,
  passwordErr,
  passwordInput,
  onChangePasswordInput,
  passwordRef,
}) => {
  const getErrorMessage = () => {
    if (submitted && !passwordErr) {
      return '숫자, 영문, 특수문자 조합 최소 8자를 입력해 주세요';
    }
    return '';
  };

  return (
    <section>
      <PasswordField
        label="비밀번호"
        name="password"
        value={passwordInput}
        onChange={onChangePasswordInput}
        placeholder="비밀번호를 입력하세요"
        error={getErrorMessage()}
        inputRef={passwordRef}
      />
    </section>
  );
};

export default PasswordInput;
