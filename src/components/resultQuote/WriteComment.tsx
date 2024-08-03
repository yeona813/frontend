import { instance } from 'api/instance';
import React, { ChangeEvent, useState } from 'react';
import { useParams } from 'react-router-dom';

const WriteComment = () => {
  const [comment, setComment] = useState('');
  const { id } = useParams();

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleClick = async () => {
    try {
      const headers = {
        Authorization: `token ${localStorage.getItem('accessToken')}`,
      };

      const response = await instance.post(
        `quote/${id}/comment/`,
        { content: comment },
        {
          headers,
        },
      );
      if (response.status === 200) {
        console.log('댓글 달기 성공');
        console.log(response.data);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex flex-col gap-[10px]">
      <span className="text-sm font-semibold">댓글</span>
      <div className="relative w-[260px] h-[110px] border border-gray-200 rounded-xl p-3">
        <textarea
          className="w-[236px] h-[50px] resize-none outline-none scrollbar-hide text-xs"
          placeholder="댓글 작성하기"
          value={comment}
          onChange={handleChange}
        />
        <button
          type="button"
          className="absolute right-3 bottom-3 border border-gray-200 rounded-xl w-[60px] h-[30px] text-xs"
          onClick={handleClick}
        >
          입력
        </button>
      </div>
    </div>
  );
};

export default WriteComment;
