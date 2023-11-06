
// import './App.css'
// import Navbar from './components/Navbar'

// function App() {

//   return (
//    <Navbar/>
//   )
// }

// export default App



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Theme from './pages/Theme';
import Code from './pages/Code';
import Video from './pages/Video';
import Audio from './pages/Audio';
import Graphic from './pages/Graphic';
import Photos from './pages/Photos';
import ThreeD from './pages/ThreeD';
import SubNavbar from './components/SubNavbar';


function App() {
  return (
    <Router>
      <Navbar />
      <SubNavbar/>
      <div>
        <Routes>
        <Route path="/theme" element={<Theme />} />
          <Route path="/code" element={<Code />} />
          <Route path="/video" element={<Video />} />
          <Route path="/audio" element={<Audio />} />
          <Route path="/graphic" element={<Graphic />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/threed" element={<ThreeD />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
