import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-center items-center gap-[110px] py-5 h-[70px] shadow-sm">
      <img className="w-[25px] h-[25px]" src="/icons/menu.png" alt="메뉴" />
      <p className="text-[25px]">로고</p>
      <img
        className="w-[25px] h-[25px]"
        src="/icons/profile.png"
        alt="프로필"
      />
    </div>
  );
};

export default Header;
