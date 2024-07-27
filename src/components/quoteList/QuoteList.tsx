import React, { useState } from 'react';
import { mockData } from './temporaryMockData';
import QuoteItem from './QuoteItem';

const QuoteList = () => {
  const [data, setData] = useState(mockData);

  const onClickHeart = (targetId: number, heart: boolean) => {
    setData(
      data.map((element) => {
        if (element.id === targetId && !heart)
          return { ...element, likes: element.likes + 1 };
        if (element.id === targetId && heart)
          return { ...element, likes: element.likes - 1 };
        return { ...element };
      }),
    );
  };

  return (
    <form className="p-3 flex flex-col gap-2  bg-yellow-FF">
      <div className="px-3 my-4 text-xl">
        <p>명언</p>
      </div>
      <section>
        <ul>
          {data.map((element) => (
            <li key={element.id} className="flex flex-col mb-12 mx-4">
              <QuoteItem element={element} onClickHeart={onClickHeart} />
            </li>
          ))}
        </ul>
      </section>
    </form>
  );
};

export default QuoteList;
