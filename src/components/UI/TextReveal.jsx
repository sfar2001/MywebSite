import { motion } from 'framer-motion';

const TextReveal = ({ children, delay = 0, className = '', as = 'div' }) => {
  const Tag = motion[as] || motion.div;

  return (
    <div style={{ overflow: 'hidden' }}>
      <Tag
        className={className}
        initial={{ y: '110%', opacity: 0 }}
        whileInView={{ y: '0%', opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {children}
      </Tag>
    </div>
  );
};

export default TextReveal;
