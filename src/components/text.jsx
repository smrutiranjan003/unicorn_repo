import React from 'react';

const Text = ({ children, bold, link }) => {
  return (
    <div
      className={`${
        bold ? 'uppercase font-semibold justify-between py-4' : 'py-1.5'
      } ${
        link ? 'cursor-pointer hover:text-gray-400' : ''
      } flex items-center text-xs text-black`}
    >
      {children}
    </div>
  );
};

export default Text;
