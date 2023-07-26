import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'react-feather';
import { motion, useAnimation } from 'framer-motion';

import Badge from './badge';
import Text from './text';

const variants = {
  unrotated: {
    rotate: 0,
    transition: {
      type: 'tween',
    },
  },
  rotated: {
    rotate: 180,
    transition: {
      type: 'tween',
    },
  },
};

const AccordionItem = ({ item, isItemOpen, handleClick }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isItemOpen) {
      controls.start('rotated');
    } else {
      controls.start('unrotated');
    }
  }, [controls, isItemOpen]);

  return (
    <>
      <div
        onClick={() => {
          handleClick(item.id);
        }}
      >
        <Text bold link>
          {item.title}
          {item.links.length > 0 && (
            <motion.div animate={controls} variants={variants}>
              <ChevronDown size={16} />
            </motion.div>
          )}
        </Text>
      </div>
      {isItemOpen &&
        item.links.map((link, index) => {
          const texts = link.split('|');
          return (
            <Text key={index} link>
              {texts[0]}
              {texts.length > 1 && <Badge text={texts[1]} />}
            </Text>
          );
        })}
    </>
  );
};

const Accordion = ({ data }) => {
  const [openItems, setOpenItems] = useState(Array(data.length).fill(false));

  const handleClick = (id) => {
    let updated = [...openItems];
    updated.fill(false);
    updated[id] = !openItems[id];
    setOpenItems(updated);
  };

  return (
    <>
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isItemOpen={openItems[item.id]}
          handleClick={handleClick}
        />
      ))}
    </>
  );
};

export default Accordion;
