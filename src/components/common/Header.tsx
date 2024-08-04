import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BlackArea from './BlackArea';
import SideMenu from './SideMenu';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const location = useLocation();
  const headerColor =
    location.pathname === '/login' || location.pathname === '/register'
      ? 'bg-white'
      : '';

  const onClickMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <div
      className={`fixed top-0 w-screen z-20 ${headerColor} flex items-center justify-center py-5 h-[70px] shadow-sm`}
      style={{
        backgroundImage: `url('/images/background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <button onClick={onClickMenu} type="button">
        <img
          className="absolute top-5 left-[30px] w-[25px] h-[25px] cursor-pointer"
          src="/icons/menu.png"
          alt="메뉴"
        />
      </button>
      <Link to="/" className="text-[25px]">
        로고
      </Link>
      <div
        className={`fixed top-0 left-0 flex bg-white w-1/2 max-w-screen-sm h-screen z-40 ${menuOpened ? 'transform-translatex-show' : 'transform-translatex-hide'} `}
      >
        <SideMenu onClickMenu={onClickMenu} />
      </div>
      {menuOpened ? <BlackArea onClickMenu={onClickMenu} /> : null}
    </div>
  );
};

export default Header;
