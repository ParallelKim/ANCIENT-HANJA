import { Outlet } from "react-router-dom";

import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { SessionManager } from "./managers/SessionManager";

export const App = () => {
    return (
        <div
            id="app"
            style={{ display: "flex", flexDirection: "column" }}
        >
            <SessionManager />
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};
