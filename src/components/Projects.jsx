import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "TempMail.sbs – Temporary Email Service",
      description:
        "A privacy-focused temporary email service with auto-expiring inboxes, SEO optimization, high performance, and 1400+ organic users in 30 days.",
      image: "/tempmail.png",
      tags: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Redis",
        "Express.js",
      ],
      category: "fullstack",
      github: "https://github.com/Dashrathh/TempuMail",
      live: "https://www.tempmail.sbs/",
    },

    {
      id: 2,
      title: "jalaram estate agency A real estate property platform",
      description:
        "A real estate platform developed for a freelance client, showcasing residential and commercial properties with project listings, amenities, and location details.",
      image: "/jalaram.png",
      tags: [
        "React",
        "Node.js",
        "mongodb",
        "Tailwind CSS",
        "mongodb",
        "express js",
      ],
      category: "fullstack",
      github: "https://github.com/Dashrathh/Jalaram-estate",
      live: "https://www.shreejalaramestateagency.com/",
    },
    {
      id: 3,
      title: "Podcast blog platform",
      description:
        "A full-stack blogging platform merging podcasts with blogs, featuring real-time updates, dynamic comparisons, and secure backend APIs for scalability.",
      image: "/podcast.png",

      tags: [
        "React",
        "Node.js",
        "mongodb",
        "Tailwind CSS",
        "mongodb",
        "express js",
      ],
      category: "fullstack",
      github: "https://github.com/Dashrathh/PodcastBlogWeb",
      live: "https://podcast-blog-web-zcug.vercel.app/",
    },

    {
      id: 4,
      title: "Universal truth Blog platform ",
      description:
        "An information-based platform showcasing comparisons between ancient and modern technologies, with 12+ blogs, secure authentication, and interactive features.",
      image: "/universal.png",
      tags: ["Ejs", "java script", "CSS", "node js", "express js", "mongodb"],
      category: "fullstack",
      github: "https://github.com/Dashrathh/Universal-truth",
      live: "https://universal-truth.onrender.com/",
    },
    {
      id: 5,
      title: "FilmyHunt.xyz Muvie download website",
      description:
        "A movie download and streaming website integrated with analytics dashboard for metrics visualization and user engagement insights.",
      image: "filmyhunt.png",
      tags: ["React", "Tailwind CSS", "Responsive"],
      category: "frontend",
      github: "https://github.com/Dashrathh/filmyhunt",
      live: "https://filmyhunt.xyz/",
    },
    {
      id: 6,
      title: "Hope Hub – Donation Platform",
      description:
        "A donation management platform built as a college project, enabling users to donate items, needy individuals to claim donations, and volunteers to contribute to social welfare.",
      image: "/HopeHub.png",
      tags: [
        "React",
        "Node.js",
        "prisma",
        "Tailwind CSS",
        "mongodb",
        "express js",
      ],
      category: "fullstack",
      github: "https://github.com/Dashrathh/HopeHub",
      live: "https://hope-hub-olive.vercel.app/",
    },
    {
      id: 7,
      title: "TweakStudy Backend – College Paper Solutions",
      description:
        "A backend service for delivering college previous year paper solutions, supporting question-wise data storage and retrieval. Built with Node.js, SQL, and Sequelize ORM for efficient database management.",
      image: "/pragama.png",
      tags: ["Node.js", "Express", "MySQL", "Sequelize"],
      category: "backend",
      github: "https://github.com/Dashrathh/tweakstudy-backend",
      //   live: "https://example.com",
    },
    {
      id: 8,
      title: "AutoMail – Scheduled Email Sender",
      description:
        "A backend service that automates sending emails at scheduled times, built using Node.js for reliability and efficiency.",
      image: "autoMail.png", // agar koi screenshot/logo hai toh use kar lena
      tags: ["Node.js", "Scheduling", "Email Service", "CRON", "Express"],
      category: "backend",
      github: "https://github.com/Dashrathh/AutoMail",
      //   live: "https://example.com",
    },
  ];

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "fullstack", name: "Full Stack" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-10">
          Here are some of my recent projects. Each project represents different
          skills and technologies I've worked with.
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
