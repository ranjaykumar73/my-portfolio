import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-16">
      <div>
        <div className=" flex justify-center -mt-16 gap-5">
          <p>+91-9852463851</p>
          <a href="mailto:ranjaykumar73.rk@gmail.com">
            ranjaykumar73.rk@gmail.com
          </a>
        </div>
      </div>
      <div className="container mx-auto flex justify-center items-center gap-32 mt-10">
        <div className="flex-shrink-0">
          <img
            src="https://media.licdn.com/dms/image/D5603AQFizd8agGEAOQ/profile-displayphoto-shrink_800_800/0/1681713000195?e=2147483647&v=beta&t=oQWxUvy522tYeylq8Al2GrkzYnobeCf4m09Zsx0bjvs"
            alt="Profile"
            className="rounded-full w-32 h-32 object-cover  "
          />
        </div>
        <div className="max-w-2xl pr-8">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-gray-600 mb-6">
            I am Ranjay Kumar, an aspiring frontend developer with three months
            of internship experience at Softmind Infotech Private Limited. As a
            recent graduate, I am actively seeking opportunities in React.js
            development. I bring a passion for creating engaging user interfaces
            and a dedication to staying at the forefront of web development
            technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;