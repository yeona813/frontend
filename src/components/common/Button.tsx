import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
  text: string;
  navigate: string;
}

const Button = ({ text, navigate }: ButtonProps) => {
  const naviagte = useNavigate();

  const handleClick = () => {
    naviagte(`/${navigate}`);
  };

  return (
    <button
      className="w-[150px] h-[50px] bg-black font-mediun text-white rounded-full"
      type="button"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
