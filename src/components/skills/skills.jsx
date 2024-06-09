
/* import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaJava, FaUbuntu } from 'react-icons/fa';
import { DiMongodb, DiBootstrap, DiDart, DiUbuntu } from 'react-icons/di';
import { SiTailwindcss, SiFlutter, SiExpress, SiRedux, SiSocketdotio } from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = {
  frontend: [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'Flutter/Dart', icon: <SiFlutter /> },
    { name: 'Bootstrap', icon: <DiBootstrap /> },
    { name: 'Tailwind', icon: <SiTailwindcss /> },
  ],
  backend: [
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'MongoDB', icon: <DiMongodb /> },
    { name: 'RESTful APIs', icon: <FaDatabase /> },
    { name: 'Socket.IO', icon: <SiSocketdotio /> },
    { name: 'JWT', icon: <FaDatabase /> },
  ],
  frameworks: [
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'MongoDB Atlas', icon: <DiMongodb /> },
    { name: 'Ubuntu', icon: <DiUbuntu /> },
    { name: 'Base64', icon: <FaDatabase /> },
  ],
};

const Skills = () => {
  return (
    <div className="space-y-0 block w-full">
      <motion.div
        className="bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col items-center text-center w-full"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-500">Front-End Skills</h2>
        <div className="flex flex-wrap justify-center space-x-4">
          {skills.frontend.map((skill) => (
            <div key={skill.name} className="flex items-center space-x-2 mb-4">
              <div className="text-3xl text-blue-500">{skill.icon}</div>
              <span className="text-xl text-white">{skill.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col items-center text-center w-full"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-green-500">Back-End Skills</h2>
        <div className="flex flex-wrap justify-center space-x-4">
          {skills.backend.map((skill) => (
            <div key={skill.name} className="flex items-center space-x-2 mb-4">
              <div className="text-3xl text-green-500">{skill.icon}</div>
              <span className="text-xl text-white">{skill.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col items-center text-center w-full"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-purple-500">Frameworks & Libraries</h2>
        <div className="flex flex-wrap justify-center space-x-4">
          {skills.frameworks.map((skill) => (
            <div key={skill.name} className="flex items-center space-x-2 mb-4">
              <div className="text-3xl text-purple-500">{skill.icon}</div>
              <span className="text-xl text-white">{skill.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills; */



/* import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { DiMongodb, DiBootstrap, DiDart } from 'react-icons/di';
import { SiTailwindcss, SiFlutter, SiExpress, SiRedux, SiSocketdotio } from 'react-icons/si';
import { motion } from 'framer-motion';


const skills = {
  frontend: [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'Flutter/Dart', icon: <SiFlutter /> },
    { name: 'Bootstrap', icon: <DiBootstrap /> },
    { name: 'Tailwind', icon: <SiTailwindcss /> },
  ],
  backend: [
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'MongoDB', icon: <DiMongodb /> },
    { name: 'RESTful APIs', icon: <FaDatabase /> },
    { name: 'Socket.IO', icon: <SiSocketdotio /> },
    { name: 'JWT', icon: <FaDatabase /> },
  ],
  frameworks: [
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'MongoDB Atlas', icon: <DiMongodb /> },
    { name: 'Ubuntu', icon: <DiDart /> },
    { name: 'Base64', icon: <FaDatabase /> },
  ],
};

const Skills = () => {
  const categories = [
    { name: 'Front-End Skills', skills: skills.frontend, color: 'text-blue-500' },
    { name: 'Back-End Skills', skills: skills.backend, color: 'text-green-500' },
    { name: 'Frameworks & Libraries', skills: skills.frameworks, color: 'text-purple-500' },
  ];

  return (
    <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10 justify-center items-center">
      {categories.map((category) => (
        <motion.div
          key={category.name}
          className="bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col items-center text-center w-full lg:w-1/3"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className={`text-3xl font-bold mb-4 ${category.color}`}>{category.name}</h2>
          <div className="grid grid-cols-2 gap-4">
            {category.skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center space-y-2">
                <div className={`text-3xl ${category.color}`}>{skill.icon}</div>
                <span className="text-xl text-white">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills; */

/* import React, { useState } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaLaptopCode, FaServer, FaTools } from 'react-icons/fa';
import { DiMongodb, DiBootstrap, DiDart } from 'react-icons/di';
import { SiTailwindcss, SiFlutter, SiExpress, SiRedux, SiSocketdotio } from 'react-icons/si';
import { motion } from 'framer-motion';
import './skills.css';

const skills = {
  frontend: [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'Flutter/Dart', icon: <SiFlutter /> },
    { name: 'Bootstrap', icon: <DiBootstrap /> },
    { name: 'Tailwind', icon: <SiTailwindcss /> },
  ],
  backend: [
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'MongoDB', icon: <DiMongodb /> },
    { name: 'RESTful APIs', icon: <FaDatabase /> },
    { name: 'Socket.IO', icon: <SiSocketdotio /> },
    { name: 'JWT', icon: <FaDatabase /> },
  ],
  frameworks: [
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'MongoDB Atlas', icon: <DiMongodb /> },
    { name: 'Ubuntu', icon: <DiDart /> },
    { name: 'Base64', icon: <FaDatabase /> },
  ],
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleIconClick = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const renderSkills = (skills, color) => (
    <div className="grid grid-cols-2 gap-4">
      {skills.map((skill) => (
        <div key={skill.name} className="flex flex-col items-center space-y-2">
          <div className={`text-3xl ${color}`}>{skill.icon}</div>
          <span className="text-xl text-white">{skill.name}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative flex flex-col items-center space-y-10">
      <div className="flex space-x-10">
        <motion.div
          className="p-6 bg-gray-900 rounded-full shadow-lg cursor-pointer"
          whileHover={{ scale: 1.1 }}
          onClick={() => handleIconClick('frontend')}
        >
          <FaLaptopCode className="text-6xl text-blue-500" />
          <span className="block text-white mt-2">Front-End</span>
        </motion.div>
        <motion.div
          className="p-6 bg-gray-900 rounded-full shadow-lg cursor-pointer"
          whileHover={{ scale: 1.1 }}
          onClick={() => handleIconClick('backend')}
        >
          <FaServer className="text-6xl text-green-500" />
          <span className="block text-white mt-2">Back-End</span>
        </motion.div>
        <motion.div
          className="p-6 bg-gray-900 rounded-full shadow-lg cursor-pointer"
          whileHover={{ scale: 1.1 }}
          onClick={() => handleIconClick('frameworks')}
        >
          <FaTools className="text-6xl text-purple-500" />
          <span className="block text-white mt-2">Frameworks</span>
        </motion.div>
      </div>
      <div className="w-full lg:w-2/3 mt-10 relative">
        {selectedCategory === 'frontend' && (
          <motion.div
            className="absolute left-0 top-20 bg-gray-800 p-8 rounded-lg shadow-lg w-full lg:w-2/3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-500">Front-End Skills</h2>
            {renderSkills(skills.frontend, 'text-blue-500')}
          </motion.div>
        )}
        {selectedCategory === 'backend' && (
          <motion.div
            className="absolute left-1/6 top-20 bg-gray-800 p-8 rounded-lg shadow-lg w-full lg:w-2/3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-green-500">Back-End Skills</h2>
            {renderSkills(skills.backend, 'text-green-500')}
          </motion.div>
        )}
        {selectedCategory === 'frameworks' && (
          <motion.div
            className="absolute right-0 top-20 bg-gray-800 p-8 rounded-lg shadow-lg w-full lg:w-2/3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-purple-500">Frameworks & Libraries</h2>
            {renderSkills(skills.frameworks, 'text-purple-500')}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Skills; */



import React from 'react';
import ComputerIcon from '@mui/icons-material/Computer';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';

const Skills = () => {
  return (
    <div className="flex justify-center items-center flex-wrap skills-container">
      <div className="flex-1 min-w-0 max-w-xs md:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3 skill-card">
        <div className="flex justify-center items-center bg-blue-500 rounded-t-lg p-5">
          <ComputerIcon style={{ fontSize: 48, color: 'white' }} />
        </div>
        <div className="p-5">
          <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Front-End Skills</h5>
          <p className="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400">
            HTML, CSS, JavaScript, React, Redux, Flutter/Dart, Bootstrap, Tailwind
          </p>
        </div>
      </div>

      <div className="flex-1 min-w-0 max-w-xs md:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3 skill-card">
        <div className="flex justify-center items-center bg-green-500 rounded-t-lg p-5">
          <StorageIcon style={{ fontSize: 48, color: 'white' }} />
        </div>
        <div className="p-5">
          <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Back-End Skills</h5>
          <p className="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400">
            Node.js, Express, MongoDB, RESTful APIs, Socket.IO, JWT, Ubuntu, Docker
          </p>
        </div>
      </div>

      <div className="flex-1 min-w-0 max-w-xs md:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3 skill-card">
        <div className="flex justify-center items-center bg-purple-500 rounded-t-lg p-5">
          <BuildIcon style={{ fontSize: 48, color: 'white' }} />
        </div>
        <div className="p-5">
          <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Frameworks & Libraries</h5>
          <p className="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400">
            Redux, MongoDB Atlas, Base64, Jest, Testcafe
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;

/* import React from 'react';
import { Code, Database, Tool } from 'react-feather';

const Skills = () => {
  return (
    <div className="flex justify-center items-center flex-wrap skills-container">
      <div className="flex-1 min-w-0 max-w-xs md:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3 skill-card">
        <div className="flex justify-center items-center bg-blue-500 rounded-t-lg p-5">
          <Code className="text-white" size={48} />
        </div>
        <div className="p-5">
          <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Front-End Skills</h5>
          <p className="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400">
            HTML, CSS, JavaScript, React, Redux, Flutter/Dart, Bootstrap, Tailwind
          </p>
        </div>
      </div>

      <div className="flex-1 min-w-0 max-w-xs md:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3 skill-card">
        <div className="flex justify-center items-center bg-green-500 rounded-t-lg p-5">
          <Database className="text-white" size={48} />
        </div>
        <div className="p-5">
          <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Back-End Skills</h5>
          <p className="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400">
            Node.js, Express, MongoDB, RESTful APIs, Socket.IO, JWT
          </p>
        </div>
      </div>

      <div className="flex-1 min-w-0 max-w-xs md:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3 skill-card">
        <div className="flex justify-center items-center bg-purple-500 rounded-t-lg p-5">
          <Tool className="text-white" size={48} />
        </div>
        <div className="p-5">
          <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Frameworks & Libraries</h5>
          <p className="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400">
            Redux, MongoDB Atlas, Ubuntu, Base64
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills; */










