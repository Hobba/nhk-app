import React from 'react';
import {Button} from "@mui/material";

const AboutUs = () => {
    return (
        <div className="page">
            <h1 className="headline">Über Uns</h1>
            <Button variant="contained" color="primary" onClick={sendSyncMessage}>Sende eine Sync Message!</Button>
            <br/>
            <Button variant="contained" color="primary" onClick={sendPushNotification}>Sende eine Push Notification!</Button>
        </div>
    );
};

const sendSyncMessage = () => {
    console.log("Button geklickt.")
    if ('serviceWorker' in navigator && 'SyncManager' in window) {
        navigator.serviceWorker.ready.then((registration) => {
            registration.sync.register('send-meal-review');
        });
    } else {
        // Mach die Aktion ohne "Umwege".
    }
};

const sendPushNotification = () => {
    const title = 'Notification aus dem Code';
    const options = {
        body: 'Dies ist eine Notification, die im Code definiert ist.',
    };
    navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification(title, options)
            .then(r => console.log("Sent"))
            .catch(e => console.log(e));
    });
}

export default AboutUs;
