import { useState } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { personalInfo } from '../../data/personal';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleMailtoClick = () => {
    const email = personalInfo.social.email;
    const subject = formData.subject || 'Portfolio Contact';
    const name = encodeURIComponent(formData.name || '');
    const message = encodeURIComponent(formData.message || '');
    const body = `Name: ${name}%0D%0ACompany: %0D%0AMessage: ${message}%0D%0A%0D%0APlease write your message above...`;
    globalThis.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  const socialLinks = [
    { icon: FaGithub, href: personalInfo.social.github, label: 'GitHub' },
    { icon: FaLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: FaEnvelope, href: `mailto:${personalInfo.social.email}`, label: 'Email' }
  ];

  return (
    <section id="contact" className={styles.contact} ref={ref}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={hasIntersected ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          Let's connect and discuss opportunities
        </motion.p>

        <div className={styles.content}>
          <div className={styles.formContainer}>
            <motion.form
              className={styles.form}
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -50 }}
              animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <div className={styles.formGroup}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                  required
                />
                <label htmlFor="name">Name</label>
              </div>

              <div className={styles.formGroup}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  required
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className={styles.formGroup}>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder=" "
                  required
                />
                <label htmlFor="subject">Subject</label>
              </div>

              <div className={styles.formGroup}>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  rows="6"
                  required
                ></textarea>
                <label htmlFor="message">Message</label>
              </div>

            </motion.form>

            <motion.a 
              href={`mailto:${personalInfo.social.email}?subject=Portfolio Contact&body=Name: %0D%0ACompany: %0D%0AMessage: %0D%0A%0D%0APlease write your message above...`}
              className={styles.contactLink}
              onClick={(e) => {
                e.preventDefault();
                handleMailtoClick();
              }}
              initial={{ opacity: 0, x: -50 }}
              animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>

          <motion.div
            className={styles.sidebar}
            initial={{ opacity: 0, x: 50 }}
            animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <div className={styles.contactInfo}>
              <h3>Contact Information</h3>
              <div className={styles.infoItem}>
                <FaMapMarkerAlt />
                <span>{personalInfo.location}</span>
              </div>
              <div className={styles.infoItem}>
                <FaEnvelope />
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
              <div className={styles.infoItem}>
                <FaPhone />
                <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
              </div>
            </div>

            <div className={styles.social}>
              <h3>Connect with me</h3>
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
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={link.label}
                    >
                      <Icon />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


