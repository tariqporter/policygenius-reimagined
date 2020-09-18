import { useState, useLayoutEffect, useEffect } from 'react';
import throttle from 'lodash/throttle';

const useIsVisible = (r) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState(r);
  useEffect(() => {
    setRef(r);
  }, [r]);

  useLayoutEffect(() => {
    const onScroll = (e) => {
      const windowBottom = window.innerHeight || document.documentElement.clientHeight;
      const rect = ref.current.getBoundingClientRect();
      setIsVisible(rect.top + 200 <= windowBottom && rect.bottom >= 0);
    };
    onScroll();
    const debouncedOnScroll = throttle(onScroll, 250);
    window.addEventListener('scroll', debouncedOnScroll);
    return () => window.removeEventListener('scroll', debouncedOnScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isVisible;
};

export default useIsVisible;
