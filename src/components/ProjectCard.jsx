import React, { useState } from 'react';
import ModalProjectDetails from './ModalProjectDetails';
import styles from './ProjectCard.module.css';

function ProjectCard({ title, description, image, link, technologies, skills, shortDescription }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className={styles.card}
        onClick={() => setShowModal(true)}
      >
        {image && (
          <img
            src={image}
            alt={title}
            className={styles.image}
          />
        )}
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{shortDescription || description}</p>
          <p className={styles.techLabel}>Technologies utilisées : </p>
          <div className={styles.techContainer}>
            {technologies?.map((tech, index) => (
              <span key={index} className={styles.techBadge}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ModalProjectDetails
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={title}
        description={description}
        image={image}
        link={link}
        technologies={technologies}
        skills={skills}
      />
    </>
  );
}

export default ProjectCard;