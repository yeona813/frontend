import React, { useState } from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import LoginButton from './LoginButton';

// 추가해야 할 사항
// 1. 로그인 버튼 눌렀을 때, 서버에서 GET해서 확인하기 (API 명세서 다 나오면 확인)
// 1-1. 정보가 있으면 /quote로 이동
// 1-2. 정보가 없으면 로그인 버튼 위에 (이메일 or 비밀번호 or 정보가 없음) 메세지 표시
// 2. 카카오 로그인 버튼 핸들 - 해결(추후에 백엔드와 잘 연결되는지 확인)
// 3. 비밀번호에 눈 달기 - 해결
// 4. 카카오 로그인 버튼 글씨체 바꾸기(카톡 이미지만 가져오고 span태그 사용하자)

const Login = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const onChangeEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
  };

  const onChangePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value);
  };

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
    <form className="p-3 flex flex-col gap-3 bg-white">
      <div>
        <p className="px-3 my-4 text-xl">로그인</p>
      </div>
      <EmailInput
        emailInput={emailInput}
        onChangeEmailInput={onChangeEmailInput}
      />

      <PasswordInput
        passwordInput={passwordInput}
        onChangePasswordInput={onChangePasswordInput}
      />
      <LoginButton
        onClickKKakaoLogin={onClickKakaoLogin}
        onClickNormalLogin={onClickNormalLogin}
      />
    </form>
  );
};

export default Login;
