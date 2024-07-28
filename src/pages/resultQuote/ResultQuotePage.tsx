import Button from 'components/common/Button';
import Comment from 'components/resultQuote/Comment';
import ResultQuote from 'components/resultQuote/ResultQuote';
import WriteComment from 'components/resultQuote/WriteComment';
import React from 'react';

const ResultQuotePage = () => {
  return (
    <div className="flex flex-col items-center pt-[30px] gap-[30px]">
      <div className="flex flex-col gap-[20px] w-[300px] rounded-xl bg-white shadow-custom p-5">
        <ResultQuote />
        <WriteComment />
        <Comment
          profileImage="/images/quoteImage2.jpg"
          nickname="안연아"
          date="2024-07-28"
          comment="오늘 명언 추천 굿"
        />
        <Comment
          profileImage="/images/quoteImage3.jpg"
          nickname="ddd"
          date="2024-07-28"
          comment="오늘 명언 추천 굿 오늘 힘내보자~~"
        />
      </div>
      <Button text="명언 더 보기" navigate="quoteList" />
    </div>
  );
};

export default ResultQuotePage;
