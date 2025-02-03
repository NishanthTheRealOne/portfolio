import ProjectCard from './ProjectCard';
import { projects } from '../data/Projects';
import styles from './ProjectSection.module.css';

export const ProjectSection = () => {
    return (
        <div className={styles.container} id="projects">
            <h2 className={styles.title}>Mes Projets</h2>
            <div className={styles.projectGrid}>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        {...project}
                    />
                ))}
            </div>
        </div>
    );
};