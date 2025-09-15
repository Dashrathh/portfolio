import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Backend Node.js Developer Intern",
      company: "Praagama Infotech",
      period: "Jan 2024 - Jun 2024",
      description:
        "Worked on backend development using Node.js and Express. Built RESTful APIs, integrated databases, optimized queries, and collaborated with frontend developers for full-stack delivery.",
      skills: ["Node.js", "Express.js", "MySQL", "Sequelize", "REST API"],
    },
  ];

  const education = [
    {
      type: "education",
      title: "B.Tech in Computer Engineering",
      company: "Mahavir swami university",
      period: "2022 - 2026",
      description:
        "Currently pursuing Computer Engineering with focus on web development, data structures, and software engineering.",
      skills: ["JavaScript", "React", "Node.js", "Databases"],
    },
  ];

  const allItems = [...experiences, ...education];

  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Experience & Education
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-5 md:left-1/2 -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900/50"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {allItems.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="flex justify-center md:absolute left-5 md:left-1/2 -translate-x-1/2 z-10">
                    <div
                      className={`p-2 rounded-full ${
                        item.type === "work" ? "bg-blue-600" : "bg-green-600"
                      } text-white`}
                    >
                      {item.type === "work" ? (
                        <FaBriefcase size={16} />
                      ) : (
                        <FaGraduationCap size={16} />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-5/12 ${
                      index % 2 === 0
                        ? "md:mr-auto md:pr-12"
                        : "md:ml-auto md:pl-12"
                    } mt-2 md:mt-0`}
                  >
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                      <span
                        className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${
                          item.type === "work"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                            : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                        }`}
                      >
                        {item.type === "work" ? "Work" : "Education"}
                      </span>
                      <h3 className="text-xl font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                        {item.company} • {item.period}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
