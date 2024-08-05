// PasswordField.tsx
import React, { useState } from 'react';

interface PasswordFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
  inputRef,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <span className="text-sm">{label}</span>
      <div
        className="mx-auto rounded-lg border border-gray-300 w-[335px] h-[50px] flex items-center justify-between px-3 my-2 bg-white"
        ref={inputRef}
      >
        <input
          className="w-[280px] outline-none flex-1"
          name={name}
          value={value}
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          onChange={onChange}
        />
        <button type="button" onClick={toggleShowPassword}>
          <img
            src={!showPassword ? '/icons/eyeClosed.svg' : '/icons/eyeOpend.svg'}
            alt="비밀번호 보기/숨기기"
          />
        </button>
      </div>
      {error && <span className="px-3 text-xs text-red-400">{error}</span>}
    </div>
  );
};

export default PasswordField;
