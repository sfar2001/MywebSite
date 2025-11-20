import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { education } from '../../data/education';
import { FaCertificate, FaAward, FaGraduationCap } from 'react-icons/fa';
import styles from './Certifications.module.css';

const Certifications = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();

  // Filter certifications from education data
  const certifications = education.filter(edu => edu.type === 'certification');

  const getIcon = (type) => {
    switch (type) {
      case 'certification':
        return <FaCertificate />;
      case 'degree':
        return <FaGraduationCap />;
      default:
        return <FaAward />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handleViewCertificate = (pdfPath, degree) => {
    if (!pdfPath) return;

    const downloadLink = document.createElement('a');
    downloadLink.href = pdfPath;
    downloadLink.download = `${degree?.toLowerCase().replace(/\s+/g, '-') || 'certificate'}.pdf`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <section id="certifications" className={styles.certifications} ref={ref}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Certifications & Credentials
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={hasIntersected ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          Professional certifications and credentials demonstrating continuous learning and expertise
        </motion.p>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={hasIntersected ? "visible" : "hidden"}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className={styles.card}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <div className={styles.cardHeader}>
                <motion.div
                  className={styles.iconContainer}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {getIcon(cert.type)}
                </motion.div>
                <div className={styles.badge}>
                  <span className={styles.badgeText}>Verified</span>
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3>{cert.degree}</h3>
                <div className={styles.institution}>
                  <span className={styles.institutionName}>{cert.institution}</span>
                  <span className={styles.location}>{cert.location}</span>
                </div>
                <div className={styles.period}>{cert.period}</div>
                <p className={styles.description}>{cert.description}</p>
                
                <div className={styles.skills}>
                  <span className={styles.skillsLabel}>Skills Acquired:</span>
                  <div className={styles.skillTags}>
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className={styles.skillTag}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <motion.button
                  className={styles.viewButton}
                  type="button"
                  disabled={!cert.certificatePDF}
                  onClick={() => handleViewCertificate(cert.certificatePDF, cert.degree)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Certificate
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;

