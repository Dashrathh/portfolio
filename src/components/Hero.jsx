import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaArrowDown,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="md:w-1/2 mt-10 md:mt-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Dashrath prajapati
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
              Full Stack Developer
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              I build exceptional and accessible digital experiences for the
              web. Focused on creating intuitive and responsive user interfaces.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={() => scrollToSection("#projects")}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                View My Work <FaArrowDown />
              </button>
              <button className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 font-medium py-3 px-6 rounded-lg transition-colors">
                Download CV <FaFileDownload />
              </button>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:johndoe@example.com"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <SiGmail size={20} />
              </a>
            </div>
          </div>

          <div className="md:w-2/5 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-blue-600 dark:bg-blue-400 rounded-full overflow-hidden shadow-xl">
                <div className="w-full h-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                  <span className="text-4xl text-gray-500 dark:text-gray-400">
                    Your Photo
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-32 h-32 border-8 border-blue-500 dark:border-blue-400 rounded-full"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border-8 border-blue-400 dark:border-blue-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
