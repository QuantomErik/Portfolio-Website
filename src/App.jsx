
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
