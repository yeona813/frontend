import React from 'react';
import { Link } from 'react-router-dom';

interface LoginButtonProps {
  emailInput: string;
  passwordInput: string;
}

const LoginButton = ({ emailInput, passwordInput }: LoginButtonProps) => {
  const onClickKakaoLogin = () => {
    const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY; // 백엔드에서 받은 카카오 키 넣기
    const REDIRECT_URI = `http://localhost:3000/oauth`; // 백엔드에서 받은 리다이렉트 URI 넣기
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    window.location.href = link;
  };

  const onClickNormalLogin = () => {
    console.log('정보 있는지 확인');
  };

  return (
    <section>
      <div className="mt-[20px] text-center flex flex-col gap-4 items-center">
        <button
          className="rounded-lg bg-black w-[335px] h-[45.5px] shadow-md text-white"
          type="button"
          onClick={onClickNormalLogin}
        >
          로그인
        </button>

        <button
          className="rounded-lg w-[335px] h-[45px] shadow-md"
          type="button"
          onClick={onClickKakaoLogin}
        >
          <img src="icons/kakao_login_button.png" alt="카카오 로그인" />
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
