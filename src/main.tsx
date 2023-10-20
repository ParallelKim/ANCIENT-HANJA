import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { FirebaseAppProvider } from "reactfire";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./index.css";
import { router } from "./router";

const firebaseConfig = {
    apiKey: "AIzaSyCG86sax9dL9xrIWalsVH2r14A-NK2q4Uw",
    authDomain: "ancient-hanja.firebaseapp.com",
    projectId: "ancient-hanja",
    storageBucket: "ancient-hanja.appspot.com",
    messagingSenderId: "163743091418",
    appId: "1:163743091418:web:d4c491fd6826bc883a73e3",
    measurementId: "G-XTNPLDVM69",
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
            <RouterProvider router={router} />
        </FirebaseAppProvider>
    </React.StrictMode>
);
