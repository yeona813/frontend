import React from 'react';

const EditNicknameInput = () => {
  return (
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
  );
};

export default EditNicknameInput;
