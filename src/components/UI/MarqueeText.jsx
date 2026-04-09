import { motion } from 'framer-motion';
import styles from './MarqueeText.module.css';

const MarqueeText = ({ items, speed = 30 }) => {
  const duplicated = [...items, ...items, ...items];

  return (
    <div className={styles.marquee}>
      <motion.div
        className={styles.track}
        animate={{ x: ['0%', '-33.333%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
      >
        {duplicated.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.separator}>*</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeText;
