import { useState, useLayoutEffect, useEffect } from 'react';

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
      setIsVisible(rect.top <= windowBottom && rect.bottom >= 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isVisible;
};

export default useIsVisible;
