import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypeWriter = ({ texts, speed = 100, deleteSpeed = 50, delay = 2000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = texts[currentTextIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < current.length) {
        setCurrentText(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (!isDeleting && charIndex === current.length) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentTextIndex, texts, speed, deleteSpeed, delay]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="typewriter-text"
    >
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="cursor"
      >
        |
      </motion.span>
    </motion.span>
  );
};

export default TypeWriter;


