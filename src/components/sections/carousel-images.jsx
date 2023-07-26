import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import useDisplaySticky from '../../hooks/useDisplaySticky';

import StickyBox from '../sticky-box';

import { carouselData } from '../../data/misc';

const variants = {
  carousel: {
    x: `-${carouselData.length * 30}rem`,
    transition: {
      ease: 'linear',
      repeat: 'Infinity',
      repeatType: 'loop',
      duration: carouselData.length * 16,
    },
  },
};

const CarouselImages = () => {
  const controls = useAnimation();
  const { ref, inView, entry } = useInView();
  const isStickyBoxDisplayed = useDisplaySticky(entry, inView);

  useEffect(() => {
    controls.start('carousel');
  }, [controls]);

  return (
    <div ref={ref} className='flex items-end my-0.5 h-screen relative lg:py-11'>
      <StickyBox
        title='All wrapped up'
        options={['Festive looks']}
        isDisplayed={isStickyBoxDisplayed}
      />
      <div className='lg:static h-full overflow-hidden absolute inset-0 flex-1'>
        <motion.div
          animate={controls}
          variants={variants}
          className='flex w-min'
          whileHover={() => controls.stop()}
          onMouseLeave={() => controls.start('carousel')}
        >
          {carouselData.map((item) => (
            <div key={item.id} className='w-carousel-image'>
              <img
                src={item.image}
                alt={item.title}
                className='object-cover cursor-pointer'
              />
            </div>
          ))}
          {carouselData.slice(0, 3).map((item) => (
            <div key={item.id} className='w-carousel-image'>
              <img
                src={item.image}
                alt={item.title}
                className='object-cover cursor-pointer'
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CarouselImages;
