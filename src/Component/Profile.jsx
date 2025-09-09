import React from 'react';
import image from "../assets/image.png";
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaStackOverflow } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";


function Profile() {
  const navigate = useNavigate();


  return (
    <div>
      <section id="profile" className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-16">
        <div className="md:w-3/4">
          <div className="text-3xl md:text-4xl font-bold mb-2 cursor-pointer" onClick={() => navigate('/')}>Prashast Saxena</div>
          <p className="text-sm text-gray-400 mb-4">
            Undergraduate • Fullstack Web Developer • AI/ML Enthusiast • Blogger • Tech Enthusiast
          </p>
          <p className="text-gray-300 leading-relaxed">
            I'm a Computer Science and Engineering (Artificial Intelligence) student at KIET Group of Institutions with strong experience in full-stack development. I love solving problems, building projects, and participating in coding contests. I’ve solved 700+ questions across platforms like LeetCode, Codeforces, and Hackerrank.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="https://github.com/SaxenaPrashast" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/prashastsaxena2003" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com/prashast_24" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="https://leetcode.com/u/PrashastSaxena/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <SiLeetcode size={24} />
            </a>
          </div>
          <button
            onClick={() => window.open("https://drive.google.com/file/d/1qg0auPIbRIvIY5f442X-Sy_JkZ9RSk_x/view?usp=drive_link", "_blank")}
            className="mt-3 px-5 py-2 rounded-lg border border-purple-400 text-purple-400 font-semibold hover:bg-purple-400 hover:text-[#11111b] transition-all duration-300"
          >
            View Resume
          </button>

        </div>

        <div className="md:w-1/4 flex justify-center">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-gray-600">
            <img src={image} alt="Prashast Saxena" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;