import React from 'react';

// 1. 이메일, 닉네임, 비밀번호 유효성 검사 만들기
// 2. 입력값 state로 관리
// 3. 저장하기 누르면 event로 server에 put method

const EditProfile = () => {
  return (
    <form className="p-3 flex flex-col gap-3 bg-white h-screen items-center">
      <div className="my-4 text-xl">
        <h2 className="text-xl w-[335px]">회원정보 수정/이메일, 닉네임</h2>
      </div>
      <section>
        <span className="text-sm">이메일</span>
        <div className="gap-2 my-2 w-[335px]  flex-1 mx-auto rounded-lg border border-gray-300  h-[50px] bg-white flex items-center justify-between px-3">
          <input
            className="w-[250px] outline-none"
            name="email"
            type="text"
            placeholder="이메일를 입력하세요"
          />
        </div>
      </section>
      <section>
        <span className="text-sm">닉네임</span>
        <div className="gap-2 my-2 w-[335px]  flex-1 mx-auto rounded-lg border border-gray-300  h-[50px] bg-white flex items-center justify-between px-3">
          <input
            className="w-[250px] outline-none"
            name="email"
            type="text"
            placeholder="닉네임를 입력하세요"
          />
        </div>
      </section>
      <section>
        <span className="text-sm">비밀번호 확인</span>
        <div className="gap-2 my-2 w-[335px]  flex-1 mx-auto rounded-lg border border-gray-300  h-[50px] bg-white flex items-center justify-between px-3">
          <input
            className="w-[250px] outline-none"
            name="email"
            type="text"
            placeholder="비밀번호를 입력하세요"
          />
        </div>
      </section>
      <section>
        <button
          className="rounded-lg bg-black w-[335px] h-[45.5px] shadow-md text-white mt-5"
          type="button"
        >
          저장하기
        </button>
      </section>
    </form>
  );
};

export default EditProfile;
