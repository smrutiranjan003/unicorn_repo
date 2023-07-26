import React from 'react';
import { ArrowRight } from 'react-feather';

const HeroOption = ({ children }) => {
  return (
    <div className='flex items-center cursor-pointer'>
      <ArrowRight size={18} className='mr-1' />
      {children}
    </div>
  );
};

const Hero = () => {
  return (
    <div
      className='flex flex-col justify-center items-center gap-4 h-screen lg:h-hero xl:h-hero-xl px-4 text-white uppercase font-semibold'
      style={{ backgroundImage: 'url(/hero.jpeg)' }}
    >
      <h1 className='text-4xl text-center cursor-pointer'>
        Your luxury gifting destination
      </h1>
      <div className='flex flex-wrap justify-center gap-4 text-sm'>
        <HeroOption>Women's gifts</HeroOption>
        <HeroOption>Men's gifts</HeroOption>
        <HeroOption>Children's gifts</HeroOption>
      </div>
    </div>
  );
};

export default Hero;
