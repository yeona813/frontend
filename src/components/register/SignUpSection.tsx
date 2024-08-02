import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { info, err, infoRef } from 'types/register';

interface SignUpSectionProps {
  emailCheck: boolean;
  submitted: boolean;
  register: info;
  error: err;
  refObj: infoRef;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUpSection = ({
  emailCheck,
  register,
  error,
  refObj,
  submitted,
  setSubmitted,
  setSuccess,
}: SignUpSectionProps) => {
  const apllyStyle = (errorType: boolean) => {
    return errorType ? '1px solid rgb(50,180,50)' : '1px solid red';
  };

  useEffect(() => {
    console.log(error);
    if (submitted) {
      refObj.emailRef.current?.style.setProperty(
        'border',
        apllyStyle(error.emailErr),
        // 여기는 중복확인까지 해서 스타일 적용
      );
      refObj.passwordRef.current?.style.setProperty(
        'border',
        apllyStyle(error.passwordErr),
      );
      refObj.checkPasswordRef.current?.style.setProperty(
        'border',
        apllyStyle(error.checkPasswordErr && error.passwordErr),
      );
      refObj.nicknameRef.current?.style.setProperty(
        'border',
        apllyStyle(error.nicknameErr),
      );
    }
  }, [submitted, error]);

  const onSubmit = async () => {
    setSubmitted(true);
    const isErrorFree = Object.values(error).every(
      (element) => element === true,
    );

    if (!isErrorFree || !emailCheck) {
      console.log(`ERRRRRR, ${!isErrorFree}, ${!emailCheck}`);
      return;
    }

    try {
      const response = await axios.post('서버URL', {
        email: register.email,
        nickname: register.nickname,
        password: register.password,
      });

      if (response.status === 201) {
        setSuccess(true);
      }
    } catch (err) {
      console.log('ERROR OCCURED');
    }
    console.log(register.email, register.password);
  };
  return (
    <section>
      <div className="mt-[20px] text-center flex flex-col gap-4 items-center">
        <button
          onClick={onSubmit}
          className="rounded-lg bg-black w-[335px] h-[45px] shadow-md text-white"
          type="button"
        >
          회원가입
        </button>
        <div>
          <span>이미 회원이신가요? </span>
          <Link className="underline" to="/login">
            로그인하기
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUpSection;
