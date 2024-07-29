import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { err } from 'types/register';

interface LoginButtonProps {
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  emailInput: string;
  passwordInput: string;
  submitted: boolean;
  error: err;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  emailRef: React.RefObject<HTMLInputElement>;
  passwordRef: React.RefObject<HTMLInputElement>;
}

const LoginButton = ({
  setSuccess,
  emailInput,
  passwordInput,
  submitted,
  error,
  setSubmitted,
  emailRef,
  passwordRef,
}: LoginButtonProps) => {
  const navigate = useNavigate();

  const onClickKakaoLogin = () => {
    const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY; // 백엔드에서 받은 카카오 키 넣기
    const REDIRECT_URI = `http://localhost:3000/oauth`; // 백엔드에서 받은 리다이렉트 URI 넣기
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    window.location.href = link;
  };

  const onClickNormalLogin = async () => {
    setSubmitted(true);
    const isErrorFree = Object.values(error).every(
      (element) => element === true,
    );

    if (!isErrorFree) {
      console.log('ERRRRRR');
      return;
    }

    console.log(`${emailInput}, ${passwordInput}`);
    setSuccess(true);
    navigate('/');
  };

  useEffect(() => {
    if (submitted) {
      emailRef.current?.style.setProperty(
        'border',
        error.emailErr ? '1px solid rgb(50,180,50)' : '1px solid red',
      );
      passwordRef.current?.style.setProperty(
        'border',
        error.passwordErr ? '1px solid rgb(50,180,50)' : '1px solid red',
      );
    }
  }, [submitted, error]);

  return (
    <section>
      <div className="mt-[20px] text-center flex flex-col gap-6 items-center">
        <button
          className="rounded-lg bg-black w-[335px] h-[45.5px] shadow-md text-white"
          type="button"
          onClick={onClickNormalLogin}
        >
          로그인
        </button>

        <button
          className="flex gap-4 justify-center items-center rounded-lg w-[335px] h-[45px] shadow-md bg-kakao-yellow"
          type="button"
          onClick={onClickKakaoLogin}
        >
          <img className="" src="icons/kakao_shape.png" alt="카카오 로그인" />
          <span>카카오톡으로 1초만에 시작하기</span>
        </button>
        <div>
          <span>회원이 아니신가요? </span>
          <Link className="underline" to="/register">
            회원가입하기
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LoginButton;
