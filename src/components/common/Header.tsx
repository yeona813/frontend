import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Header = () => {
  const [menuOpened, setMenuOpend] = useState(false);

  const onClickMenu = () => {
    setMenuOpend(!menuOpened);
    console.log(menuOpened);
  };

  return (
    <div
      className="fixed top-0 w-[376px] z-20 bg-yellow-FF 
    flex justify-center items-center gap-[110px] py-5 h-[70px] shadow-sm"
    >
      <div>
        <button onClick={onClickMenu} type="button">
          <img
            className="w-[25px] h-[25px] cursor-pointer"
            src="/icons/menu.png"
            alt="메뉴"
          />
        </button>
      </div>

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
      {menuOpened ? <Sidebar onClickMenu={onClickMenu} /> : null}
    </div>
  );
};

export default Header;
