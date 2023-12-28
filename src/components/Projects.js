import React from 'react';
import { ProjectCard } from '../Cards/ProjectCard';
import { projectData } from '../data/ProjectData';

const Projects = () => {
  return (
    <section id="projects" className="py-16 p-4 sm:p-10 bg-blue-200">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {projectData.map((item, index)=> <ProjectCard key={index} title={item.title} description={item.description} projectLink={item.projectLink} />)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
