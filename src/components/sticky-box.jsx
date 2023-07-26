import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'react-feather';

const variants = {
  hidden: {
    y: 192,
    transition: {
      type: 'tween',
      duration: 0.2,
    },
  },
  visible: {
    y: 0,
    transition: {
      type: 'tween',
      duration: 0.2,
    },
  },
};

const loadingVariants = {
  loading: {
    x: ['-24rem', '0rem'],
    transition: {
      ease: 'linear',
      type: 'tween',
      duration: 5,
      delay: 1,
    },
  },
};

const mobileLoadingVariants = {
  loading: {
    x: ['-100vw', '0vw'],
    transition: {
      ease: 'linear',
      type: 'tween',
      duration: 5,
      delay: 1,
    },
  },
};

const StickyBox = ({
  position,
  currentPage,
  pages,
  title,
  options,
  isDisplayed,
  handleNext,
  handlePrev,
  controlledPagination,
}) => {
  const controls = useAnimation();
  const loadingControls = useAnimation();
  const mobileLoadingControls = useAnimation();

  useEffect(() => {
    if (isDisplayed) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isDisplayed]);

  useEffect(() => {
    loadingControls.start('loading');
    mobileLoadingControls.start('loading');
  }, [loadingControls, mobileLoadingControls, currentPage]);

  return (
    <motion.div
      className={`sticky bottom-0 ${
        position === 'bottom' ? 'lg:bottom-12' : 'lg:bottom-1/2'
      }  w-full lg:w-96 font-semibold z-10 flex-shrink-0`}
      animate={controls}
      initial='hidden'
      variants={variants}
    >
      {controlledPagination && (
        <div className='flex justify-between lg:justify-center items-center gap-9 p-5 lg:p-6 text-white'>
          <ChevronLeft
            size={18}
            className='cursor-pointer'
            onClick={handlePrev}
          />
          <div className='text-sm text-center'>{`${currentPage} | ${pages}`}</div>
          <ChevronRight
            size={18}
            className='cursor-pointer'
            onClick={handleNext}
          />
        </div>
      )}

      <div className='flex flex-col justify-center h-24 uppercase bg-white relative overflow-x-hidden'>
        {controlledPagination && (
          <>
            <motion.div
              animate={loadingControls}
              variants={loadingVariants}
              className='hidden lg:block h-0.5 w-full absolute top-0 bg-black'
            />
            <motion.div
              animate={mobileLoadingControls}
              variants={mobileLoadingVariants}
              className='block lg:hidden h-0.5 w-full absolute top-0 bg-black'
            />
          </>
        )}
        <h5 className='text-xs text-center cursor-pointer'>{title}</h5>
        <ul className='mt-2 flex gap-5 justify-center'>
          {options.map((option, index) => (
            <li key={index} className='cursor-pointer'>
              {option}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default StickyBox;
