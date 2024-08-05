import React, { memo, useEffect, useState } from 'react';
import { quoteItem } from 'types/quoteList';
import { QuoteImage } from 'components/common/constants/QuoteImage';

// 1.
// 2. 댓글 누르면 어떤 이벤트 발생??

interface QuoteItemProps {
  element: quoteItem;
  onClickHeart(id: number, heart: boolean): void;
}

const QuoteItem = ({ element, onClickHeart }: QuoteItemProps) => {
  const [heart, setHeart] = useState(false);
  const [flipped, setFlipped] = useState(false);

  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const chosenImage =
      QuoteImage[Math.floor(Math.random() * QuoteImage.length)];
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
    <div className="shadow-custom-bottom-right border rounded-lg border-none border-black pb-3 pt-12 flex flex-col gap-2 bg-white">
      <div className=" relative text-center h-[275px] text-white">
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
            className="w-5 h-5 hover:cursor-pointer"
            src={!heart ? '/icons/heart-regular.svg' : '/icons/heart-solid.svg'}
            alt={!heart ? '텅빈하트' : '꽉찬하트'}
            onClick={onClickToggleHeart}
            onKeyDown={onClickToggleHeart}
          />
          <span>{element.likes}</span>
        </div>
        <div>
          <img
            className="w-5 h-8 hover:cursor-pointer"
            src="/icons/comment-dots-regular.svg"
            alt="댓글"
          />
        </div>
      </div>
    </div>
  );
};

export default memo(QuoteItem, (prev, next) => {
  if (prev.element.id !== next.element.id) return false;
  if (prev.element.author !== next.element.author) return false;
  if (prev.element.description !== next.element.description) return false;
  if (
    JSON.stringify(prev.element.comments) !==
    JSON.stringify(next.element.comments)
  )
    return false;
  if (prev.element.created_at !== next.element.created_at) return false;
  if (prev.element.likes !== next.element.likes) return false;
  if (prev.element.content !== next.element.content) return false;
  if (prev.element.registrant !== next.element.registrant) return false;
  if (JSON.stringify(prev.element.tag) !== JSON.stringify(next.element.tag))
    return false;

  return true;
});
