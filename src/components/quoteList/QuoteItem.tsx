import React, { useEffect, useState } from 'react';
import { quoteItem } from 'types/quoteList';

interface QuoteItemProps {
  element: quoteItem;
  onClickHeart(id: number, heart: boolean): void;
}

const QuoteItem = ({ element, onClickHeart }: QuoteItemProps) => {
  const [heart, setHeart] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState('');
  const images = [
    '/images/image01.jpg',
    '/images/image02.jpg',
    '/images/image03.jpg',
    '/images/image04.jpg',
    '/images/image05.jpg',
    '/images/image06.jpg',
    '/images/image07.jpg',
    '/images/image08.jpg',
    '/images/image09.jpg',
    '/images/image10.jpg',
    '/images/image11.jpg',
  ];

  useEffect(() => {
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    setBackgroundImage(`url(${chosenImage})`);
  }, []);

  const onClickToggleHeart = () => {
    setHeart(!heart);
    onClickHeart(element.id, heart);
  };

  return (
    <div className="shadow-custom-bottom-right border rounded-lg border-none border-black py-3 flex flex-col gap-2">
      <div className="p-2">키워드 들어갈 자리</div>
      <div className="relative text-center h-96 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage,
            filter: 'brightness(70%)',
          }}
        ></div>
        <div className="p-3 relative z-10 flex flex-col items-center justify-center h-full font-semibold text-xl">
          <p>{element.content}</p>
          <br />
          <p>{element.author}</p>
        </div>
      </div>

      <div className="flex gap-3 px-3">
        <div className="flex items-center gap-2">
          <img
            className="w-5 h-5"
            src={!heart ? '/icons/heart-regular.svg' : '/icons/heart-solid.svg'}
            alt={!heart ? '텅빈하트' : '꽉찬하트'}
            onClick={onClickToggleHeart}
            onKeyDown={onClickToggleHeart}
          />
          <span>{element.likes}</span>
        </div>
        <div>
          <img
            className="w-5 h-8"
            src="/icons/comment-dots-regular.svg"
            alt="댓글"
          />
        </div>
      </div>
    </div>
  );
};

export default QuoteItem;
