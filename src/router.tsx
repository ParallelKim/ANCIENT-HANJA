import { createBrowserRouter } from "react-router-dom";

import { App } from "./App";
import { StudyPage } from "./pages/StudyPage";
import { LoginPage } from "./pages/LoginPage";
import { UserPage } from "./pages/UserPage";
import { IntroducePage } from "./pages/IntroducePage";
import { NoticePage } from "./pages/NoticePage";

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
            { path: "/notice", element: <NoticePage /> },
            {
                path: "/",
                element: <IntroducePage />,
            },
        ],
    },
]);
