import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import styles from './Quantum.module.css';

const Quantum = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();

  const workshops = [
    {
      title: "Introduction to Quantum Computing",
      location: "Tunisia",
      description: "Comprehensive workshop covering quantum basics, qubits, and quantum gates for beginners.",
      date: "2023"
    },
    {
      title: "Quantum Machine Learning & QKNN",
      location: "Germany",
      description: "Advanced workshop on quantum algorithms and Quantum K-Nearest Neighbors development.",
      date: "2024"
    }
  ];

  return (
    <section id="quantum" className={styles.quantum} ref={ref}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Quantum Computing Expertise
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={hasIntersected ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          Exploring the quantum realm and developing cutting-edge quantum algorithms
        </motion.p>

        <div className={styles.content}>
          <motion.div
            className={styles.workshops}
            initial={{ opacity: 0, x: -50 }}
            animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <h3>Workshops Conducted</h3>
            <div className={styles.workshopGrid}>
              {workshops.map((workshop, index) => (
                <motion.div
                  key={index}
                  className={styles.workshopCard}
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className={styles.workshopHeader}>
                    <h4>{workshop.title}</h4>
                    <span className={styles.location}>{workshop.location}</span>
                  </div>
                  <p className={styles.date}>{workshop.date}</p>
                  <p>{workshop.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={styles.qknn}
            initial={{ opacity: 0, x: 50 }}
            animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            <h3>QKNN Development</h3>
            <p>Working on developing and optimizing Quantum K-Nearest Neighbors algorithm for quantum machine learning applications.</p>
            <div className={styles.progressSection}>
              <div className={styles.progressInfo}>
                <span>Progress</span>
                <span>80%</span>
              </div>
              <div className={styles.progressBar}>
                <motion.div
                  className={styles.progressFill}
                  initial={{ width: 0 }}
                  animate={hasIntersected ? { width: '80%' } : {}}
                  transition={{ duration: 1.5, delay: 0.7 }}
                />
              </div>
            </div>
            <div className={styles.quantumVisual}>
              <motion.div
                className={styles.quantumCircle}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <span>QKNN</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Quantum;


