import { useState, useLayoutEffect } from 'react';

export default function RealTimeDimensions() {
  const [windowSize, setWindowSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function changeSize() {
      setWindowSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', changeSize);
    changeSize();

    return () => window.removeEventListener('resize', changeSize);
  }, []);
  return windowSize;
}
