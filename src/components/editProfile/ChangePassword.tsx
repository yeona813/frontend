import React, { ChangeEvent, useState } from 'react';

interface ChangePasswordProps {
  password: string;
  newPassword: string;
  newPasswordCheck: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleClickButton: () => void;
}

interface VisibilityState {
  password: boolean;
  newPassword: boolean;
  newPasswordCheck: boolean;
}

const ChangePassword = ({
  password,
  newPassword,
  newPasswordCheck,
  handleChange,
  handleClickButton,
}: ChangePasswordProps) => {
  const [visibility, setVisibility] = useState<VisibilityState>({
    password: false,
    newPassword: false,
    newPasswordCheck: false,
  });

  const toggleVisibility = (field: keyof VisibilityState) => {
    setVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <div className="flex flex-col gap-5">
      <section className="flex flex-col gap-[10px]">
        <label htmlFor="password" className="font-semibold text-xs">
          비밀번호
        </label>
        <div className="relative w-full">
          <input
            type={visibility.password ? 'text' : 'password'}
            id="password"
            name="password"
            value={password}
            placeholder="현재 비밀번호를 입력해주세요"
            onChange={handleChange}
            className="border border-gray-300 w-full rounded-lg p-3 text-sm"
          />
          <button
            type="button"
            onClick={() => toggleVisibility('password')}
            className="absolute inset-y-0 right-0 flex items-center px-3"
          >
            <img
              src={
                !visibility.password
                  ? '/icons/eyeClosed.svg'
                  : '/icons/eyeOpend.svg'
              }
              alt="눈"
            />
          </button>
        </div>
        <label htmlFor="newPassword" className="font-semibold text-xs">
          새 비밀번호
        </label>
        <div className="relative w-full">
          <input
            type={visibility.newPassword ? 'text' : 'password'}
            id="newPassword"
            name="newPassword"
            value={newPassword}
            placeholder="새 비밀번호를 입력해주세요"
            onChange={handleChange}
            className="border border-gray-300 w-full rounded-lg p-3 text-sm"
          />
          <button
            type="button"
            onClick={() => toggleVisibility('newPassword')}
            className="absolute inset-y-0 right-0 flex items-center px-3"
          >
            <img
              src={
                !visibility.newPassword
                  ? '/icons/eyeClosed.svg'
                  : '/icons/eyeOpend.svg'
              }
              alt="눈"
            />
          </button>
        </div>
        <label htmlFor="newPasswordCheck" className="font-semibold text-xs">
          새 비밀번호 확인
        </label>
        <div className="relative w-full">
          <input
            type={visibility.newPasswordCheck ? 'text' : 'password'}
            id="newPasswordCheck"
            name="newPasswordCheck"
            value={newPasswordCheck}
            placeholder="한 번 더 입력해주세요"
            onChange={handleChange}
            className="border border-gray-300 w-full rounded-lg p-3 text-sm"
          />
          <button
            type="button"
            onClick={() => toggleVisibility('newPasswordCheck')}
            className="absolute inset-y-0 right-0 flex items-center px-3"
          >
            <img
              src={
                !visibility.newPasswordCheck
                  ? '/icons/eyeClosed.svg'
                  : '/icons/eyeOpend.svg'
              }
              alt="눈"
            />
          </button>
        </div>
      </section>
      <button
        type="button"
        onClick={handleClickButton}
        className="border border-black rounded-lg p-2 text-sm font-semibold hover:bg-black hover:text-white cursor-pointer"
      >
        비밀번호 변경
      </button>
    </div>
  );
};

export default ChangePassword;
