import React from "react";
import { FaCode, FaLaptopCode, FaDatabase, FaPaintBrush } from "react-icons/fa";

function AvailablePrograms() {
  const programs = [
    {
      title: "Full Stack Development",
      description:
        "Master the complete web development stack with hands-on projects and real-world applications.",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      icon: <FaCode className="text-3xl text-white" />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Frontend Development",
      description:
        "Create stunning, responsive user interfaces with modern frameworks and best practices.",
      skills: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS"],
      icon: <FaLaptopCode className="text-3xl text-white" />,
      color: "from-pink-500 to-purple-600",
    },
    
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        🚀 Available Programs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {programs.map((program, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${program.color} rounded-2xl shadow-lg p-6 text-white flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                {program.icon}
                <h3 className="text-xl font-semibold">{program.title}</h3>
              </div>
              <p className="text-sm mb-4">{program.description}</p>

              <p className="font-medium mb-2">🔥 Skills you'll master:</p>
              <div className="flex flex-wrap gap-2">
                {program.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <button className="mt-6 bg-white text-gray-800 font-medium py-2 rounded-lg shadow hover:bg-gray-100 transition" >
              Register 
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AvailablePrograms;
