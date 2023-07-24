import React from 'react';
import './App.css';
import FixedBottomNavigation from "./components/Navigation/FixedBottomNavigation";
import ResponsiveAppBar from "./components/AppBar/ResponsiveAppBar";


function App() {
    return (
        <main>
            <div>
                <ResponsiveAppBar/>
                <FixedBottomNavigation/>
            </div>
        </main>
    );
}

export default App;