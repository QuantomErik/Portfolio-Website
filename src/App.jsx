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


