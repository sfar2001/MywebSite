import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { experience } from '../../data/experience';
import styles from './Experience.module.css';

const Experience = () => {
  const [ref, , hasIntersected] = useIntersectionObserver();

  const getTypeStyle = (type) => {
    switch (type) {
      case 'leadership': return { color: 'var(--accent-cyan)', bg: 'rgba(0, 240, 255, 0.08)', border: 'rgba(0, 240, 255, 0.15)' };
      case 'internship': return { color: 'var(--accent-purple)', bg: 'rgba(139, 92, 246, 0.08)', border: 'rgba(139, 92, 246, 0.15)' };
      case 'management': return { color: 'var(--accent-gold)', bg: 'rgba(251, 191, 36, 0.08)', border: 'rgba(251, 191, 36, 0.15)' };
      default: return { color: 'var(--text-muted)', bg: 'var(--card-bg)', border: 'var(--border-color)' };
    }
  };

  return (
    <section id="experience" className={styles.experience} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionLabel}>{'// Experience'}</span>
          <h2 className={styles.title}>
            Where I have
            <span className={styles.highlight}> made an impact</span>
          </h2>
        </motion.div>

        <div className={styles.timeline}>
          <div className={styles.timelineLine} />
          {experience.map((exp, index) => {
            const typeStyle = getTypeStyle(exp.type);
            return (
              <motion.div
                key={exp.id}
                className={styles.timelineItem}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className={styles.timelineDot}>
                  <div className={styles.dotInner} style={{ background: typeStyle.color }} />
                </div>

                <motion.div
                  className={styles.card}
                  whileHover={{ y: -4 }}
                >
                  <div className={styles.cardHeader}>
                    <div>
                      <h3 className={styles.role}>{exp.role}</h3>
                      <p className={styles.company}>{exp.company}</p>
                    </div>
                    <span
                      className={styles.typeBadge}
                      style={{ color: typeStyle.color, background: typeStyle.bg, borderColor: typeStyle.border }}
                    >
                      {exp.type}
                    </span>
                  </div>

                  <span className={styles.period}>{exp.period}</span>

                  <p className={styles.description}>{exp.description}</p>

                  {exp.achievements && exp.achievements.length > 0 && (
                    <ul className={styles.achievements}>
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  )}

                  <div className={styles.skillTags}>
                    {exp.skills.map((skill, idx) => (
                      <span key={idx} className={styles.skillTag}>{skill}</span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
