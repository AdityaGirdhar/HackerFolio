import './scss/_base.scss';
import { useState } from 'react';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Team from './pages/Team';
import Navbar from './pages/Navbar';
import Footer from './components/Footer';
import { HashRouter, Navigate, Routes, Route } from 'react-router-dom';

function App() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isNavLoaded, setIsNavLoaded] = useState(false)

  return (
    <div className="App">
      <HashRouter>
        <Navbar isNavExpanded={isNavExpanded} setIsNavExpanded={setIsNavExpanded} setIsNavLoaded={setIsNavLoaded}/>
        <Routes>
          <Route path="/home" element={<Home isBlur={isNavExpanded} isNavLoaded={isNavLoaded}/>} />
          <Route path="/schedule" element={<Schedule isBlur={isNavExpanded}/>} />
          <Route path="/contact" element={<Contact isBlur={isNavExpanded}/>} />
          <Route path="/info" element={<Faq isBlur={isNavExpanded}/>} />
          <Route path="/team" element={<Team isBlur={isNavExpanded}/>} />
          <Route
            path="*"
            element={<Navigate to="/home" replace />}
          />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
