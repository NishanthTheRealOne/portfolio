import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Projet 1',
    description: 'Description détaillée du projet 1',
    image: '/images/projet1.jpg',
    link: 'https://github.com/yourusername/project1',
    technologies: ['React', 'Node.js', 'MongoDB'],
    shortDescription: 'Description courte du projet 1'
  },
  {
    title: 'Projet 2',
    description: 'Description détaillée du projet 2',
    image: '/images/projet2.jpg',
    link: 'https://github.com/yourusername/project2',
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    shortDescription: 'Description courte du projet 2'
  },
  {
    title: 'Projet 3',
    description: 'Description détaillée du projet 3',
    image: '/images/projet3.jpg',
    link: 'https://github.com/yourusername/project3',
    technologies: ['React Native', 'Firebase'],
    shortDescription: 'Description courte du projet 3'
  }
];

function ProjectsPage() {
  return (
    <div className="p-8">
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
}

export default ProjectsPage;