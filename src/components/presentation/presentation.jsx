import { HashLink as Link } from 'react-router-hash-link';

function Presentation() {
  return (
    <div className="presentation-container w-full p-0">
      <Link 
        to="#about" 
        smooth 
        className="block w-full p-10 sm:p-20 md:p-40 mt-20 bg-custom-gradient"
      >
        <h5 className="mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
          ERIK YANG
        </h5>
        <p className="mb-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-gray-700 dark:text-white">
          FULL STACK WEB <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">DEVELOPER</span>
        </p>
        <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-normal text-gray-700 dark:text-white">
          Passionate developer skilled in front-end design and back-end development. I create seamless user experiences and robust applications.
        </p>
      </Link>
    </div>
  );
}

export default Presentation;
