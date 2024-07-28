import React from 'react';

interface SidebarProps {
  onClickMenu(): void;
}

const Sidebar = ({ onClickMenu }: SidebarProps) => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen flex">
      <div className="flex bg-white w-1/2 h-full">
        <button onClick={onClickMenu} type="button">
          나가기
        </button>
      </div>
      <div
        tabIndex={0}
        role="button"
        onClick={onClickMenu}
        onKeyDown={onClickMenu}
        className="flex bg-black opacity-50 w-1/2"
      ></div>
    </div>
  );
};

export default Sidebar;
