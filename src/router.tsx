import { createBrowserRouter } from "react-router-dom";

import { App } from "./App";
import { StudyPage } from "./pages/StudyPage";
import { LoginPage } from "./pages/LoginPage";
import { UserPage } from "./pages/UserPage";
import { IntroducePage } from "./pages/IntroducePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/study",
                element: <StudyPage />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/user",
                element: <UserPage />,
            },
            {
                path: "/intro",
                element: <IntroducePage />,
            },
        ],
    },
]);
