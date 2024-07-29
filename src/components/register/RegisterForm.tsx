import React, { useRef, useState } from 'react';
import { info, err, infoRef } from 'types/register';
import { Link } from 'react-router-dom';
import EmailSection from './EmailSection';
import PasswordSection from './PasswordSection';
import NicknameSection from './NicknameSection';
import SignUpSection from './SignUpSection';

// 추가해야될 사항
// 1. 이메일 유효성 검사 - 해결
// 2. 이메일 중복 검사(API 명세서 나오면 확인)
// 3. 비밀번호 유효성 검사 - 해결
// 4. 비밀번호 일치 검사 - 해결
// 5. 닉네임 중복 검사(API 명세서 나오면 확인)
// 6. 컴포넌트 부분 별로 나누기
// 7. 조건이 만족되지 않으면 빨간 경고 메세지 뜨도록 수정하기 - 해결
// 8. 이미 회원이신가요? => 로그인하기 버튼 링크하기 - 해결

// 문제사항: 비밀번호 일치 불일치 - 해결

interface RegisterProps {
  register: info;
  error: err;
  onChangeRegister(e: React.ChangeEvent<HTMLInputElement>): void;
}

const RegisterForm = ({ register, error, onChangeRegister }: RegisterProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const checkPasswordRef = useRef<HTMLInputElement>(null);
  const nicknameRef = useRef<HTMLInputElement>(null);

  const refObj: infoRef = {
    emailRef,
    passwordRef,
    checkPasswordRef,
    nicknameRef,
  };

  return (
    <section>
      {success ? (
        <form
          className="p-5 flex flex-col gap-10
         bg-white text-center h-[812px] items-center"
        >
          <h1 className="text-2xl mt-[250px]">축하합니다!</h1>
          <Link
            to="/login"
            className="border rounded-lg text-white bg-black mx-[110px] p-3"
          >
            로그인하기
          </Link>
        </form>
      ) : (
        <form className="p-3 flex flex-col gap-2 bg-white">
          <h2 className="px-3 my-4 text-xl">회원가입</h2>
          <EmailSection
            submitted={submitted}
            emailRef={emailRef}
            email={register.email}
            emailErr={error.emailErr}
            onChangeRegister={onChangeRegister}
          />

          <PasswordSection
            submitted={submitted}
            passwordRef={passwordRef}
            checkPasswordRef={checkPasswordRef}
            password={register.password}
            checkPassword={register.checkPassword}
            passwordErr={error.passwordErr}
            checkPasswordErr={error.checkPasswordErr}
            onChangeRegister={onChangeRegister}
          />

          <NicknameSection
            submitted={submitted}
            nicknameRef={nicknameRef}
            nickname={register.nickname}
            nicknameErr={error.nicknameErr}
            onChangeRegister={onChangeRegister}
          />

          <SignUpSection
            submitted={submitted}
            register={register}
            error={error}
            refObj={refObj}
            setSubmitted={setSubmitted}
            setSuccess={setSuccess}
          />
        </form>
      )}
    </section>
  );
};

export default RegisterForm;
