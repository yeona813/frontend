import Button from 'components/common/Button';
import Comment from 'components/resultQuote/Comment';
import ResultQuote from 'components/resultQuote/ResultQuote';
import WriteComment from 'components/resultQuote/WriteComment';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// @TODO 해당 명언 댓글 조회

const ResultQuotePage = () => {
  const [isLike, setIsLike] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    // @TODO like 관련 post 요청 보내야함
    navigate('/quoteList');
  };

  const handleLike = () => {
    setIsLike(!isLike);
  };

  return (
    <div className="flex flex-col items-center pt-[30px] gap-[30px]">
      <div className="flex flex-col gap-[20px] w-[300px] rounded-xl bg-white shadow-custom p-5">
        <ResultQuote
          imageUrl="/images/quoteImage1.png"
          quote="  오늘의 명언은 이거야 ~~~오늘의 명언은 아주아주 길다 길다기달다길다"
          isLike={isLike}
          handleLike={handleLike}
        />
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
      <Button text="명언 더 보기" handleClick={handleClick} />
    </div>
  );
};

export default ResultQuotePage;
