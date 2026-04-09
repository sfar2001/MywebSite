import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { education } from '../../data/education';
import { languages } from '../../data/skills';
import { personalInfo } from '../../data/personal';
import { FaDownload, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';
import styles from './About.module.css';
import resumePdf from './../../assets/Pro_CV_Adam.pdf';

const About = () => {
  const [ref, , hasIntersected] = useIntersectionObserver();

  const stats = [
    { number: '7+', label: 'Projects Built' },
    { number: '5', label: 'Certifications' },
    { number: '3', label: 'Languages' },
    { number: '2+', label: 'Years Exp' },
  ];

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionLabel}>// About Me</span>
          <h2 className={styles.title}>
            Crafting digital experiences with
            <span className={styles.highlight}> passion & precision</span>
          </h2>
        </motion.div>

        <div className={styles.bentoGrid}>
          {/* Bio Card - Large */}
          <motion.div
            className={`${styles.card} ${styles.bioCard}`}
            initial={{ opacity: 0, y: 30 }}
            animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className={styles.bioText}>{personalInfo.bio}</p>
            <div className={styles.locationRow}>
              <FaMapMarkerAlt className={styles.locationIcon} />
              <span>{personalInfo.location}</span>
            </div>
            <motion.a
              href={resumePdf}
              download
              className={styles.downloadBtn}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaDownload /> Download CV
            </motion.a>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            className={`${styles.card} ${styles.statsCard}`}
            initial={{ opacity: 0, y: 30 }}
            animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.statsGrid}>
              {stats.map((stat, i) => (
                <div key={i} className={styles.statItem}>
                  <span className={styles.statNumber}>{stat.number}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            className={`${styles.card} ${styles.educationCard}`}
            initial={{ opacity: 0, y: 30 }}
            animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className={styles.cardLabel}>
              <FaGraduationCap />
              <span>Education</span>
            </div>
            <div className={styles.timeline}>
              {education
                .filter((edu) => edu.type === 'degree')
                .map((edu) => (
                  <div key={edu.id} className={styles.timelineItem}>
                    <span className={styles.timelineIcon}>{edu.icon}</span>
                    <div>
                      <h4 className={styles.timelineDegree}>{edu.degree}</h4>
                      <p className={styles.timelineInstitution}>
                        {edu.institution}, {edu.location}
                      </p>
                      <p className={styles.timelinePeriod}>{edu.period}</p>
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>

          {/* Languages Card */}
          <motion.div
            className={`${styles.card} ${styles.languagesCard}`}
            initial={{ opacity: 0, y: 30 }}
            animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.cardLabel}>
              <span>Languages</span>
            </div>
            <div className={styles.langList}>
              {languages.map((lang, i) => (
                <div key={i} className={styles.langItem}>
                  <div className={styles.langHeader}>
                    <span className={styles.langName}>{lang.name}</span>
                    <span className={styles.langLevel}>{lang.level}%</span>
                  </div>
                  <div className={styles.langBar}>
                    <motion.div
                      className={styles.langFill}
                      initial={{ width: 0 }}
                      animate={hasIntersected ? { width: `${lang.level}%` } : {}}
                      transition={{ duration: 1.2, delay: 0.5 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
