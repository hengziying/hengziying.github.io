import React from "react";

const Skills = () => {
  const skills = [
    "Python",
    "Java",
    "SQL",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "Linux",
    "AndroidStudio",
  ];

  return (
    <section className="w-full mt-32 bg-light">
      <h2 className="font-bold text-8xl mb-16 w-full text-center md:text-6xl md:mb-8">
        My Skills
      </h2>
      <ul className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="bg-dark text-light px-4 py-2 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-shadow md:text-base sm:text-sm"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
