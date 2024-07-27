import axios from 'axios';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { info, err, infoRef } from 'types/register';

interface SignUpSectionProps {
  submitted: boolean;
  register: info;
  error: err;
  refObj: infoRef;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUpSection = ({
  register,
  error,
  refObj,
  submitted,
  setSubmitted,
}: SignUpSectionProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (submitted) {
      refObj.emailRef.current?.style.setProperty(
        'border',
        error.emailErr ? '1px solid rgb(50,180,50)' : '1px solid red',
      );
      refObj.passwordRef.current?.style.setProperty(
        'border',
        error.passwordErr ? '1px solid rgb(50,180,50)' : '1px solid red',
      );
      refObj.checkPasswordRef.current?.style.setProperty(
        'border',
        error.checkPasswordErr ? '1px solid rgb(50,180,50)' : '1px solid red',
      );
      refObj.nicknameRef.current?.style.setProperty(
        'border',
        error.nicknameErr ? '1px solid rgb(50,180,50)' : '1px solid red',
      );
    }
  }, [submitted, error]);

  const onSubmit = () => {
    setSubmitted(true);
    const isErrorFree = Object.values(error).every(
      (element) => element === true,
    );

    if (isErrorFree) {
      axios
        .post('#', {
          email: register.email,
          password: register.password,
          nickname: register.nickname,
        })
        .then((response) => {
          console.log('User token', response.data.jwt);
          localStorage.setItem('data', response.data.jwt);
          navigate('/login');
        })
        .catch((error) => {
          console.log('An error occurred:', error.response);
        });
    }
  };
  return (
    <section>
      <div className="mt-[20px] text-center flex flex-col gap-4 items-center">
        <button
          onClick={onSubmit}
          className="rounded-lg bg-yellow-300 w-[335px] h-[45px] shadow-md"
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
