import React from 'react'
import { Link } from "react-router-dom";

const Projects = () => (
  <section id="projects" className="mb-16">
    <h2 className="text-2xl md:text-3xl font-bold mb-6">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectCard
        title="Rest API for video streaming application"
        description="A RESTful API for a video streaming application built with Node.js and Express."
        icon="💾"
        link="https://github.com/SaxenaPrashast/videotube"
      />
      <ProjectCard
        title="MegaBlog"
        description="Developed a full-stack blogging platform with secure authentication and role-based access. Integrated text editor and image upload/preview features."
        icon="💰"
        link="https://github.com/SaxenaPrashast/Blog-App"
      />
      <ProjectCard
        title="Hideout App"
        description="A real-time 1:1 chat application. Implemented media sharing, Giphy integration, and a responsive UI with Redux for state management."
        icon="💾"
        link="https://github.com/SaxenaPrashast/Hideout-fullstack"
      />
    </div>
    <div className="text-right mt-4">
      <Link
        to="/projects"
        className="text-gray-400 hover:text-white transition-colors text-sm"
      >
        View All Projects →
      </Link>
    </div>
  </section>
);

function ProjectCard({ title, description, icon, link }) {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div onClick={handleClick} className="w-full bg-[#221E2A]/50 backdrop-blur-md rounded-xl p-6 shadow-xl border border-transparent hover:cursor-pointer hover:shadow-purple-300/30 transition-all duration-300 ease-in-out" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)' }}>
      <div className="flex items-center space-x-4 mb-2">
        <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
          <span role="img" aria-label={`${title} icon`}>{icon}</span>
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-gray-400 hover:cursor-pointer">{description}</p>
    </div>
  );
}

export default Projects
