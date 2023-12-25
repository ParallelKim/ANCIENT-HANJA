import { Outlet } from "react-router-dom";

import { logEvent } from "firebase/analytics";
import { Suspense, useEffect } from "react";
import { Header } from "./components/layout/Header";
import { analytics } from "./firebase/analytics";
import { Footer } from "./components/layout/Footer";
import { MessageManager } from "./managers/MessageManager";

export const App = () => {
  useEffect(() => {
    logEvent(analytics, "pageview");
  }, []);

  return (
    <div id="app" style={{ display: "flex", flexDirection: "column", overflowY: "scroll", overflowX: "hidden" }}>
      <MessageManager />
      <Header />
      <Suspense fallback={<div />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};
