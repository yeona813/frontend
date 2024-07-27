import React from 'react';

const Question = () => {
  return (
    <div className="flex flex-col items-center w-[300px] h-[500px] rounded-xl bg-white shadow-custom">
      <p className="mt-[30px] mb-[20px] ">오늘은 무슨 고민이 있나요?</p>
      <div className="bg-yellow-FF w-[250px] h-[2px]" />
      <textarea className="bg-white resize-none" />
    </div>
  );
};

export default Question;
