import { useState, useEffect, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });
  const trailX = useSpring(0, { stiffness: 150, damping: 20 });
  const trailY = useSpring(0, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window;
    if (isTouchDevice) {
      setIsHidden(true);
      return;
    }

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.dataset.cursor === 'pointer'
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => setIsHovering(false);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [cursorX, cursorY, trailX, trailY]);

  if (isHidden) return null;

  return (
    <>
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovering ? '48px' : '8px',
          height: isHovering ? '48px' : '8px',
          borderRadius: '50%',
          background: isHovering ? 'transparent' : 'var(--accent-cyan)',
          border: isHovering ? '2px solid var(--accent-cyan)' : 'none',
          pointerEvents: 'none',
          zIndex: 10000,
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          mixBlendMode: 'difference',
          transition: 'width 0.3s, height 0.3s, background 0.3s, border 0.3s',
        }}
      />
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '1px solid rgba(0, 240, 255, 0.2)',
          pointerEvents: 'none',
          zIndex: 9999,
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isHovering ? 0 : 0.5,
          transition: 'opacity 0.3s',
        }}
      />
    </>
  );
};

export default CustomCursor;
