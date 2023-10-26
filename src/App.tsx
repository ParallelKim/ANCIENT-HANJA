import { Outlet } from "react-router-dom";

import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { SessionManager } from "./managers/SessionManager";
import { AuthProvider, useFirebaseApp } from "reactfire";
import { getAuth } from "firebase/auth";

export const App = () => {
    const app = useFirebaseApp();
    const auth = getAuth(app);

    return (
        <div id="app">
            <AuthProvider sdk={auth}>
                <SessionManager />
            </AuthProvider>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};
