import React, { useState } from 'react';
import ModalProjectDetails from './ModalProjectDetails';

function ProjectCard({ title, description, image, link, technologies, skills, shortDescription }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
      onClick={() => setShowModal(true)}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 mb-3">{shortDescription || description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies?.map((tech, index) => (
            <span key={index} className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
      {showModal && (
        <ModalProjectDetails
          title={title}
          description={description}
          image={image}
          link={link}
          technologies={technologies}
          competences={skills}
          closeModal={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default ProjectCard;