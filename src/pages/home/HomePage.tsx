import Button from 'components/common/Button';
import Question from 'components/home/Question';
import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center pt-[30px] gap-[30px]">
      <Question />
      <Button text="결과 보기" navigate="resultQuote" />
    </div>
  );
};

export default HomePage;
