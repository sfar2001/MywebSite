import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { education } from '../../data/education';
import { FaCertificate, FaDownload, FaCheckCircle } from 'react-icons/fa';
import styles from './Certifications.module.css';

const Certifications = () => {
  const [ref, , hasIntersected] = useIntersectionObserver();

  const certifications = education.filter((edu) => edu.type === 'certification');

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
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionLabel}>{'// Certifications'}</span>
          <h2 className={styles.title}>
            Credentials that
            <span className={styles.highlight}> validate expertise</span>
          </h2>
        </motion.div>

        <div className={styles.grid}>
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className={styles.cardIcon}>
                <FaCertificate />
              </div>

              <div className={styles.verifiedBadge}>
                <FaCheckCircle />
                <span>Verified</span>
              </div>

              <h3 className={styles.certName}>{cert.degree}</h3>

              <div className={styles.certMeta}>
                <span className={styles.institution}>{cert.institution}</span>
                <span className={styles.separator}>|</span>
                <span className={styles.period}>{cert.period}</span>
              </div>

              <p className={styles.certDesc}>{cert.description}</p>

              <div className={styles.skillTags}>
                {cert.skills.slice(0, 4).map((skill, idx) => (
                  <span key={idx} className={styles.skillTag}>{skill}</span>
                ))}
                {cert.skills.length > 4 && (
                  <span className={styles.skillTag}>+{cert.skills.length - 4}</span>
                )}
              </div>

              <motion.button
                className={styles.downloadBtn}
                disabled={!cert.certificatePDF}
                onClick={() => handleViewCertificate(cert.certificatePDF, cert.degree)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaDownload />
                View Certificate
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
