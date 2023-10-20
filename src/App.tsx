import { Outlet } from "react-router-dom";

import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

export const App = () => {
    return (
        <div id="app">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};
