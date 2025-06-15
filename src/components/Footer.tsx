import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Aakashdeep Singh
            </h3>
            <p className="text-gray-400 dark:text-gray-500 mb-6 transition-colors duration-300">
              DevOps Engineer passionate about building scalable infrastructure and empowering development teams.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/aakashdeep8530/aakashdeep8530"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/aakashdeep-singh-b323a4243/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:aakashdeepsingh69146@gmail.com"
                className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="#projects" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-300">Projects</a></li>
              <li><a href="#skills" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-300">Skills</a></li>
              <li><a href="#blog" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="#resume" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-300">Resume</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <p className="text-gray-400 dark:text-gray-500 mb-4 transition-colors duration-300">
              Always interested in discussing new opportunities and interesting projects.
            </p>
            <a
              href="mailto:aakashdeepsingh69146@gmail.com"
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
            >
              <Mail size={16} className="mr-2" />
              Let's Talk
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center transition-colors duration-300">
          <p className="text-gray-400 dark:text-gray-500 flex items-center justify-center transition-colors duration-300">
            Made with <Heart size={16} className="mx-2 text-red-500" /> by Aakashdeep Singh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;