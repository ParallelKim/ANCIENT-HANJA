import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCG86sax9dL9xrIWalsVH2r14A-NK2q4Uw",
    authDomain: "ancient-hanja.firebaseapp.com",
    databaseURL:
        "https://ancient-hanja-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ancient-hanja",
    storageBucket: "ancient-hanja.appspot.com",
    messagingSenderId: "163743091418",
    appId: "1:163743091418:web:d4c491fd6826bc883a73e3",
    measurementId: "G-XTNPLDVM69",
};

export const app = initializeApp(firebaseConfig);
