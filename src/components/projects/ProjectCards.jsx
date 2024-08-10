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
      title: "Ongoing Project",
      description: "E-commerce",
      image: "/e-commerce1.png",
      liveDemoLink: "https://www.erikyang.se/ecommerce/",
      githubLink: "https://github.com/QuantomErik/E-commerce",
      tools: [
        /* { icon: <FaJsSquare />, name: 'JavaScript' },
        { icon: <FaReact />, name: 'React' } */
      ],
      demoLogin: {
        username: "erik10",
        password: "erik10"
      }
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {projects.map((project, index) => (
          <div key={index} className="relative bg-gray-900 text-white shadow-lg rounded-lg overflow-hidden h-96">
            <img className="w-full h-full object-cover absolute inset-0 z-0" src={project.image} alt={project.title} />
            <div className="relative p-3 z-10 bg-opacity-50 bg-black h-full flex flex-col justify-end">
              <h3 className="font-bold text-2xl">{project.title}</h3>
              <p className="text-white text-base">{project.description}</p>
              <div className="flex space-x-4 mt-2">
                <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 font-bold">
                  Live Demo
                </a>
                {project.demonstrationLink && (
                  <a href={project.demonstrationLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 font-bold">
                    Demo Video
                  </a>
                )}
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 font-bold">
                  GitHub
                </a>
              </div>
              <div className="absolute top-4 right-4 flex flex-col space-y-2">
                {project.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="text-xl text-white">
                    {tool.icon}
                  </div>
                ))}
              </div>
              {project.demoLogin && (
                <div className="absolute bottom-4 right-4 bg-opacity-70 p-2 rounded text-white text-xs">
                  <p>Demo login:</p>
                  <p>username: {project.demoLogin.username}</p>
                  <p>password: {project.demoLogin.password}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCards;
