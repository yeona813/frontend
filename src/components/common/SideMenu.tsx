import { instance } from 'api/instance';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SideMenuProps {
  onClickMenu(): void;
}

const SideMenu = ({ onClickMenu }: SideMenuProps) => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    onGetUserNickname();
  }, []);

  const onGetUserNickname = async () => {
    console.log(localStorage.getItem('accessToken'));
    try {
      const response = await instance.get('accounts/profile/', {
        headers: {
          Authorization: `token ${localStorage.getItem('accessToken')}`,
        },
      });
      if (response.status === 200) {
        setNickname(response.data.nickname);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onClickLogout = () => {
    window.localStorage.removeItem('accessToken');
    navigate('/login');
    onClickMenu();
  };

  const onClickHome = () => {
    navigate('/');
    onClickMenu();
  };

  const onClickMy = () => {
    navigate('/my');
    onClickMenu();
  };

  return (
    <section className="flex w-full flex-col px-3 h-screen relative bg-white">
      <button
        type="button"
        className="w-full h-[30px] mt-[15px] text-xl flex"
        onClick={onClickMenu}
      >
        <img
          src="/icons/x-solid.svg"
          alt="X버튼"
          className="ml-[4px] mt-[5px] w-5 h-5"
        />
      </button>
      <div className="w-full flex h-[70px] items-center gap-2 border-b-[1px] border-slate-400">
        <span className="text-xl font-semibold border-b-2 border-black">
          {nickname}
        </span>
        <span>님</span>
      </div>
      <div>
        <ul className="flex flex-col">
          <li className="  border-b-[1px] border-slate-400">
            <div
              tabIndex={0}
              role="button"
              onClick={onClickHome}
              onKeyDown={onClickHome}
              className="flex items-center gap-3 my-3 "
            >
              <img
                src="icons/house-solid.svg"
                alt="홈 버튼"
                className="w-5 h-5"
              />
              <span>홈</span>
            </div>
          </li>
          <li className="  border-b-[1px] border-slate-400">
            <div
              tabIndex={0}
              role="button"
              onClick={onClickMy}
              onKeyDown={onClickMy}
              className="flex items-center gap-3 my-3 "
            >
              <img
                src="icons/user-solid.svg"
                alt="마이페이지 버튼"
                className="w-5 h-5"
              />
              <span>마이페이지</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="w-full h-[70px]  absolute bottom-0 left-0 px-4 flex justify-end gap-3 items-center border-t-[1px] border-slate-400">
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
