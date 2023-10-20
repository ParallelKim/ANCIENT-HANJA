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
    apiKey: "AIzaSyC_mbuBXtaN0KyEXi9fagpTVV_1YKsFB8g",
    authDomain: "ancient-chinese-a976b.firebaseapp.com",
    databaseURL:
        "https://ancient-chinese-a976b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ancient-chinese-a976b",
    storageBucket: "ancient-chinese-a976b.appspot.com",
    messagingSenderId: "574785476948",
    appId: "1:574785476948:web:a1ace61921d4dfe37890c1",
    measurementId: "G-CG80QMZJBX",
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
            <RouterProvider router={router} />
        </FirebaseAppProvider>
    </React.StrictMode>
);
