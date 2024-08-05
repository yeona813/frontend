import React, { ChangeEvent } from 'react';

interface QuestionProps {
  text: string;
  handleTextChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Question = ({ text, handleTextChange }: QuestionProps) => {
  return (
    <div className="flex flex-col items-center w-full h-[400px] rounded-xl bg-white shadow-custom gap-[20px] p-[30px]">
      <p className="font-semibold">오늘은 무슨 고민이 있나요?</p>
      <div className="bg-gray-300 w-full h-[2px] mb-5" />
      <textarea
        className="w-full h-[400px] bg-white resize-none outline-none scrollbar-hide leading-8 text-md"
        placeholder="고민이나 필요한 조언에 대해 자세히 적어주세요. 구체적인 글이 더 정확한 명언을 찾는 데 도움이 됩니다."
        value={text}
        onChange={handleTextChange}
      />
    </div>
  );
};

export default Question;
