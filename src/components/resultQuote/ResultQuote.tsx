import React from 'react';

interface ResultQuoteProps {
  imageUrl: string;
  quote: string;
  author: string;
  isLike: boolean;
  handleLike: () => void;
}

const ResultQuote = ({
  imageUrl,
  quote,
  author,
  isLike,
  handleLike,
}: ResultQuoteProps) => {
  return (
    <div className="relative p-10 flex items-center justify-center w-[260px] h-[200px] rounded-xl">
      <div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0 rounded-xl"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="flex flex-col gap-[20px] z-10">
        <span className="text-center text-black font-bold">{quote}</span>
        <span className="text-center text-black font-bold">{author}</span>
      </div>
      <button
        type="button"
        onClick={handleLike}
        className="absolute top-[20px] right-[20px] z-20"
      >
        <img
          src={isLike ? '/icons/heart-solid.svg' : '/icons/heart-white.svg'}
          alt="찜"
          className="w-5 h-5"
        />
      </button>
    </div>
  );
};

export default ResultQuote;
