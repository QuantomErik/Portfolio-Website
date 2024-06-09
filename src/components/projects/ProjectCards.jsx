import React from 'react';
import { FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';

const ProjectCards = () => {
  const projects = [
    {
      title: "Petsee",
      description: "Application for pet monitoring.",
      image: "src/components/projects/petsee.png",
      liveDemoLink: "#",
      githubLink: "#",
      tools: [
        { icon: <FaJsSquare className="text-blue-500" />, name: 'JavaScript' },
        { icon: <FaReact className="text-blue-500" />, name: 'React' },
        { icon: <FaNodeJs className="text-green-500" />, name: 'Node.js' },
        { icon: <DiMongodb className="text-green-500" />, name: 'MongoDB' }
      ]
    },
    {
      title: "Project Two",
      description: "Description for project two.",
      image: "src/components/projects/backend1.jpg",
      liveDemoLink: "#",
      githubLink: "#",
      tools: [
        { icon: <FaJsSquare />, name: 'JavaScript' },
        { icon: <FaReact />, name: 'React' }
      ]
    },
    {
      title: "Project Three",
      description: "Description for project three.",
      image: "src/components/projects/backend2.jpg",
      liveDemoLink: "#",
      githubLink: "#",
      tools: [
        { icon: <FaNodeJs />, name: 'Node.js' },
        { icon: <DiMongodb />, name: 'MongoDB' }
      ]
    },
    {
      title: "PWA",
      description: "Progressive web application containing a memory game, websocket chat and a weather app.",
      image: "src/components/projects/pwa.png",
      liveDemoLink: "#",
      githubLink: "#",
      tools: [
        { icon: <FaJsSquare />, name: 'JavaScript' }
      ]
    }
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="col-span-2 relative bg-gray-900 text-white shadow-lg rounded-lg overflow-hidden h-96">
          <img className="w-full h-full object-cover absolute inset-0 z-0" src={projects[0].image} alt={projects[0].title} />
          <div className="relative p-6 z-10 bg-opacity-50 bg-black h-full flex flex-col justify-end">
            <h3 className="font-bold text-2xl mb-2">{projects[0].title}</h3>
            <p className="text-white text-base">{projects[0].description}</p>
            <div className="flex space-x-4 mt-4">
              <a href={projects[0].liveDemoLink} className="text-white hover:text-blue-700 font-bold">
                Live Demo
              </a>
              <a href={projects[0].githubLink} className="text-white hover:text-blue-700 font-bold">
                GitHub
              </a>
            </div>
            <div className="absolute top-4 right-4 flex flex-col space-y-2">
              {projects[0].tools.map((tool, index) => (
                <div key={index} className="text-xl text-white">
                  {tool.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative bg-gray-900 text-white shadow-lg rounded-lg overflow-hidden h-96">
          <img className="w-full h-full object-cover absolute inset-0 z-0" src={projects[1].image} alt={projects[1].title} />
          <div className="relative p-6 z-10 bg-opacity-50 bg-black h-full flex flex-col justify-end">
            <h3 className="font-bold text-2xl mb-2">{projects[1].title}</h3>
            <p className="text-gray-300 text-base">{projects[1].description}</p>
            <div className="flex space-x-4 mt-4">
              <a href={projects[1].liveDemoLink} className="text-blue-500 hover:text-blue-700 font-bold">
                Live Demo
              </a>
              <a href={projects[1].githubLink} className="text-blue-500 hover:text-blue-700 font-bold">
                GitHub
              </a>
            </div>
            <div className="absolute top-4 right-4 flex flex-col space-y-2">
              {projects[1].tools.map((tool, index) => (
                <div key={index} className="text-xl text-white">
                  {tool.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="relative bg-gray-900 text-white shadow-lg rounded-lg overflow-hidden h-96">
          <img className="w-full h-full object-cover absolute inset-0 z-0" src={projects[2].image} alt={projects[2].title} />
          <div className="relative p-6 z-10 bg-opacity-50 bg-black h-full flex flex-col justify-end">
            <h3 className="font-bold text-2xl mb-2">{projects[2].title}</h3>
            <p className="text-gray-300 text-base">{projects[2].description}</p>
            <div className="flex space-x-4 mt-4">
              <a href={projects[2].liveDemoLink} className="text-blue-500 hover:text-blue-700 font-bold">
                Live Demo
              </a>
              <a href={projects[2].githubLink} className="text-blue-500 hover:text-blue-700 font-bold">
                GitHub
              </a>
            </div>
            <div className="absolute top-4 right-4 flex flex-col space-y-2">
              {projects[2].tools.map((tool, index) => (
                <div key={index} className="text-xl text-white">
                  {tool.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-2 relative bg-gray-900 text-white shadow-lg rounded-lg overflow-hidden h-96">
          <img className="w-full h-full object-cover absolute inset-0 z-0" src={projects[3].image} alt={projects[3].title} />
          <div className="relative p-6 z-10 bg-opacity-50 bg-black h-full flex flex-col justify-end">
            <h3 className="font-bold text-2xl mb-2">{projects[3].title}</h3>
            <p className="text-gray-300 text-base">{projects[3].description}</p>
            <div className="flex space-x-4 mt-4">
              <a href={projects[3].liveDemoLink} className="text-blue-500 hover:text-blue-700 font-bold">
                Live Demo
              </a>
              <a href={projects[3].githubLink} className="text-blue-500 hover:text-blue-700 font-bold">
                GitHub
              </a>
            </div>
            <div className="absolute top-4 right-4 flex flex-col space-y-2">
              {projects[3].tools.map((tool, index) => (
                <div key={index} className="text-xl text-white">
                  {tool.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
