import { useState } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { personalInfo } from '../../data/personal';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => {
  const [ref, , hasIntersected] = useIntersectionObserver();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMailtoClick = () => {
    const email = personalInfo.social.email;
    const subject = formData.subject || 'Portfolio Contact';
    const name = encodeURIComponent(formData.name || '');
    const message = encodeURIComponent(formData.message || '');
    const body = `Name: ${name}%0D%0AMessage: ${message}`;
    globalThis.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  const socialLinks = [
    { icon: FaGithub, href: personalInfo.social.github, label: 'GitHub' },
    { icon: FaLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: FaEnvelope, href: `mailto:${personalInfo.social.email}`, label: 'Email' },
  ];

  return (
    <section id="contact" className={styles.contact} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionLabel}>{'// Get In Touch'}</span>
          <h2 className={styles.title}>
            {"Let's build something"}
            <span className={styles.highlight}> great together</span>
          </h2>
        </motion.div>

        <div className={styles.layout}>
          <motion.div
            className={styles.formSide}
            initial={{ opacity: 0, x: -30 }}
            animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name" className={styles.inputLabel}>Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={styles.input}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="email" className={styles.inputLabel}>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="subject" className={styles.inputLabel}>Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.inputLabel}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="5"
                  className={styles.textarea}
                />
              </div>

              <motion.button
                type="button"
                className={styles.submitBtn}
                onClick={handleMailtoClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPaperPlane />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className={styles.infoSide}
            initial={{ opacity: 0, x: 30 }}
            animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Contact Info</h3>

              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}><FaMapMarkerAlt /></div>
                  <div>
                    <span className={styles.infoLabel}>Location</span>
                    <span className={styles.infoValue}>{personalInfo.location}</span>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}><FaEnvelope /></div>
                  <div>
                    <span className={styles.infoLabel}>Email</span>
                    <a href={`mailto:${personalInfo.email}`} className={styles.infoValue}>{personalInfo.email}</a>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}><FaPhone /></div>
                  <div>
                    <span className={styles.infoLabel}>Phone</span>
                    <a href={`tel:${personalInfo.phone}`} className={styles.infoValue}>{personalInfo.phone}</a>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.socialCard}>
              <h3 className={styles.infoTitle}>Connect</h3>
              <div className={styles.socialLinks}>
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      whileHover={{ y: -3, borderColor: 'var(--accent-cyan)' }}
                      aria-label={link.label}
                    >
                      <Icon />
                      <span>{link.label}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <div className={styles.footerInner}>
          <span className={styles.footerText}>
            Designed & Built by <span className={styles.footerAccent}>Adam Sfar</span>
          </span>
          <span className={styles.footerYear}>&copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
