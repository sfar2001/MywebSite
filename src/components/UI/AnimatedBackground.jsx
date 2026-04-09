import { motion } from 'framer-motion';
import styles from './AnimatedBackground.module.css';

const AnimatedBackground = () => {
  return (
    <div className={styles.background}>
      <motion.div
        className={styles.orb1}
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -100, 60, 0],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={styles.orb2}
        animate={{
          x: [0, -150, 100, 0],
          y: [0, 80, -120, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={styles.orb3}
        animate={{
          x: [0, 60, -100, 0],
          y: [0, 150, -60, 0],
          scale: [1, 1.1, 0.85, 1],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className={styles.gridLines} />
    </div>
  );
};

export default AnimatedBackground;
