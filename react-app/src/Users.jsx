import { useState, useEffect } from "react"
import { initializeApp } from "firebase/app";


export default function Users(props) {
    const [users, setUsers] = useState([]);

    const firebaseConfig = {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,      
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,     
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,      
        storageBucket: import.meta.env.VITE_FIRABASE_STORAGE_BUCKET,      
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,      
        appId: import.meta.env.VITE_FIREBASE_APP_ID
    };

    const app = initializeApp(firebaseConfig);

    useEffect(function() {
        console.log('firebaseConfig.apiKey.length: ', firebaseConfig.apiKey?.length)
        console.log('App: ', app)
    }, []);


    return (
        <>
            {JSON.stringify(users)}
        </>
    )
}