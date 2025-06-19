import { experiences } from '../data/Experiences';
import styles from './ExperienceSection.module.css';

const ExperienceSection = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Expérience professionnelle</h2>
      <div className={styles.timeline}>
        {experiences.map((exp, idx) => (
          <div className={styles.experience} key={idx}>
            <h3 className={styles.company}>{exp.company}</h3>
            <div className={styles.details}>
              <span className={styles.role}>{exp.title}</span>
              <span className={styles.period}>{exp.period}</span>
            </div>
            <p className={styles.description}>{exp.description}</p>
            <h3 className={styles.company}>
                Compétences développées
            </h3>
            <ul className={styles.skillsList}>
              {exp.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
