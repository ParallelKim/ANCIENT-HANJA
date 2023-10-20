// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCKqsZOHuM1IMcEtZac67-tYx3DqD9LR4",
    authDomain: "ancient-chinise.firebaseapp.com",
    projectId: "ancient-chinise",
    storageBucket: "ancient-chinise.appspot.com",
    messagingSenderId: "1016819812350",
    appId: "1:1016819812350:web:72a7e3d1aea6c8e117e2af",
    measurementId: "G-B7SR6P4ESF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
