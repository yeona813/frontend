import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="relative flex justify-center items-center gap-[110px] py-5 h-[70px] shadow-sm">
      <img className="w-[25px] h-[25px]" src="/icons/menu.png" alt="메뉴" />
      <Link to="/" className="text-[25px]">
        로고
      </Link>
      <Link to="/my">
        <img
          className="w-[25px] h-[25px]"
          src="/icons/profile.png"
          alt="프로필"
        />
      </Link>
    </div>
  );
};

export default Header;
