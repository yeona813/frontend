import React from 'react';

const SideMenu = () => {
  return (
    <section className="flex w-full flex-col gap-4 px-3">
      <div className="w-full h-[30px] bg-slate-500 mt-[15px] text-xl">X</div>
      <div className="w-full h-[70px] bg-sky-400 ">로고, 서비스 이름</div>
      <div className="w-full h-[70px] bg-green-400">
        사용자 정보 (클릭: 마이페이지)
      </div>
      <div>
        <ul className="flex flex-col gap-4">
          <li className=" bg-orange-400">홈</li>
          <li className=" bg-orange-400">좋아한 컨텐츠</li>
          <li className=" bg-orange-400">또</li>
          <li className=" bg-orange-400">뭐를</li>
          <li className=" bg-orange-400">넣을까?</li>
        </ul>
      </div>
      <div className="w-full h-[200px] bg-pink-300 mt-[100px]">
        우리조 이미지?
      </div>
      <div className="w-full h-[45px] bg-pink-300">로그아웃</div>
    </section>
  );
};

export default SideMenu;
