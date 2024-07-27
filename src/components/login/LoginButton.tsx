import React from 'react';
import { Link } from 'react-router-dom';

interface LoginButtonProps {
  onClickKKakaoLogin(): void;
  onClickNormalLogin(): void;
}

const LoginButton = ({
  onClickKKakaoLogin,
  onClickNormalLogin,
}: LoginButtonProps) => {
  return (
    <section>
      <div className="mt-[20px] text-center flex flex-col gap-4 items-center">
        <button
          className="rounded-lg bg-yellow-300 w-[335px] h-[45.5px] shadow-md text-black"
          type="button"
          onClick={onClickNormalLogin}
        >
          로그인
        </button>

        <button
          className="rounded-lg w-[335px] h-[45px] shadow-md"
          type="button"
          onClick={onClickKKakaoLogin}
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
