import React from 'react';
import EditEmailInput from './EditEmailInput';
import EditNicknameInput from './EditNicknameInput';
import EditPasswordInput from './EditPasswordInput';
import EditSubmitButton from './EditSubmitButton';

// 1. 이메일, 닉네임, 비밀번호 유효성 검사 만들기
// 2. 입력값 state로 관리
// 3. 저장하기 누르면 event로 server에 put method

const EditProfile = () => {
  return (
    <form className="p-3 flex flex-col gap-3 bg-white h-screen items-center">
      <div className="my-4 text-xl">
        <h2 className="text-xl w-[335px]">회원정보 수정</h2>
      </div>
      <EditEmailInput />
      <EditNicknameInput />
      <EditPasswordInput />
      <EditSubmitButton />
      <div className="w-full pb-[100px]"></div>
    </form>
  );
};

export default EditProfile;
