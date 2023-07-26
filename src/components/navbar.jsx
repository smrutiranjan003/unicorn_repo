import React, { useState } from 'react';
import {
  AnimatePresence,
  AnimateSharedLayout,
  motion,
  useAnimation,
} from 'framer-motion';

import Badge from './badge';
import Text from './text';

import data from '../data/header';

const variants = {
  hidden: {
    y: '-41.5rem',
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

const Navbar = () => {
  const controls = useAnimation();
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <AnimateSharedLayout>
      <motion.nav
        onHoverStart={() => controls.start('visible')}
        onHoverEnd={() => controls.start('hidden')}
        className='h-20 mx-8'
      >
        <ul className='flex h-full w-max uppercase font-semibold text-xs xl:text-sm relative z-50'>
          {data.map((item) => (
            <li
              key={item.id}
              className='flex items-end px-2 xl:px-4 pb-6 h-full cursor-pointer'
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className='relative'>
                {item.title}
                {hoveredItem === item.id && (
                  <motion.div
                    layoutId='underline'
                    className='w-full h-0.5 bg-black absolute bottom-0 -mb-0.5'
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      </motion.nav>

      <AnimatePresence exitBeforeEnter>
        {hoveredItem !== null && data[hoveredItem - 1].category && (
          <motion.div
            animate='visible'
            initial='hidden'
            exit='hidden'
            variants={variants}
            className='absolute bg-white w-full h-nav-popover top-0 left-0 px-7 xl:px-10 pt-28'
            onMouseEnter={() => setHoveredItem(hoveredItem)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <motion.div key={hoveredItem} variants={childrenVariants}>
              <Text bold link>
                {data[hoveredItem - 1].category}
              </Text>
              {data[hoveredItem - 1].links.map((link, index) => {
                const texts = link.split('|');
                return (
                  <Text key={index} link>
                    {texts[0]}
                    {texts.length > 1 && <Badge text={texts[1]} />}
                  </Text>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export default Navbar;
