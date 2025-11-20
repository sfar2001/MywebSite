import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { personalInfo } from '../../data/personal';
import TypeWriter from '../UI/TypeWriter';
import ParticleEffect from '../UI/ParticleEffect';
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
    { icon: FaEnvelope, href: `mailto:${personalInfo.social.email}`, label: 'Email' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      <AnimatedBackground />
      <ParticleEffect count={50} />
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className={styles.avatarContainer}
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className={styles.avatar}>
              <img src={profilePic} alt="Portrait of Adam Sfar" className={styles.avatarImage} />
            </div>
            <motion.div
              className={styles.avatarRing}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          <motion.h1 className={styles.name} variants={itemVariants}>
            {personalInfo.name}
          </motion.h1>

          <motion.div className={styles.tagline} variants={itemVariants}>
            <TypeWriter
              texts={[
                "Engineering Student | AI & Quantum Computing",
                "Software Developer | AI & DevOps Enthusiast",
                "Vice-Chairman @ IEEE Computer Society"
              ]}
              speed={100}
              deleteSpeed={50}
              delay={2000}
            />
          </motion.div>

          <motion.p className={styles.bio} variants={itemVariants}>
            {personalInfo.bio}
          </motion.p>

          <motion.div className={styles.buttons} variants={itemVariants}>
            <motion.button
              className={styles.primaryButton}
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.button>
            <motion.a
              href={resumePdf}
              download
              className={styles.secondaryButton}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload /> Download CV
            </motion.a>
          </motion.div>

          <motion.div className={styles.socialLinks} variants={itemVariants}>
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  aria-label={link.label}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.scrollIndicator}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className={styles.mouse}>
            <div className={styles.wheel}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;


