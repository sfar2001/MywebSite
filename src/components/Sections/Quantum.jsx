import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import styles from './Quantum.module.css';

const Quantum = () => {
  const [ref, , hasIntersected] = useIntersectionObserver();

  const workshops = [
    {
      title: 'Introduction to Quantum Computing',
      location: 'Tunisia',
      description: 'Comprehensive workshop covering quantum basics, qubits, and quantum gates for beginners.',
      date: '2023',
    },
    {
      title: 'Quantum Machine Learning & QKNN',
      location: 'Germany',
      description: 'Advanced workshop on quantum algorithms and Quantum K-Nearest Neighbors development.',
      date: '2024',
    },
  ];

  const orbits = [0, 1, 2];

  return (
    <section id="quantum" className={styles.quantum} ref={ref}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.leftCol}>
            <motion.div
              className={styles.sectionHeader}
              initial={{ opacity: 0, y: 20 }}
              animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className={styles.sectionLabel}>{'// Quantum Computing'}</span>
              <h2 className={styles.title}>
                Exploring the
                <span className={styles.highlight}> quantum frontier</span>
              </h2>
              <p className={styles.subtitle}>
                Developing cutting-edge quantum algorithms and educating the next
                generation of quantum developers.
              </p>
            </motion.div>

            <div className={styles.workshopList}>
              {workshops.map((workshop, index) => (
                <motion.div
                  key={index}
                  className={styles.workshopCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className={styles.workshopTop}>
                    <h4 className={styles.workshopTitle}>{workshop.title}</h4>
                    <span className={styles.locationBadge}>{workshop.location}</span>
                  </div>
                  <span className={styles.workshopDate}>{workshop.date}</span>
                  <p className={styles.workshopDesc}>{workshop.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className={styles.progressSection}
              initial={{ opacity: 0, y: 20 }}
              animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className={styles.progressHeader}>
                <span className={styles.progressLabel}>QKNN Development</span>
                <span className={styles.progressValue}>80%</span>
              </div>
              <div className={styles.progressBar}>
                <motion.div
                  className={styles.progressFill}
                  initial={{ width: 0 }}
                  animate={hasIntersected ? { width: '80%' } : {}}
                  transition={{ duration: 1.5, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            className={styles.rightCol}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={hasIntersected ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className={styles.atomVisual}>
              <div className={styles.nucleus}>
                <span>Q</span>
              </div>
              {orbits.map((i) => (
                <motion.div
                  key={i}
                  className={styles.orbit}
                  style={{
                    width: `${160 + i * 60}px`,
                    height: `${160 + i * 60}px`,
                    borderColor: i === 0 ? 'var(--accent-cyan)' : i === 1 ? 'var(--accent-purple)' : 'var(--accent-magenta)',
                    opacity: 0.3 - i * 0.08,
                  }}
                  animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                  transition={{ duration: 15 + i * 5, repeat: Infinity, ease: 'linear' }}
                >
                  <div
                    className={styles.electron}
                    style={{
                      background: i === 0 ? 'var(--accent-cyan)' : i === 1 ? 'var(--accent-purple)' : 'var(--accent-magenta)',
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Quantum;
