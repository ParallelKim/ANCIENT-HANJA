import { Outlet } from "react-router-dom";

import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { SessionManager } from "./managers/SessionManager";
import { AuthProvider, DatabaseProvider, useFirebaseApp } from "reactfire";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

export const App = () => {
    const app = useFirebaseApp();
    const auth = getAuth(app);
    const database = getDatabase(app);

    return (
        <div id="app">
            <AuthProvider sdk={auth}>
                <DatabaseProvider sdk={database}>
                    <SessionManager />
                </DatabaseProvider>
            </AuthProvider>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};
