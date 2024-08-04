import React from 'react';
import { useNavigate } from 'react-router-dom';

// 1. 이메일, 닉네임, 비밀번호 유효성 검사 만들기
// 2. 입력값 state로 관리
// 3. 저장하기 누르면 event로 server에 put method

const EditProfile = () => {
  const navigate = useNavigate();
  return (
    <form className="p-3 flex flex-col gap-3 bg-white h-screen items-center">
      <div className="my-4 text-xl">
        <h2 className="text-xl w-[335px]">회원정보 수정</h2>
        <section>
          <button
            className="rounded-lg bg-black w-[335px] h-[45.5px] shadow-md text-white mt-5"
            type="button"
            onClick={() => navigate('/edit/nickname')}
          >
            닉네임 수정하기
          </button>
        </section>
        <section>
          <button
            className="rounded-lg bg-black w-[335px] h-[45.5px] shadow-md text-white mt-5"
            type="button"
            onClick={() => navigate('/edit/password')}
          >
            비밀번호 수정하기
          </button>
        </section>
      </div>
    </form>
  );
};

export default EditProfile;
