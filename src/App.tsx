import React, {useEffect} from 'react';
import './App.css';
import FixedBottomNavigation from "./components/Navigation/FixedBottomNavigation";
import ResponsiveAppBar from "./components/AppBar/ResponsiveAppBar";
import {handleGetFirebaseToken} from "./components/Firebase/FirebaseConfig";

function App() {

    useEffect(() => {
        if (
            window.Notification?.permission === "granted"
        ) {
            handleGetFirebaseToken();
        }
    }, []);

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
