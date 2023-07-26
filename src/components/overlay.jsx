import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Overlay = ({ visible, handleClickOverlay }) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          animate='visible'
          initial='hidden'
          exit='hidden'
          variants={variants}
          className='fixed inset-0 bg-opacity-50 bg-black z-40'
          onTap={handleClickOverlay}
        />
      )}
    </AnimatePresence>
  );
};

export default Overlay;
