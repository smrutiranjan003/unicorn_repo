import React from 'react';

const Badge = ({ text }) => {
  return (
    <span className='text-xs ml-1 border border-gray-400 text-gray-400 px-2'>
      {text}
    </span>
  );
};

export default Badge;
