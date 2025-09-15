import React from 'react';
import { FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-2xl font-bold text-blue-400">John Doe</h3>
                        <p className="text-gray-400 mt-2">Full Stack Developer</p>
                    </div>

                    <div className="flex space-x-6 mb-6 md:mb-0">
                        <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
                        <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
                        <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
                        <a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a>
                        <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
                        aria-label="Scroll to top"
                    >
                        <FaArrowUp />
                    </button>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} John Doe. Made with <FaHeart className="inline text-red-500" /> using React and Tailwind CSS.
                    </p>

                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;