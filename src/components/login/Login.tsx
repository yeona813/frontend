import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// 추가해야 할 사항
// 1. 로그인 버튼 눌렀을 때, 서버에서 GET해서 확인하기 (API 명세서 다 나오면 확인)
// 1-1. 정보가 있으면 /quote로 이동
// 1-2. 정보가 없으면 로그인 버튼 위에 (이메일 or 비밀번호 or 정보가 없음) 메세지 표시
// 2. 카카오 로그인 버튼 핸들 - 해결(추후에 백엔드와 잘 연결되는지 확인)
// 3. 비밀번호에 눈 달기 - 해결

const Login = () => {
  const [emailInput, setEmailInput] = useState<string>('');
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onChangeEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
  };

  const onChangePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value);
  };

  const onClickShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  const onKeyDownShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onKakaoLogin = () => {
    const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY; // 백엔드에서 받은 카카오 키 넣기
    const REDIRECT_URI = `http://localhost:3000/oauth`; // 백엔드에서 받은 리다이렉트 URI 넣기
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    window.location.href = link;
  };

  return (
    <form className="p-3 flex flex-col gap-3 bg-white">
      <div>
        <p className="px-3 my-4 text-xl">로그인</p>
      </div>

      <section>
        <span className="px-3 text-sm">이메일</span>

        <div className="flex gap-2 my-2 w-[335px] mx-auto ">
          <div
            className="flex-1 mx-auto rounded-lg border
       border-gray-300 w-[250px] h-[50px] 
       flex items-center justify-between px-3 "
          >
            <input
              value={emailInput}
              onChange={onChangeEmailInput}
              className="w-[250px] outline-none"
              name="email"
              type="text"
              placeholder="이메일를 입력하세요"
            />
          </div>
        </div>
      </section>
      <span className="px-3 text-sm">비밀번호</span>
      <div
        className="mx-auto rounded-lg border
       border-gray-300 w-[335px] h-[50px] 
       flex items-center justify-between px-3"
      >
        <input
          type={showPassword ? 'text' : 'password'}
          value={passwordInput}
          onChange={onChangePasswordInput}
          className="w-[280px] outline-none flex-1"
          name="password"
          placeholder="비밀번호를 입력하세요"
        />
        <button type="button">
          <img
            onClick={onClickShowPassword}
            src={!showPassword ? '/icons/eyeClosed.svg' : '/icons/eyeOpend.svg'}
            alt="눈"
            onKeyDown={onKeyDownShowPassword}
          />
        </button>
      </div>
      <section>
        <div className="mt-[20px] text-center flex flex-col gap-4 items-center">
          <button
            className="rounded-lg bg-black w-[335px] h-[45.5px] shadow-md text-white"
            type="button"
          >
            로그인
          </button>

          <button
            className="rounded-lg w-[335px] h-[45px] shadow-md"
            type="button"
            onClick={onKakaoLogin}
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
    </form>
  );
};

export default Login;
