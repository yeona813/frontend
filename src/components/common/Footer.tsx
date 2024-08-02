import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const FOOTER_ITEMS = [
  {
    name: '오늘명언',
    src: '/icons/home.png',
    activeSrc: '/icons/home-click.png',
    to: '/',
  },
  {
    name: '나의명언',
    src: '/icons/plus.png',
    activeSrc: '/icons/plus-click.png',
    to: '/plus',
  },
  {
    name: '콘텐츠',
    src: '/icons/note.png',
    activeSrc: '/icons/note-click.png',
    to: '/quoteList',
  },
  {
    name: 'My',
    src: '/icons/profileMenu.png',
    activeSrc: '/icons/profileMenu-click.png',
    to: '/my',
  },
];

const Footer = () => {
  const location = useLocation();

  return (
    <div className="fixed top-[584px] bottom-0 w-[376px] h-[80px] border border-t-gray-50 bg-yellow-FA flex px-[30px] items-center gap-[50px] z-10">
      {FOOTER_ITEMS.map((item) => {
        const isActive = location.pathname === item.to;
        return (
          <NavLink
            to={item.to}
            key={item.name}
            className={({ isActive }) =>
              isActive
                ? 'flex flex-col items-center gap-[8px] text-black'
                : 'flex flex-col items-center gap-[8px] text-gray-D1'
            }
          >
            <img
              className="w-[30px]"
              src={isActive ? item.activeSrc : item.src}
              alt={item.name}
            />
            <span className="text-xs font-bold">{item.name}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Footer;
