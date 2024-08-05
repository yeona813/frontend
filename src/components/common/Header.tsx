import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideBarPortal from 'helpers/SideBarPortal';
import BlackArea from './BlackArea';
import SideMenu from './SideMenu';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const location = useLocation();
  const isAuthPage =
    location.pathname === '/login' || location.pathname === '/register';
  const headerColor = isAuthPage ? 'bg-white' : '';

  const onClickMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <div
      className={`fixed top-0 w-screen max-w-md z-20 ${headerColor} flex items-center justify-center py-5 h-[70px] shadow-sm`}
      style={
        isAuthPage
          ? {}
          : {
              backgroundImage: `url('/images/background.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
      }
    >
      {!isAuthPage && (
        <button onClick={onClickMenu} type="button">
          <img
            className="absolute top-5 left-[30px] w-[25px] h-[25px] cursor-pointer"
            src="/icons/menu.png"
            alt="메뉴"
          />
        </button>
      )}
      <Link to="/" className="flex items-center text-[25px] font-bold">
        <img className="w-[60px] h-full" src="/icons/header.png" alt="조약돌" />
        <span>Pebble</span>
      </Link>
      {menuOpened && (
        <SideBarPortal>
          <div className="fixed top-0 left-0 flex bg-white w-1/2 max-w-screen-sm h-screen z-40">
            <BlackArea onClickMenu={onClickMenu} />
            <SideMenu onClickMenu={onClickMenu} />
          </div>
        </SideBarPortal>
      )}
    </div>
  );
};

export default Header;
