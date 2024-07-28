import React, { useEffect, useState } from 'react';
import { quoteItem } from 'types/quoteList';

// 1. 명언 클릭하면 rotate되면서 명언 설명 나오게 css를 inline style로 적용했는데 필요 없으면 빼거나, 필요하면 tailwind로 바꿀 예정 - 해결
// 2. 댓글 누르면 어떤 이벤트 발생??
// 3. 5개씩 렌더링하기, 더보기 버튼 누르면 5개 씩 더 나오게 - 해결

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
          tabIndex={0}
          role="button"
          onClick={onClickCard}
          onKeyDown={onClickCard}
          className="perspective-1100 p-3 relative z-10 flex flex-col items-center justify-center h-full font-semibold text-xl"
        >
          <div
            className={`transition-md relative transformStyle-preserve-3d ${flipped ? 'transform-rotY180' : ''}`}
          >
            <div className="backface-hidden flex justify-center align-middle">
              <div className="[text-shadow:_10px_10px_7px_rgb(0,0,0,50%)]">
                <p>{element.content}</p>
                <br />
                <p>{element.author}</p>
              </div>
            </div>

            <div className="transform-rotY180 flex absolute top-0 left-0 [text-shadow:_10px_10px_7px_rgb(0,0,0,50%)] backface-hidden">
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
