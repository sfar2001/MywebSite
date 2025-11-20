import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { experience } from '../../data/experience';
import styles from './Experience.module.css';

const Experience = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className={styles.experience} ref={ref}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
        </motion.h2>

        <motion.div
          className={styles.timeline}
          variants={containerVariants}
          initial="hidden"
          animate={hasIntersected ? "visible" : "hidden"}
        >
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={styles.timelineItem}
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 10 }}
            >
              <div className={styles.timelineMarker}>
                <div className={styles.markerDot} />
              </div>
              <div className={styles.timelineContent}>
                <div className={styles.header}>
                  <div>
                    <h3>{exp.role}</h3>
                    <p className={styles.company}>{exp.company}</p>
                    <p className={styles.period}>{exp.period}</p>
                  </div>
                  <span className={styles.typeBadge}>{exp.type}</span>
                </div>
                <p className={styles.description}>{exp.description}</p>
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className={styles.achievements}>
                    <h4>Achievements:</h4>
                    <ul>
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className={styles.skills}>
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className={styles.skillTag}>{skill}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;


