import React from 'react';

const Question = () => {
  return (
    <div className="flex flex-col items-center w-[300px] h-[500px] rounded-xl bg-white shadow-custom gap-[20px]">
      <p className="font-semibold mt-[30px]">오늘은 무슨 고민이 있나요?</p>
      <div className="bg-yellow-FF w-[250px] h-[2px] mb-5" />
      <textarea
        className="w-[240px] h-[350px] bg-white resize-none outline-none scrollbar-hide leading-8 text-sm"
        placeholder="고민이나 필요한 조언에 대해 자세히 적어주세요. 구체적인 글이 더 정확한 명언을 찾는 데 도움이 됩니다."
      />
    </div>
  );
};

export default Question;
