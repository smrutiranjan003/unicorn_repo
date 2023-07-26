import React from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { ShoppingBag } from 'react-feather';

const variants = {
  hidden: {
    y: '-10rem',
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

const ShoppingBagPopover = () => {
  const controls = useAnimation();

  return (
    <>
      <div
        onMouseEnter={() => controls.start('visible')}
        onMouseLeave={() => controls.start('hidden')}
        className='cursor-pointer w-max'
      >
        <ShoppingBag className='w-5 h-5 lg:w-6 lg:h-6 relative z-50' />
      </div>

      <AnimatePresence>
        <motion.div
          animate={controls}
          initial='hidden'
          variants={variants}
          className='absolute bg-white w-96 h-40 right-0 top-0 flex items-end px-10 py-8'
        >
          <motion.div variants={childrenVariants}>
            <div className='font-semibold text-xs'>Your bag is empty</div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default ShoppingBagPopover;
