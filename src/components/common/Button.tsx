import React from 'react';

interface ButtonProps {
  text: string;
  handleClick: () => void;
}

const Button = ({ text, handleClick }: ButtonProps) => {
  return (
    <button
      className="w-[200px] h-[50px] bg-black font-mediun text-white rounded-full"
      type="button"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
