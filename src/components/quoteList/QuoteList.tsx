import React, { useState } from 'react';
import { mockData } from './temporaryMockData';
import QuoteItem from './QuoteItem';

const QuoteList = () => {
  // MockData 말고 quoteList 백엔드에서 받아오기
  const [data, setData] = useState(mockData);
  const [loadMore, setLoadMore] = useState(5);

  const onClickHeart = (targetId: number, heart: boolean) => {
    // 하트 증가 보내기
    setData(
      data.map((element) => {
        if (element.id === targetId) {
          const afterLikes = heart ? element.likes + 1 : element.likes - 1;
          return { ...element, likes: afterLikes };
        }
        return { ...element };
      }),
    );
  };

  const filteredData = () => data.slice(0, loadMore);

  return (
    <form className=" p-3 pt-10 flex flex-col gap-2">
      <section>
        <ul className="flex flex-col items-center">
          {filteredData().map((element) => (
            <div
              key={element.id}
              className="flex flex-col mb-12 mx-4 gap-8 w-[300px]"
            >
              <li>
                <QuoteItem element={element} onClickHeart={onClickHeart} />
              </li>
              {element.id === loadMore - 1 && element.id !== data.length - 1 ? (
                <button
                  className="border rounded-lg bg-black text-white p-3"
                  type="button"
                  onClick={() => setLoadMore(loadMore + 5)}
                >
                  더보기
                </button>
              ) : null}
            </div>
          ))}
          <div className="w-full pb-[40px]"></div>
        </ul>
      </section>
    </form>
  );
};

export default QuoteList;
