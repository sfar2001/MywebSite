import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { personalInfo } from '../../data/personal';
import TypeWriter from '../UI/TypeWriter';
import AnimatedBackground from '../UI/AnimatedBackground';
import styles from './Hero.module.css';
import profilePic from './../../assets/profile_pic.jpg';
import resumePdf from './../../assets/Pro_CV_Adam.pdf';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: FaGithub, href: personalInfo.social.github, label: 'GitHub' },
    { icon: FaLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: FaEnvelope, href: `mailto:${personalInfo.social.email}`, label: 'Email' },
  ];

  return (
    <section id="hero" className={styles.hero}>
      <AnimatedBackground />

      <div className={styles.container}>
        <div className={styles.leftCol}>
          <motion.div
            className={styles.labelRow}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className={styles.statusDot} />
            <span className={styles.statusText}>Available for opportunities</span>
          </motion.div>

          <div className={styles.nameBlock}>
            <motion.h1
              className={styles.firstName}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Adam
            </motion.h1>
            <motion.h1
              className={styles.lastName}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Sfar<span className={styles.accent}>.</span>
            </motion.h1>
          </div>

          <motion.div
            className={styles.tagline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <TypeWriter
              texts={[
                'Engineering Student | AI & Quantum Computing',
                'Software Developer | AI & DevOps Enthusiast',
                'Vice-Chairman @ IEEE Computer Society',
              ]}
              speed={80}
              deleteSpeed={40}
              delay={2500}
            />
          </motion.div>

          <motion.p
            className={styles.bio}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <motion.button
              className={styles.primaryBtn}
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              View My Work
              <span className={styles.btnArrow}>&rarr;</span>
            </motion.button>
            <motion.a
              href={resumePdf}
              download
              className={styles.secondaryBtn}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Download CV
            </motion.a>
          </motion.div>

          <motion.div
            className={styles.socialRow}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  whileHover={{ y: -3, color: 'var(--accent-cyan)' }}
                  aria-label={link.label}
                >
                  <Icon />
                </motion.a>
              );
            })}
            <span className={styles.socialDivider} />
            <span className={styles.socialLabel}>Follow me</span>
          </motion.div>
        </div>

        <motion.div
          className={styles.rightCol}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className={styles.imageWrapper}>
            <div className={styles.imageFrame}>
              <img
                src={profilePic}
                alt="Portrait of Adam Sfar"
                className={styles.portrait}
              />
            </div>
            <motion.div
              className={styles.orbitRing}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className={styles.orbitRing2}
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <div className={styles.floatingBadge}>
              <span className={styles.badgeIcon}>&#9889;</span>
              <span>5+ Certifications</span>
            </div>
            <div className={styles.floatingBadge2}>
              <span className={styles.badgeIcon}>&#128187;</span>
              <span>7+ Projects</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollCta}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.button
          className={styles.scrollBtn}
          onClick={() => scrollToSection('about')}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaArrowDown />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
