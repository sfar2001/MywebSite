import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { skills } from '../../data/skills';
import styles from './Skills.module.css';

const Skills = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();

  const skillCategories = [
    { title: 'Programming Languages', skills: skills.programming, key: 'programming' },
    { title: 'AI & Machine Learning', skills: skills.aiMl, key: 'aiMl' },
    { title: 'Cloud & DevOps', skills: skills.cloudDevOps, key: 'cloudDevOps' },
    { title: 'Quantum Computing', skills: skills.quantum, key: 'quantum' },
    { title: 'Web Technologies', skills: skills.web, key: 'web' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className={styles.skills} ref={ref}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          className={styles.categories}
          variants={containerVariants}
          initial="hidden"
          animate={hasIntersected ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.key}
              className={styles.categoryCard}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h3>{category.title}</h3>
              <div className={styles.skillsGrid}>
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className={styles.skillItem}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={hasIntersected ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: (categoryIndex * 0.1) + (index * 0.05) }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill.icon && <span className={styles.skillIcon}>{skill.icon}</span>}
                    <div className={styles.skillInfo}>
                      <span className={styles.skillName}>{skill.name}</span>
                      {skill.level && (
                        <div className={styles.skillBar}>
                          <motion.div
                            className={styles.skillFill}
                            initial={{ width: 0 }}
                            animate={hasIntersected ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1, delay: (categoryIndex * 0.1) + (index * 0.05) }}
                          />
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;


