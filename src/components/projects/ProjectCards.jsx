import { FaJsSquare, FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { SiExpress, SiJest, SiNginx, SiGitlab, SiUbuntu, SiVite } from 'react-icons/si';

const ProjectCards = () => {
  const projects = [
    {
      title: "Petsee",
      description: "Fully responsive pet monitoring application.",
      image: "/Petsee.png",
      liveDemoLink: "https://erikyang.se/petsee",
      demonstrationLink: "https://youtu.be/SSLkgu32rXA",
      githubLink: "https://github.com/QuantomErik/Petsee-Pet-Monitor",
      tools: [
        { icon: <FaJsSquare className="text-blue-500" />, name: 'JavaScript' },
        { icon: <FaReact className="text-blue-500" />, name: 'React' },
        { icon: <FaNodeJs className="text-green-500" />, name: 'Node.js' },
        { icon: <DiMongodb className="text-green-500" />, name: 'MongoDB' },
        { icon: <SiExpress className="text-green-500" />, name: 'Express' },
      { icon: <SiNginx className="text-red-500" />, name: 'NginX' },
      { icon: <SiGitlab className="text-red-500" />, name: 'GitLab' },
      { icon: <SiUbuntu className="text-red-500" />, name: 'Ubuntu' },
      { icon: <SiJest className="text-purple-500" />, name: 'Jest' },
      ]
    },
    {
      title: "Upcoming Project",
      /* description: "Description for project two.", */
      image: "frontend.webp",
      liveDemoLink: "#",
      githubLink: "#",
      tools: [
        /* { icon: <FaJsSquare />, name: 'JavaScript' },
        { icon: <FaReact />, name: 'React' } */
      ]
    },
    {
      title: "Upcoming Project",
      /* description: "Description for project three.", */
      image: "backend1.jpg",
      liveDemoLink: "#",
      githubLink: "#",
      tools: [
       /*  { icon: <FaNodeJs />, name: 'Node.js' },
        { icon: <DiMongodb />, name: 'MongoDB' } */
      ]
    },
    {
      title: "PWA",
      description: "Progressive web application containing a memory game, realtime chat and a weather app.",
      image: "/PWA.png",
      liveDemoLink: "https://unique-macaron-88f8eb.netlify.app",
      githubLink: "https://github.com/QuantomErik/PWA",
      tools: [
        { icon: <FaJsSquare className="text-blue-500" />, name: 'JavaScript' },
        { icon: <FaHtml5 className="text-blue-500" />, name: 'HTML5' },
        { icon: <FaCss3Alt className="text-blue-500" />, name: 'CSS3' },
        { icon: <SiVite className="text-purple-500" />, name: 'Vite' },
      ]
    }
  ];

  return (
    <div className="container mx-auto p-6">

<h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="col-span-2 relative bg-gray-900 text-white shadow-lg rounded-lg overflow-hidden h-96">
          <img className="w-full h-full object-cover absolute inset-0 z-0" src={projects[0].image} alt={projects[0].title} />
          <div className="relative p-6 z-10 bg-opacity-50 bg-black h-full flex flex-col justify-end">
            <h3 className="font-bold text-2xl">{projects[0].title}</h3>
            <p className="text-white text-base">{projects[0].description}</p>
            <div className="flex space-x-4 mt-2">
              <a href={projects[0].liveDemoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 font-bold">
                Live Demo
              </a>
              <a href={projects[0].demonstrationLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 font-bold">
                Demo Video
              </a>
              <a href={projects[0].githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 font-bold">
                GitHub
              </a>
            </div>
            <div className="absolute top-4 right-1 flex flex-col space-y-2">
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
            <p className="text-white text-base">{projects[1].description}</p>
            <div className="flex space-x-4 mt-4">
              {/* <a href={projects[1].liveDemoLink} className="text-blue-500 hover:text-blue-700 font-bold">
                Live Demo
              </a>
              <a href={projects[1].githubLink} className="text-blue-500 hover:text-blue-700 font-bold">
                GitHub
              </a> */}
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
          <div className="relative p-2 z-10 bg-opacity-50 bg-black h-full flex flex-col justify-end">
          
            <h3 className="font-bold text-2xl">{projects[2].title}</h3>
            <p className="text-white text-base">{projects[2].description}</p>
            <div className="flex space-x-4 mt-4">
              {/* <a href={projects[2].liveDemoLink} className="text-blue-500 hover:text-blue-700 font-bold">
                Live Demo
              </a>
              <a href={projects[2].githubLink} className="text-blue-500 hover:text-blue-700 font-bold">
                GitHub
              </a> */}
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
            <h3 className="font-bold text-2xl mb-">{projects[3].title}</h3>
            <p className="text-white text-base">{projects[3].description}</p>
            <div className="flex space-x-4 mt-2">
              <a href={projects[3].liveDemoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 font-bold">
                Live Demo
              </a>
              <a href={projects[3].githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 font-bold">
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
