import React, { ChangeEvent } from 'react';

interface QuestionProps {
  text: string;
  handleTextChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Question = ({ text, handleTextChange }: QuestionProps) => {
  return (
    <div className="flex flex-col items-center w-[300px] h-[350px] rounded-xl bg-white shadow-custom gap-[20px]">
      <p className="font-semibold mt-[30px]">오늘은 무슨 고민이 있나요?</p>
      <div className="bg-yellow-FF w-[250px] h-[2px] mb-5" />
      {/* yellow-ff 말고 다른걸로 해야함 */}
      <textarea
        className="w-[240px] h-[350px] bg-white resize-none outline-none scrollbar-hide leading-8 text-sm"
        placeholder="고민이나 필요한 조언에 대해 자세히 적어주세요. 구체적인 글이 더 정확한 명언을 찾는 데 도움이 됩니다."
        value={text}
        onChange={handleTextChange}
      />
    </div>
  );
};

export default Question;
