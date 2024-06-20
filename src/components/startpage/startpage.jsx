/* import { HashLink as Link } from 'react-router-hash-link'; */
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


