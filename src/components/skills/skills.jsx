import ComputerIcon from '@mui/icons-material/Computer';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';
import SettingsIcon from '@mui/icons-material/Settings';

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
          JavaScript, HTML, CSS, React, Flutter/Dart, Bootstrap, Tailwind
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
            {/* Node.js, Java, Express, MongoDB, Python, Django, PostgreSQL RESTful APIs, WebSocket, JsonWebToken, Micro Services */}
            Node.js, Express, Python, Django, Java, MongoDB, PostgreSQL, RESTful APIs, WebSocket, Microservices
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
            Redux, Jest, Testcafe, Bcrypt, WebSocket
          </p>
        </div>
      </div>

      <div className="flex-1 min-w-0 max-w-xs md:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3 skill-card">
        <div className="flex justify-center items-center bg-red-500 rounded-t-lg p-5">
          <SettingsIcon style={{ fontSize: 48, color: 'white' }} />
        </div>
        <div className="p-5">
          <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">DevOps & Tools</h5>
          <p className="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400">
            GitHub, GitLab, CI/CD, Docker, NginX, Ubuntu, AWS
          </p>
        </div>
      </div>

    </div>
  );
};

export default Skills;













