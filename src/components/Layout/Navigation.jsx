import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navigation.module.css';

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certs' },
    { id: 'quantum', label: 'Quantum' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <motion.nav
        className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className={styles.container}>
          <motion.div
            className={styles.logo}
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={styles.logoAccent}>A</span>dam
            <span className={styles.logoDot}>.</span>
          </motion.div>

          <div className={styles.navPill}>
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className={styles.activeIndicator}
                    layoutId="activeSection"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className={styles.controls}>
            <motion.button
              className={styles.themeToggle}
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={theme}
                  initial={{ y: -20, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 20, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'dark' ? <FaSun /> : <FaMoon />}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            <motion.button
              className={styles.mobileMenuToggle}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                className={`${styles.mobileLink} ${activeSection === item.id ? styles.mobileActive : ''}`}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <span className={styles.mobileLinkNumber}>0{index + 1}</span>
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
