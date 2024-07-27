import React, { useEffect, useState } from 'react';
import { quoteItem } from 'types/quoteList';

interface QuoteItemProps {
  element: quoteItem;
  onClickHeart(id: number, heart: boolean): void;
}

const QuoteItem = ({ element, onClickHeart }: QuoteItemProps) => {
  const [heart, setHeart] = useState(false);
  const [flipped, setFlipped] = useState(false);

  const [backgroundImage, setBackgroundImage] = useState('');
  const images = [
    '/images/quoteImage1.jpg',
    '/images/quoteImage2.jpg',
    '/images/quoteImage3.jpg',
    '/images/quoteImage4.jpg',
    '/images/quoteImage5.jpg',
    '/images/quoteImage6.jpg',
    '/images/quoteImage7.jpg',
    '/images/quoteImage8.jpg',
    '/images/quoteImage9.jpg',
    '/images/quoteImage10.jpg',
  ];

  useEffect(() => {
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    setBackgroundImage(`url(${chosenImage})`);
  }, []);

  const onClickToggleHeart = () => {
    setHeart(!heart);
    onClickHeart(element.id, heart);
  };

  const onClickCard = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="shadow-custom-bottom-right border rounded-lg border-none border-black py-3 flex flex-col gap-2 bg-white">
      <div className="p-2">키워드 들어갈 자리</div>
      <div className="relative text-center h-96 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage,
            filter: 'brightness(70%)',
          }}
        ></div>
        <div
          style={{ perspective: '1100px' }}
          className="p-3 relative z-10 flex flex-col items-center justify-center h-full font-semibold text-xl"
        >
          <div
            style={{
              position: 'relative',
              transition: '.4s',
              transformStyle: 'preserve-3d',
              transform: flipped ? 'rotateY(180deg)' : '',
            }}
            role="button"
            tabIndex={0}
            onClick={onClickCard}
            onKeyDown={onClickCard}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

                backfaceVisibility: 'hidden',
              }}
            >
              <div>
                <p>{element.content}</p>
                <br />
                <p>{element.author}</p>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                position: 'absolute',
                top: 0,
                left: 0,
                transform: 'rotateY(180deg)',
                backfaceVisibility: 'hidden',
              }}
            >
              {element.description}
            </div>
          </div>
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
