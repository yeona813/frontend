import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { info, err, infoRef } from 'types/register';

interface SignUpSectionProps {
  submitted: boolean;
  register: info;
  error: err;
  refObj: infoRef;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUpSection = ({
  register,
  error,
  refObj,
  submitted,
  setSubmitted,
  setSuccess,
}: SignUpSectionProps) => {
  const REGISTER_URL = '/accounts/register/';

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

  const onSubmit = async () => {
    setSubmitted(true);
    const isErrorFree = Object.values(error).every(
      (element) => element === true,
    );

    if (!isErrorFree) {
      console.log('ERRRRRR');
      return;
    }

    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({
          email: register.email,
          password: register.password,
          nickname: register.nickname,
        }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        },
      );
      console.log(response.data);
      console.log(JSON.stringify(response));
      setSuccess(true);
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
