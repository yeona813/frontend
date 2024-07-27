import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = () => {
  const naviagte = useNavigate();

  const handleClick = () => {
    console.log('안녕');
    naviagte('/resultQuote');
  };
  return (
    <button
      className="w-[150px] h-[50px] bg-black text-white rounded-full"
      type="button"
      onClick={handleClick}
    >
      결과 보기
    </button>
  );
};

export default Button;
