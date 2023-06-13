import React from 'react';
import logo from './logo.png';
import './App.css';
import background from './background.jpg'
import Button from '@mui/material/Button';
import FullWidthTabs from './Navigation/FullWidthTabs'
import { LinkTab, LinkTabProps, handleChange }from './Navigation/NavTab'
import AboutUs from './Pages/AboutUs'
import Episodes from './Pages/Episodes'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


function App() {
  return (

  <Router>
        <Box sx={{ width: '100%' }}>
          <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
            <LinkTab label="About Us" to="/aboutus" />
            <LinkTab label="Episodes" to="/episodes" />
            <LinkTab label="Page Three" to="/pagethree" />
          </Tabs>
        </Box>

        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/episodes" element={<Episodes />} />
          {/* Add other routes for your application */}
        </Routes>
      </Router>
//     <div className="App">
//     <NavTab />
//       <header className="App-header">
//          <p>
//             Hier entsteht die neue Nerdhalkbugel Website.
//         </p>
//         <img src={logo} className="App-logo" />
//         <div>
//             <iframe className="Spotify-widget" src="https://open.spotify.com/embed/show/0izNTbydZKIgt1oY1p63vz?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
//
//
//       </header>
//     </div>
  );
}

export default App;