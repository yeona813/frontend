import React from 'react';

const WriteComment = () => {
  return (
    <div className="relative flex flex-col gap-[10px]">
      <span className="text-sm font-semibold">댓글</span>
      <textarea
        className="relative border border-gray-200 p-3 rounded-xl h-[100px] resize-none outline-none scrollbar-hide text-xs"
        placeholder="댓글 작성하기"
      />
      <button
        type="button"
        className="absolute right-3 bottom-3 border border-gray-200 rounded-xl w-[60px] h-[30px] text-xs"
      >
        입력
      </button>
    </div>
  );
};

export default WriteComment;
