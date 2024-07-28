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
    flex justify-start items-center gap-[110px] px-[30px] py-5 h-[70px] shadow-sm"
    >
      <button onClick={onClickMenu} type="button">
        <img
          className="w-[25px] h-[25px] cursor-pointer"
          src="/icons/menu.png"
          alt="메뉴"
        />
      </button>

      <Link to="/" className="text-[25px]">
        로고
      </Link>
      {menuOpened ? <Sidebar onClickMenu={onClickMenu} /> : null}
    </div>
  );
};

export default Header;
