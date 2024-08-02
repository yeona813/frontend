import Button from 'components/common/Button';
import React from 'react';

const WriteQuotePage = () => {
  const handleClick = () => {
    console.log('등록');
  };
  return (
    <div className="flex flex-col items-center pt-[30px] gap-[30px]">
      <div className="flex flex-col items-center w-[300px] h-[350px] rounded-xl bg-white shadow-custom gap-[20px]">
        <p className="font-semibold mt-[30px]">오늘은 무슨 고민이 있나요?</p>
        <div className="bg-yellow-FF w-[250px] h-[2px] mb-5" />
      </div>
      <Button text="등록하기" handleClick={handleClick} />
    </div>
  );
};

export default WriteQuotePage;
