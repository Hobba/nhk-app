import React from 'react';
import logo from './logo.png';
import './App.css';
import background from './background.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <p>
            Hier entsteht die neue Nerdhalkbugel Website.
        </p>
        <img src={logo} className="App-logo" />
        <div>
            <iframe className="Spotify-widget" src="https://open.spotify.com/embed/show/0izNTbydZKIgt1oY1p63vz?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </header>
    </div>
  );
}

export default App;