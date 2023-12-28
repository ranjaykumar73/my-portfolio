import React from 'react'

export const ProjectCard = ({title, description, projectLink}) => {
  return (
    <div className="bg-white p-8 rounded-md shadow-md">
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600 mb-6">
      {description} 
    </p>
    <a
      href={projectLink}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      View on GitHub
    </a>
  </div>
  )
}
