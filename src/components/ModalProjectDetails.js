import React from 'react';

function ModalProjectDetails({ title, description, image, link, technologies, closeModal }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        {image && (
          <img src={image} alt={title} className="w-full h-64 object-cover rounded mb-4" />
        )}
        <p className="text-gray-600 mb-4">{description}</p>
        {technologies && (
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span key={index} className="bg-pink-100 text-pink-800 px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
          >
            Voir le projet
          </a>
        )}
      </div>
    </div>
  );
}

export default ModalProjectDetails;