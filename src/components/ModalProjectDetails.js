import React, { useEffect, useRef } from 'react';

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div ref={modalRef} className="bg-white rounded-lg p-6 max-w-2xl w-full m-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover rounded mb-4"
          />
        )}
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="mb-4">
          <h3 className="font-bold mb-2">Technologies :</h3>
          <div className="flex flex-wrap gap-2">
            {technologies?.map((tech, index) => (
              <span key={index} className="bg-pink-100 text-pink-800 px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            Voir le projet
          </a>
        )}
      </div>
    </div>
  );
}

export default ModalProjectDetails;