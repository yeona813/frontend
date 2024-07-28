import React from 'react';

const ResultQuote = () => {
  const imageUrl = '/images/quoteImage1.png';
  return (
    <div
      className="relative p-10 flex items-center justify-center w-[260px] h-[260px] rounded-xl"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <span className="text-center text-white font-bold">
        오늘의 명언은 이거야 ~~~오늘의 명언은 아주아주 길다 길다기달다길다
      </span>
      <img
        src="/icons/heart-regular.svg"
        alt="찜"
        className="absolute top-[20px] right-[20px] w-5 h-5"
      />
    </div>
  );
};

export default ResultQuote;
