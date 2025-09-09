import React from 'react';

function Contacts() {
  return (
    <section
      id="contact"
      className="w-full mb-16 p-6 md:p-10 backdrop-blur-md rounded-xl shadow-md border border-transparent 
                 hover:border-purple-400 hover:shadow-purple-300/30 
                 transition-all duration-300 ease-in-out"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
        Contact
      </h2>

      {/* Description */}
      <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
        If you'd like to get in touch, feel free to drop me an email.  
        I usually respond within 24 hours. 🚀
      </p>

      {/* Email Button */}
      <a
        href="mailto:sprashast25@gmail.com"
        className="inline-block mt-3 px-5 py-2 rounded-lg border border-purple-400 
                   text-purple-400 font-semibold hover:bg-purple-400 
                   hover:text-[#11111b] transition-all duration-300"
      >
        📧 sprashast25@gmail.com
      </a>
    </section>
  );
}

export default Contacts;
