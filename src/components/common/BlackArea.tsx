import React from 'react';

interface BlackAreaProps {
  onClickMenu(): void;
}

// 넣고 싶은거 넣기

const BlackArea = ({ onClickMenu }: BlackAreaProps) => {
  return (
    <div className="absolute top-0 left-0 h-[812px] flex w-full">
      <div
        tabIndex={0}
        role="button"
        onClick={onClickMenu}
        onKeyDown={onClickMenu}
        className="flex bg-black opacity-50 fixed top-0 w-[376px] h-[812px] z-30"
      ></div>
    </div>
  );
};

export default BlackArea;
