import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import { useState } from 'react';
import SideDrawer from './Components/SideDrawer';
import BackDrop from './Components/Backdrop';
import BlackBox from './Components/BlackBox';
import IconSection from './Components/UniqueComponents/IconSection';
import Intro from './Components/Intro/Intro';
import Whyatlanwa from './Components/WhyAtlanwa/Whyatlanwa';
import OurSoln from './Components/OurSolutions/OurSoln';
import ThreeDprinting from './Components/Printing3D/ThreeDprinting';
import Services from './Screens/Services';
import WeServe from './Screens/WeServe';
import BMS from './Components/BMS/BMS';
import Soln from './Components/Soln';
import WebMob from './Components/WebMob';
import Robo from './Robotics/Robo';
import Footer from './Components/Footer/Footer';
import BMS2 from './Components/BMS/BMS2';
import CombinedDisplay from './Components/CombinedDisplay/CombinedDisplay';
import Drone from './Components/Drone/Drone';
import RandD from './Components/RandD/RandD';
import Modelling from './Components/Modelling/Modelling';

function App() {
    const [sideToggle, setSideToggle] = useState(false);
  return (
    <div className="App">
          <Router>
              <Navbar click={() => setSideToggle(true)} />
              <BlackBox />
              <IconSection />
              
              <Intro />
              <Whyatlanwa />
              <OurSoln />
              <ThreeDprinting />
              <Services />
              <Soln />
              <Modelling/>
              <WebMob/>
              <WeServe />
              
              <BMS />
              <BMS2 />
              <Robo />
              <WeServe displayTime="2" />
              
              {/* <CombinedDisplay /> */}
              <Drone />
              <CombinedDisplay displayTime="2" />
              <RandD/>
              <Footer/>
              <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
              <BackDrop show={sideToggle} click={() => setSideToggle(false)} />
        </Router>
    </div>
  );
}

export default App;
