import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaAws,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiDocker,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Python", icon: <FaPython /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Docker", icon: <SiDocker /> },
  ];

  return (
    <section id="skills" className="py-10 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-white dark:bg-gray-900 p-4 rounded-lg shadow"
            >
              <div className="text-3xl mb-2">{skill.icon}</div>
              <p className="font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
