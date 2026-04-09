import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { projects, projectCategories } from '../../data/projects';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import styles from './Projects.module.css';

const Projects = () => {
  const [ref, , hasIntersected] = useIntersectionObserver();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'var(--accent-green)';
      case 'in-progress': return 'var(--accent-gold)';
      case 'live': return 'var(--accent-cyan)';
      default: return 'var(--text-muted)';
    }
  };

  return (
    <section id="projects" className={styles.projects} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionLabel}>{'// Featured Projects'}</span>
          <h2 className={styles.title}>
            Selected work that
            <span className={styles.highlight}> I am proud of</span>
          </h2>
        </motion.div>

        <motion.div
          className={styles.filters}
          initial={{ opacity: 0, y: 15 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {projectCategories.map((category) => (
            <button
              key={category.id}
              className={`${styles.filterBtn} ${selectedCategory === category.id ? styles.filterActive : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + currentPage}
            className={styles.grid}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {paginatedProjects.map((project, index) => (
              <motion.article
                key={project.id}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className={styles.cardTop}>
                  <div className={styles.cardMeta}>
                    <span
                      className={styles.statusDot}
                      style={{ background: getStatusColor(project.status) }}
                    />
                    <span className={styles.statusLabel}>{project.status}</span>
                    {project.featured && (
                      <span className={styles.featuredTag}>
                        <FaStar /> Featured
                      </span>
                    )}
                  </div>
                  <div className={styles.cardLinks}>
                    {project.githubLink && project.githubLink !== 'False' && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.cardLink}
                        aria-label="GitHub"
                      >
                        <FaGithub />
                      </a>
                    )}
                    {project.demoLink && project.demoLink !== 'False' && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.cardLink}
                        aria-label="Demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>

                {project.highlights && (
                  <ul className={styles.highlights}>
                    {project.highlights.slice(0, 3).map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                )}

                <div className={styles.techStack}>
                  {project.technologies.map((tech) => (
                    <span key={`${project.id}-${tech}`} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length > itemsPerPage && (
          <div className={styles.pagination}>
            <button
              className={styles.pageBtn}
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <div className={styles.pageIndicators}>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  className={`${styles.pageDot} ${currentPage === i + 1 ? styles.pageDotActive : ''}`}
                  onClick={() => setCurrentPage(i + 1)}
                />
              ))}
            </div>
            <button
              className={styles.pageBtn}
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
