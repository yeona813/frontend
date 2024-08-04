import React, { ChangeEvent } from 'react';

interface TextareaProps {
  title: string;
  placeholder: string;
  handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = ({ title, placeholder, handleChange }: TextareaProps) => {
  return (
    <div className="flex flex-col gap-[8px]">
      <p className="text-sm font-semibold">{title}</p>
      <textarea
        className="w-[260px] h-[80px] resize-none outline-none scrollbar-hide text-xs border border-gray-300 rounded-xl p-3"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default Textarea;
