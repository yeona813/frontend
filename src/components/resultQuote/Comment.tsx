import React from 'react';

interface CommentProps {
  profileImage: string;
  nickname: string;
  date: string;
  comment: string;
}
const Comment = ({ profileImage, nickname, date, comment }: CommentProps) => {
  return (
    <div className="flex gap-[10px]">
      <img
        src={profileImage}
        alt="프로필"
        className="w-[30px] h-[30px] rounded-full"
      />
      <div className="flex flex-col gap-[10px]">
        <div className="flex items-center gap-[8px]">
          <span className="text-xs font-semibold">{nickname}</span>
          <p className="text-xs text-gray-400">{date}</p>
        </div>
        <p className="text-xs">{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
