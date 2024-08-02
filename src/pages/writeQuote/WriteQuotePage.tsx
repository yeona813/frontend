import Button from 'components/common/Button';
import Textarea from 'components/writeQuote/Textarea';
import React from 'react';

const WriteQuotePage = () => {
  const handleClick = () => {
    console.log('등록');
  };

  return (
    <div className="flex flex-col items-center pt-[30px] gap-[30px]">
      <div className="flex flex-col items-center w-[300px] px-[30px] py-5 rounded-xl bg-white shadow-custom gap-[20px]">
        <p className="font-semibold">나만의 명언 만들기</p>
        <div className="w-[260px] h-[170px] bg-yellow-200 rounded-xl">
          여기는 명언 미리보기를 넣고자 합니다~
        </div>
        <Textarea
          title="명언"
          placeholder="등록하고 싶은 명언을 입력해주세요"
        />
        <Textarea
          title="설명"
          placeholder="등록하고자 하는 명언에 대해 설명해주세요"
        />
      </div>
      <Button text="등록하기" handleClick={handleClick} />
    </div>
  );
};

export default WriteQuotePage;
