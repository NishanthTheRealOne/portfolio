import React, { useEffect, useRef } from 'react';
import styles from './ModalProjectDetails.module.css';

function ModalProjectDetails({ isOpen, onClose, title, description, image, link, technologies, skills }) {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div ref={modalRef} className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button
            onClick={onClose}
            className={styles.closeButton}
          >
            ✕
          </button>
        </div>
        <div className={styles.content}>
          {image && (
            <img
              src={image}
              alt={title}
              className={styles.image}
            />
          )}
          <p className={styles.description}>{description}</p>
          <p className={styles.technologies}>Compétences développées : </p>
          <div className={styles.technologies}>
            {skills?.map((skill, index) => (
              <span key={index} className={styles.tech}>
                {skill}
              </span>
            ))}
          </div>
          <p className={styles.techLabel}>Technologies utilisées : </p>
          <div className={styles.technologies}>
            {technologies?.map((tech, index) => (
              <span key={index} className={styles.tech}>
                {tech}
              </span>
            ))}
          </div>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Voir le projet
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ModalProjectDetails;