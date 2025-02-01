import ProjectCard from './ProjectCard';
import { projects } from '../data/Projects';

export const ProjectSection = () => {
    return (
        <div className="p-8" id="projects">
            <h2 className="text-2xl font-bold mb-4">Mes Projets</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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