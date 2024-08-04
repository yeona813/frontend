import React from 'react';
import { useNavigate } from 'react-router-dom';

interface SideMenuProps {
  onClickMenu(): void;
}

const SideMenu = ({ onClickMenu }: SideMenuProps) => {
  const navigate = useNavigate();
  const onClickLogout = () => {
    window.localStorage.removeItem('accessToken');
    navigate('/login');
    onClickMenu();
  };

  return (
    <section className="flex w-full flex-col gap-4 px-3 h-screen relative">
      <button
        type="button"
        className="w-full h-[30px] mt-[15px] text-xl flex"
        onClick={onClickMenu}
      >
        <img
          src="/icons/x-solid.svg"
          alt="X버튼"
          className="ml-[18px] mt-[5px] w-5 h-5"
        />
      </button>
      <div className="w-full h-[70px] bg-sky-400 ">로고, 서비스 이름</div>
      <div className="w-full h-[70px] bg-green-400">
        사용자 정보 (클릭: 마이페이지)
      </div>
      <div>
        <ul className="flex flex-col gap-4">
          <li className=" bg-orange-400">홈</li>
          <li className=" bg-orange-400">좋아한 컨텐츠</li>
          <li className=" bg-orange-400">또</li>
        </ul>
      </div>
      <div className="w-full h-[200px] bg-pink-300 mt-[100px] absolute bottom-[100px] left-0 px-4">
        우리조 이미지?
      </div>
      <div className="w-full h-[45px]  mb-7 absolute bottom-0 left-0 px-4 flex justify-end gap-3">
        <h2 className="font-semibold">로그아웃</h2>
        <button
          type="button"
          className="flex justify-center"
          onClick={onClickLogout}
        >
          <img src="/icons/logout.svg" alt="로그아웃버튼" className="w-7 h-7" />
        </button>
      </div>
    </section>
  );
};

export default SideMenu;
