import React, { useRef, useState } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { ArrowRight, Search } from 'react-feather';

const variants = {
  hidden: {
    y: '-29.5rem',
    transition: {
      type: 'tween',
      when: 'afterChildren',
      duration: 0.2,
    },
  },
  visible: {
    y: 0,
    transition: {
      type: 'tween',
      when: 'beforeChildren',
      duration: 0.2,
    },
  },
};

const childrenVariants = {
  hidden: {
    opacity: 0,
    y: 10,
    transition: {
      type: 'tween',
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
    },
  },
};

const SearchPopover = () => {
  const controls = useAnimation();
  const searchInput = useRef(null);
  const [value, setValue] = useState('');

  return (
    <>
      <div
        onMouseEnter={() => {
          controls.start('visible');
          searchInput.current.focus();
        }}
        onMouseLeave={() => {
          controls.start('hidden');
          setValue('');
        }}
        className='cursor-pointer w-max'
      >
        <Search className='w-5 h-5 lg:w-6 lg:h-6 relative z-50' />
      </div>

      <AnimatePresence>
        <motion.div
          animate={controls}
          initial='hidden'
          variants={variants}
          className='absolute bg-white w-full h-search-popover top-0 left-0 px-10 pt-32'
        >
          <motion.div variants={childrenVariants} className='relative'>
            <input
              ref={searchInput}
              type='text'
              placeholder='Search'
              value={value}
              className='text-lg border-b rounded-none border-black w-full pb-4 focus:outline-none bg-transparent'
              onChange={(e) => setValue(e.target.value)}
            />
            {value && (
              <ArrowRight
                size={18}
                className='mb-4 absolute bottom-0 right-0 cursor-pointer z-20'
              />
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default SearchPopover;
