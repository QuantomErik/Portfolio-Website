/* 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './components/startpage/startpage';
import About from './components/about/About';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
 */


import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import StartPage from './components/startpage/startpage';
/* import Projects from './components/projects/Projects'; */

function App() {
  return (
    <Router>
      <Navbar />
      <StartPage />
      {/* <Projects /> */}
    </Router>
  );
}

export default App;


