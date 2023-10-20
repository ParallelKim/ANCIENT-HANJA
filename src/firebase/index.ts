// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCG86sax9dL9xrIWalsVH2r14A-NK2q4Uw",
    authDomain: "ancient-hanja.firebaseapp.com",
    projectId: "ancient-hanja",
    storageBucket: "ancient-hanja.appspot.com",
    messagingSenderId: "163743091418",
    appId: "1:163743091418:web:d4c491fd6826bc883a73e3",
    measurementId: "G-XTNPLDVM69",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
