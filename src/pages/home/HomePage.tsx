import Button from 'components/home/Button';
import Question from 'components/home/Question';
import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center pt-[30px] gap-[30px]">
      <Question />
      <Button />
    </div>
  );
};

export default HomePage;
