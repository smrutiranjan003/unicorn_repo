import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import useDisplaySticky from '../../hooks/useDisplaySticky';

import StickyBox from '../sticky-box';

import { slideshowData } from '../../data/misc';

const SlideshowImages = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.45,
  });
  const isStickyBoxDisplayed = useDisplaySticky(entry, inView);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(handleNext, 6000);

    return () => {
      clearInterval(t);
    };
  }, [currentSlide]);

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev === slideshowData.length - 1 ? 0 : prev + 1
    );
  };
  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slideshowData.length - 1 : prev - 1
    );
  };

  return (
    <div
      ref={ref}
      className='flex justify-center items-end my-0.5 h-screen relative lg:pb-12'
    >
      <div className='overflow-x-hidden absolute inset-0'>
        <div className='flex w-min'>
          {slideshowData.map((item, index) => (
            <motion.div
              key={index}
              animate={{
                x: `${index - currentSlide * 101}vw`,
                transition: {
                  type: 'tween',
                  duration: 1,
                },
              }}
              className='w-screen h-screen'
            >
              <img
                src={item.image}
                alt={item.title}
                className='w-full h-full object-cover'
              />
            </motion.div>
          ))}
        </div>
      </div>
      <StickyBox
        controlledPagination
        currentPage={currentSlide + 1}
        pages={slideshowData.length}
        isDisplayed={isStickyBoxDisplayed}
        title={slideshowData[currentSlide].title}
        options={slideshowData[currentSlide].options}
        handleNext={handleNext}
        handlePrev={handlePrev}
        position='bottom'
      />
    </div>
  );
};

export default SlideshowImages;
