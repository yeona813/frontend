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
// 5. 유저 정보 어떻게 저장할 것인지
// 6. useEffect 사용해서 isLoggin 생각하기
// 7. 로그인 이메일, 비밀번호 형식 확인

const Login = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const onChangeEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
  };

  const onChangePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value);
  };

  return (
    <form className="p-3 flex flex-col gap-3 bg-yellow-FF">
      <div className="px-3 my-4 text-xl">
        <p>로그인</p>
      </div>
      <EmailInput
        emailInput={emailInput}
        onChangeEmailInput={onChangeEmailInput}
      />

      <PasswordInput
        passwordInput={passwordInput}
        onChangePasswordInput={onChangePasswordInput}
      />
      <LoginButton emailInput={emailInput} passwordInput={passwordInput} />
    </form>
  );
};

export default Login;
