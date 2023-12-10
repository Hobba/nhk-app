import React from 'react';
import './App.css';
import FixedBottomNavigation from "./components/Navigation/FixedBottomNavigation";
import ResponsiveAppBar from "./components/AppBar/ResponsiveAppBar";


function App() {
    if ("serviceWorker" in navigator && "SyncManager" in window) {
        navigator.serviceWorker.ready.then(registration => {
            registration.sync.register("send-meal-review");
        });
    }

    // Notification.requestPermission().then(function(permission) {});

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
