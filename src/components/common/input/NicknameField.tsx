// NicknameField.tsx
import React from 'react';

interface NicknameFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
}

const NicknameField: React.FC<NicknameFieldProps> = ({
  value,
  onChange,
  error,
  inputRef,
}) => {
  return (
    <div>
      <span className="text-sm">닉네임</span>
      <div
        className="mx-auto rounded-lg border border-gray-300 w-[335px] h-[50px] flex items-center justify-between px-3 my-2 bg-white"
        ref={inputRef}
      >
        <input
          className="w-full outline-none"
          name="nickname"
          value={value}
          type="text"
          placeholder="닉네임 3자 이상"
          onChange={onChange}
        />
      </div>
      {error && <span className="px-3 text-xs text-red-400">{error}</span>}
    </div>
  );
};

export default NicknameField;
