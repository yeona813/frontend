import React from 'react';

interface BlackAreaProps {
  onClickMenu(): void;
}

// 넣고 싶은거 넣기

const BlackArea = ({ onClickMenu }: BlackAreaProps) => {
  return (
    <div className="absolute top-0 left-0 h-screen flex w-full">
      <div
        tabIndex={0}
        role="button"
        onClick={onClickMenu}
        onKeyDown={onClickMenu}
        className="flex bg-black opacity-50 fixed top-0 w-screen h-screen"
      ></div>
    </div>
  );
};

export default BlackArea;
