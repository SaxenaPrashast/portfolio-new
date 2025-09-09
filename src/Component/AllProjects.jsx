import React from 'react'
import { Link } from "react-router-dom";

const AllProjects = () => (
  <section id="projects" className="mb-16">
    <h2 className="text-2xl md:text-3xl font-bold mb-6">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectCard
        title="Word Lookup Dictionary"
        description="Implemented a fast English dictionary using Trie structures and file handling for word management in C++."
        icon="🔔"
        link="https://github.com/SaxenaPrashast/word-dictionary"
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
  </section>
);

function ProjectCard({ title, description, icon, link }) {
  return (
    <div className="w-full bg-[#221E2A]/50 backdrop-blur-md rounded-xl p-6 shadow-md border border-transparent hover:border-purple-400 hover:shadow-purple-300/30 transition-all duration-300 ease-in-out" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)' }}>
      <div className="flex items-center space-x-4 mb-2">
        <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
          <span role="img" aria-label={`${title} icon`}>{icon}</span>
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-gray-400">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute -top-2 -right-2 hidden rounded-full border-[1px] border-accent bg-accent p-1.5 text-tertiary opacity-0 transition hover:bg-secondary hover:text-accent group-hover:block group-hover:opacity-100"
        >
          🔗
        </a>
      )}
    </div>
  );
}

export default AllProjects
