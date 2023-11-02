import { Outlet } from "react-router-dom";

import { logEvent } from "firebase/analytics";
import { useEffect } from "react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { analytics } from "./firebase/analytics";

export const App = () => {
  useEffect(() => {
    logEvent(analytics, "pageview");
  }, []);

  return (
    <div id="app" style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
