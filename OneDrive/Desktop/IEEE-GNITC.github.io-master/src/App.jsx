// src/App.jsx
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';

// Pages
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import Events from './Pages/Events';
import Home from './Pages/Home';
import Nav from './Pages/Nav';
import Societies from './Pages/Societies';
import ComputerSociety from './Pages/societies/ComputerSociety';
import CommunicationSociety from './Pages/societies/CommunicationSociety';
import CircuitsAndSystemsSociety from './Pages/societies/CircuitsAndSystemsSociety';
import FacltyAdv from './Pages/FacltyAdv';
import TopLeadership from './Pages/TopLeadership';
import AllEvents from './Pages/AllEvents';
import FutureEventTimeLine from './Pages/FutureEventTimeLine';
import Collaborators from './Pages/Collaborators';
import VirtualVista2 from './Pages/events/computersociety/VirtualVista2';
import AIMastery from './Pages/events/computersociety/AIMastery';
import TechIgnition from './Pages/events/main/TechIgnition';
import Team from './Pages/Team';
import PreviousTeam from './Pages/PreviousTeam';
import Tech from './Pages/tech';
import Orientation from './Pages/Orientation';
import EngineersDay from './Pages/eng'; // ✅ File is eng.jsx

// Assets
import bgVideo from './assets/bg.mp4';

const App1 = () => {
  return (
    <>
      <Element name="home"><Home /></Element>
      <Element name="aboutus"><AboutUs /></Element>
      <Element name="societies"><Societies /></Element>
      <Element name="events"><Events /></Element>
      <Element name="futureevents"><FutureEventTimeLine /></Element>
      <Element name="topleadership"><TopLeadership /></Element>
      <Element name="advisors"><FacltyAdv /></Element>
      <Element name="team"><Team /></Element>
      <Element name="collaborators"><Collaborators /></Element>
      <Element name="contact"><Contact /></Element>
    </>
  );
};

const App = () => {
  return (
    <>
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="bg-video fixed top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="content-overlay relative z-10">
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<App1 />} />
            <Route path="/ComputerSociety" element={<ComputerSociety />} />
            <Route path="/CommunicationSociety" element={<CommunicationSociety />} />
            <Route path="/CircuitsAndSystemsSociety" element={<CircuitsAndSystemsSociety />} />
            <Route path="/events" element={<AllEvents />} />
            <Route path="/events/VirtualVista" element={<VirtualVista2 />} />
            <Route path="/events/TechIgnition" element={<TechIgnition />} />
            <Route path="/events/AIMastery" element={<AIMastery />} />
            <Route path="/PreviousTeam" element={<PreviousTeam />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/orientation" element={<Orientation />} />
            <Route path="/engineersday" element={<EngineersDay />} /> {/* ✅ Redirect works */}
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
