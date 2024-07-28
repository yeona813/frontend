import React from 'react';

interface ResultQuoteProps {
  imageUrl: string;
  quote: string;
  isLike: boolean;
  handleLike: () => void;
}

const ResultQuote = ({
  imageUrl,
  quote,
  isLike,
  handleLike,
}: ResultQuoteProps) => {
  return (
    <div
      className="relative p-10 flex items-center justify-center w-[260px] h-[260px] rounded-xl"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <span className="text-center text-white font-bold">{quote}</span>
      <button type="button" onClick={handleLike}>
        <img
          src={isLike ? '/icons/heart-solid.svg' : '/icons/heart-white.svg'}
          alt="찜"
          className="absolute top-[20px] right-[20px] w-5 h-5"
        />
      </button>
    </div>
  );
};

export default ResultQuote;
