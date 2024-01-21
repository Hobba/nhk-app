import { initializeApp } from "firebase/app";
import { getToken, getMessaging } from "firebase/messaging";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

export const firebaseApp = initializeApp(firebaseConfig);

export const messaging = getMessaging(firebaseApp);

export const getOrRegisterServiceWorker = async () => {
    if (
        "serviceWorker" in navigator &&
        typeof window.navigator.serviceWorker !== "undefined"
    ) {
        const serviceWorker = await window.navigator.serviceWorker
            .getRegistration("/firebase-push-notification-scope");
        if (serviceWorker)
            return serviceWorker;
        return window.navigator.serviceWorker.register(
            "/firebase-messaging-sw.js",
            {
                scope: "/firebase-push-notification-scope",
            }
        );
    }
    throw new Error("The browser does not support service worker.");
};

const getFirebaseToken = async () => {
    try {
        const messagingResolve = await messaging;
        if (messagingResolve) {
            return getOrRegisterServiceWorker().then((serviceWorkerRegistration) => {
                return Promise.resolve(
                    getToken(messagingResolve, {
                        vapidKey: 'BEJqWg1t1aIfHMFk7JGj9h5jaEYjebNLjNCx1iokFPipZf7QwHCU2bFwuy2PADO6JJHaqb5Egs9t4hlPC9PerPk',
                        serviceWorkerRegistration,
                    })
                );
            });
        }
    } catch (error) {
        console.log("An error occurred while retrieving token. ", error);
    }
};

export const handleGetFirebaseToken = () => {
    getFirebaseToken().then((firebaseToken: string | undefined) => {
        if (firebaseToken) {
            console.log(firebaseToken);
        }
    });
};
