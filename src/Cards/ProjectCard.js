import React from 'react'

export const ProjectCard = ({title, description, projectLink,projectURL}) => {
  return (
    <div className="bg-orange-200 p-8 rounded-md shadow-md">
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
      <br/>
    <a
      href={projectURL}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      view Project
    </a>

    
  </div>
  )
}
