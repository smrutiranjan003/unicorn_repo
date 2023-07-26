import { useEffect, useState } from 'react';

const useDisplaySticky = (entry, inView) => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsDisplayed(true);
    } else {
      if (entry && entry.boundingClientRect.top > 0) {
        setIsDisplayed(false);
      }
    }
  }, [entry, inView]);

  return isDisplayed;
};

export default useDisplaySticky;
