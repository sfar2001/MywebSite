import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { skills } from '../../data/skills';
import styles from './Skills.module.css';

const Skills = () => {
  const [ref, , hasIntersected] = useIntersectionObserver();
  const [activeCategory, setActiveCategory] = useState('programming');

  const skillCategories = [
    { title: 'Languages', skills: skills.programming, key: 'programming', icon: '{ }' },
    { title: 'AI / ML', skills: skills.aiMl, key: 'aiMl', icon: 'AI' },
    { title: 'Cloud & DevOps', skills: skills.cloudDevOps, key: 'cloudDevOps', icon: '<>' },
    { title: 'Quantum', skills: skills.quantum, key: 'quantum', icon: 'Q+' },
    { title: 'Web Tech', skills: skills.web, key: 'web', icon: '//' },
  ];

  const activeSkills = skillCategories.find((c) => c.key === activeCategory)?.skills || [];

  return (
    <section id="skills" className={styles.skills} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionLabel}>{'// Skills & Technologies'}</span>
          <h2 className={styles.title}>
            Tools I use to bring
            <span className={styles.highlight}> ideas to life</span>
          </h2>
        </motion.div>

        <div className={styles.layout}>
          <motion.div
            className={styles.categoryTabs}
            initial={{ opacity: 0, x: -30 }}
            animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {skillCategories.map((category) => (
              <motion.button
                key={category.key}
                className={`${styles.tab} ${activeCategory === category.key ? styles.tabActive : ''}`}
                onClick={() => setActiveCategory(category.key)}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className={styles.tabIcon}>{category.icon}</span>
                <span className={styles.tabLabel}>{category.title}</span>
                <span className={styles.tabCount}>{category.skills.length}</span>
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            className={styles.skillsDisplay}
            initial={{ opacity: 0, x: 30 }}
            animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                className={styles.skillsGrid}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                {activeSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className={styles.skillCard}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -4, borderColor: 'var(--accent-cyan)' }}
                  >
                    {skill.icon && <span className={styles.skillEmoji}>{skill.icon}</span>}
                    <div className={styles.skillInfo}>
                      <span className={styles.skillName}>{skill.name}</span>
                      {skill.level && (
                        <div className={styles.skillBarWrap}>
                          <motion.div
                            className={styles.skillBar}
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.8, delay: index * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
                          />
                        </div>
                      )}
                    </div>
                    {skill.level && (
                      <span className={styles.skillPercent}>{skill.level}%</span>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
