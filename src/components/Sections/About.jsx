import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { education } from '../../data/education';
import { languages } from '../../data/skills';
import { personalInfo } from '../../data/personal';
import { FaDownload } from 'react-icons/fa';
import styles from './About.module.css';
import resumePdf from './../../assets/Pro_CV_Adam.pdf';

const About = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();

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
    <section id="about" className={styles.about} ref={ref}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate={hasIntersected ? "visible" : "hidden"}
        >
          <motion.div className={styles.educationCard} variants={itemVariants}>
            <h3>Education & Certifications</h3>
            <div className={styles.timeline}>
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  className={styles.timelineItem}
                  initial={{ opacity: 0, x: -30 }}
                  animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className={styles.timelineIcon}>{edu.icon}</div>
                  <div className={styles.timelineContent}>
                    <h4>{edu.degree}</h4>
                    <p className={styles.institution}>{edu.institution}, {edu.location}</p>
                    <p className={styles.period}>{edu.period}</p>
                    <p className={styles.description}>{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className={styles.rightColumn}>
            <motion.div className={styles.bioCard} variants={itemVariants}>
              <h3>Biography</h3>
              <p>{personalInfo.bio}</p>
              <div className={styles.contactInfo}>
                <p><strong>Location:</strong> {personalInfo.location}</p>
                <p><strong>Email:</strong> {personalInfo.email}</p>
                <p><strong>Phone:</strong> {personalInfo.phone}</p>
              </div>
              <motion.a
              
                href={resumePdf}
                download
                className={styles.downloadButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload /> Download CV
              </motion.a>
            </motion.div>

            <motion.div className={styles.languagesCard} variants={itemVariants}>
              <h3>Languages</h3>
              <div className={styles.languages}>
                {languages.map((lang, index) => (
                  <motion.div
                    key={index}
                    className={styles.languageItem}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={hasIntersected ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={styles.languageHeader}>
                      <span className={styles.languageName}>{lang.name}</span>
                      <span className={styles.proficiency}>{lang.proficiency}</span>
                    </div>
                    <div className={styles.progressBar}>
                      <motion.div
                        className={styles.progressFill}
                        initial={{ width: 0 }}
                        animate={hasIntersected ? { width: `${lang.level}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

