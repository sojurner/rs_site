import { useEffect, useState } from 'react';

export const lazyLoadEffect = (timer: number) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, timer);
  }, []);
  return mounted;
};
