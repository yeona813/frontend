import React, { useEffect, useRef, useState } from 'react';
import { err } from 'types/register';
import { useNavigate } from 'react-router-dom';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import LoginButton from './LoginButton';

// 추가해야 할 사항
// 1. 로그인 버튼 눌렀을 때, 서버에서 GET해서 확인하기 (API 명세서 다 나오면 확인)
// 5. 유저 정보 어떻게 저장할 것인지
// 6. useEffect 사용해서 isLogin 생각하기
// 7. 로그인 이메일, 비밀번호 형식 확인

const Login = () => {
  const isLoggedIn = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      setError({ ...error, emailErr: false });
    } else {
      setError({ ...error, emailErr: true });
    }
  }, [emailInput]);

  useEffect(() => {
    const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/;

    if (!regex.test(passwordInput)) {
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
    <form className="p-3 flex flex-col gap-3 bg-white h-screen items-center">
      <div className="my-4 text-xl">
        <h2 className="text-xl w-[335px]">로그인</h2>
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
