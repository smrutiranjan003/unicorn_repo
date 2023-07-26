import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X as Close } from 'react-feather';

import data from '../data/newsflash';

const variants = {
  visible: {
    transition: {
      staggerChildren: 0.01,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.01,
    },
  },
};

const iconVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
};

const letterVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.01,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.01,
    },
  },
};

const Banner = ({ handleClose }) => {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const t = setInterval(async () => {
      setCurrentText((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => {
      clearInterval(t);
    };
  }, [currentText]);

  const handleNext = () => {
    setCurrentText((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const handlePrevious = () => {
    setCurrentText((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  return (
    <div className='w-full bg-black text-white h-11 flex justify-center lg:justify-between items-center px-5 xl:px-12 relative z-40'>
      <div />

      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={currentText}
          className='flex items-center gap-3 uppercase font-semibold text-xs'
          animate='visible'
          initial='hidden'
          exit='exit'
        >
          <motion.div variants={iconVariants}>
            <ChevronLeft
              size={18}
              className='cursor-pointer'
              onClick={handlePrevious}
            />
          </motion.div>
          <motion.div variants={variants} className='cursor-pointer truncate'>
            {data[currentText].split('').map((letter, index) => (
              <motion.span key={index} variants={letterVariants}>
                {letter}
              </motion.span>
            ))}
          </motion.div>
          <motion.div variants={iconVariants}>
            <ChevronRight
              size={18}
              className='cursor-pointer'
              onClick={handleNext}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <Close
        size={18}
        className='hidden lg:block cursor-pointer'
        onClick={handleClose}
      />
    </div>
  );
};

export default Banner;
