/* function StartPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white pt-20">
      <h1 className="text-4xl font-bold mt-10">Welcome to My Portfolio</h1>
      <p className="mt-4 text-lg">This is the start page of my portfolio website.</p>
      
    </div>
  );
}

export default StartPage;
 */



import { HashLink as Link } from 'react-router-hash-link';
import About from '../about/About';
import Projects from '../projects/Projects';
import Presentation from '../presentation/presentation';
import Contact from '../contact/contact';

function StartPage() {
  return (
    <div className="pt-navbar bg-black">
      <div id="start" className="flex flex-col items-center min-h-screen  text-white">
     <Presentation /> 
      </div>

      <div> 
        <About />
      </div>
     
     <div>
     <Projects />
     </div>
     
     <div>
     <Contact />
     </div>
     
    </div>
  );
}

export default StartPage;


