import React, { useEffect, useRef, useState } from 'react';
import { err } from 'types/register';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import LoginButton from './LoginButton';

// 추가해야 할 사항
// 1. 로그인 버튼 눌렀을 때, 서버에서 GET해서 확인하기 (API 명세서 다 나오면 확인)
// 1-1. 정보가 있으면 /quote로 이동
// 1-2. 정보가 없으면 로그인 버튼 위에 (이메일 or 비밀번호 or 정보가 없음) 메세지 표시
// 2. 카카오 로그인 버튼 핸들 - 해결(추후에 백엔드와 잘 연결되는지 확인)
// 5. 유저 정보 어떻게 저장할 것인지
// 6. useEffect 사용해서 isLogin 생각하기
// 7. 로그인 이메일, 비밀번호 형식 확인

const Login = () => {
  const [success, setSuccess] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState<err>({
    emailErr: false,
    passwordErr: false,
    checkPasswordErr: true,
    nicknameErr: true,
  });

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(emailInput)) {
      console.log('올바른 이메일 형식이 아닙니다.');
      setError({ ...error, emailErr: false });
    } else {
      setError({ ...error, emailErr: true });
    }
  }, [emailInput]);

  useEffect(() => {
    const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/;

    if (!regex.test(passwordInput)) {
      console.log('올바른 비밀번호 형식이 아닙니다.');
      setError({ ...error, passwordErr: false });
    } else {
      setError({ ...error, passwordErr: true });
    }
  }, [passwordInput]);

  const onChangeEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
  };

  const onChangePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value);
  };

  return (
    <form className="p-3 flex flex-col gap-3 h-full bg-white">
      <div className="px-3 my-4 text-xl">
        <p>로그인</p>
      </div>
      <EmailInput
        emailErr={error.emailErr}
        submitted={submitted}
        emailRef={emailRef}
        emailInput={emailInput}
        onChangeEmailInput={onChangeEmailInput}
      />

      <PasswordInput
        passwordErr={error.passwordErr}
        submitted={submitted}
        passwordRef={passwordRef}
        passwordInput={passwordInput}
        onChangePasswordInput={onChangePasswordInput}
      />
      <LoginButton
        setSuccess={setSuccess}
        emailInput={emailInput}
        passwordInput={passwordInput}
        submitted={submitted}
        error={error}
        setSubmitted={setSubmitted}
        emailRef={emailRef}
        passwordRef={passwordRef}
      />
    </form>
  );
};

export default Login;
