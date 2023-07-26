import React, { useEffect, useRef } from 'react';
import { Search, X as Close } from 'react-feather';

const Modal = ({ isOpen, handleClose }) => {
  const searchInput = useRef(null);

  useEffect(() => {
    if (isOpen) {
      searchInput.current.focus();
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      {isOpen ? (
        <div className='absolute inset-0 bg-white z-50 p-5'>
          <div className='relative py-10'>
            <Close
              className='absolute top-0 right-0 cursor-pointer'
              onClick={handleClose}
            />
            <div className='relative'>
              <input
                ref={searchInput}
                type='text'
                placeholder='Search'
                className='text-sm border-b rounded-none border-black w-full pb-3 pl-8 focus:outline-none bg-transparent'
              />
              <Search className='w-5 h-5 absolute top-1 left-0 cursor-pointer' />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
