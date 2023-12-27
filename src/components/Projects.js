
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         
          <div className="bg-white p-8 rounded-md shadow-md">
            <h3 className="text-2xl font-bold mb-4">Project 1</h3>
            <p className="text-gray-600 mb-6">
              Description of Project 1. 
            </p>
            <a
              href="https://github.com/your-username/project1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View on GitHub
            </a>
          </div>

         
          <div className="bg-white p-8 rounded-md shadow-md">
            <h3 className="text-2xl font-bold mb-4">Project 2</h3>
            <p className="text-gray-600 mb-6">
              Description of Project 2. 
            </p>
            <a
              href="https://github.com/your-username/project2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View on GitHub
            </a>
          </div>

          <div className="bg-white p-8 rounded-md shadow-md">
            <h3 className="text-2xl font-bold mb-4">Project 3</h3>
            <p className="text-gray-600 mb-6">
              Description of Project 3.
            </p>
            <a
              href="https://github.com/your-username/project3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View on GitHub
            </a>
          </div>

          <div className="bg-white p-8 rounded-md shadow-md">
            <h3 className="text-2xl font-bold mb-4">Project 4</h3>
            <p className="text-gray-600 mb-6">
              Description of Project 4. 
            </p>
            <a
              href="https://github.com/your-username/project4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View on GitHub
            </a>
          </div>

          <div className="bg-white p-8 rounded-md shadow-md">
            <h3 className="text-2xl font-bold mb-4">Project 5</h3>
            <p className="text-gray-600 mb-6">
              Description of Project 5. 
            </p>
            <a
              href="https://github.com/your-username/project5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View on GitHub
            </a>
          </div>

          <div className="bg-white p-8 rounded-md shadow-md">
            <h3 className="text-2xl font-bold mb-4">Project 6</h3>
            <p className="text-gray-600 mb-6">
              Description of Project 6.
            </p>
            <a
              href="https://github.com/your-username/project6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View on GitHub
            </a>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Projects;
