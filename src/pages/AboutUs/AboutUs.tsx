import React from 'react';
import {Button} from "@mui/material";

const AboutUs = () => {
    return (
        <div className="page">
            <h1 className="headline">Über Uns</h1>
            <Button variant="contained" color="primary" onClick={handleClick}>Sende eine Sync Message!</Button>
        </div>
    );
};

const handleClick = () => {
    console.log("Button geklickt.")
    if ('serviceWorker' in navigator && 'SyncManager' in window) {
        navigator.serviceWorker.ready.then((registration) => {
            registration.sync.register('send-meal-review');
        });
    } else {
        // Mach die Aktion ohne "Umwege".
    }
};

export default AboutUs;
