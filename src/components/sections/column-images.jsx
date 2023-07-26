import React from 'react';
import { ArrowRight } from 'react-feather';

import { threeColumnData, twoColumnData } from '../../data/misc';

const ColumnItem = ({ children }) => {
  return (
    <div className='cursor-pointer flex items-center'>
      <ArrowRight size={18} className='mr-1' />
      {children}
    </div>
  );
};

const Column = ({ title, options, image }) => {
  return (
    <div className='w-full relative'>
      <div
        className='h-screen lg:h-3/4 bg-cover'
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className='absolute lg:static bottom-0 bg-white w-full py-6 lg:py-0 mt-6 uppercase font-semibold flex flex-col items-center'>
        <h1 className='cursor-pointer'>{title}</h1>
        <div className='mt-7 flex flex-col lg:flex-row items-center justify-center gap-6 text-sm'>
          {options.map((option, index) => (
            <ColumnItem key={index}>{option}</ColumnItem>
          ))}
        </div>
      </div>
    </div>
  );
};

const ColumnImages = ({ id }) => {
  const columns = id === 1 ? [...threeColumnData] : [...twoColumnData];
  return (
    <div className='flex justify-center items-center my-0.5 h-min lg:h-screen'>
      <div className='flex flex-col lg:flex-row flex-1 gap-px h-full'>
        {columns.map((column, index) => (
          <Column key={index} {...column} />
        ))}
      </div>
    </div>
  );
};

export default ColumnImages;
