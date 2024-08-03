import React from 'react';

interface TextareaProps {
  title: string;
  placeholder: string;
}

const Textarea = ({ title, placeholder }: TextareaProps) => {
  return (
    <div className="flex flex-col gap-[8px]">
      <p className="text-sm font-semibold">{title}</p>
      <textarea
        className="w-[260px] h-[100px] resize-none outline-none scrollbar-hide text-xs border border-gray-300 rounded-xl p-3"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Textarea;
