
import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Resume</h2>

        
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Education</h3>
          <p className="text-gray-600 mb-8">Jharkhand Rai University,Ranchi - B.tech(EEE), 2020</p>

          <h3 className="text-2xl font-bold mb-4">Work Experience</h3>
          <p className="text-gray-600 mb-8">Softmind Infotech pvt.ltd. - Software Developer, 06 sep 2023 to Till now</p>

          <h3 className="text-2xl font-bold mb-4">Skills</h3>
          <ul className="list-disc pl-6 mb-8">
            <li>JavaScript</li>
            <li>React</li>
            <li>HTML/CSS</li>
            
          </ul>

       
          <div className="text-center">
          <button className='h-10 w-40 bg-blue-500 rounded'>
            <a href="/Resume/Ranjay_resume.pdf" download className=" hover:underline text-white">
              Download Resume
            </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
