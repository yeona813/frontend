import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BlackArea from './BlackArea';
import SideMenu from './SideMenu';

const Header = () => {
  const [menuOpened, setMenuOpend] = useState(false);

  const onClickMenu = () => {
    setMenuOpend(!menuOpened);
  };

  return (
    <div className="fixed top-0 w-screen z-20 bg-yellow-FF flex items-center justify-center py-5 h-[70px] shadow-sm">
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
        className={`fixed top-0 left-0 flex bg-white w-[250px] h-screen z-40 ${menuOpened ? 'transform-translatex-show' : 'transform-translatex-hide'} `}
      >
        <SideMenu />
      </div>
      {menuOpened ? <BlackArea onClickMenu={onClickMenu} /> : null}
    </div>
  );
};

export default Header;
