import React from 'react';
import './App.css';
import FixedBottomNavigation from "./components/Navigation/FixedBottomNavigation";
import ResponsiveAppBar from "./components/AppBar/ResponsiveAppBar";


function App() {
  return (
      <>
        <ResponsiveAppBar />
        <FixedBottomNavigation />
      </>
  );
}

export default App;