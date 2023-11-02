import { createBrowserRouter } from "react-router-dom";

import { App } from "./App";
import { StudyPage } from "./pages/StudyPage";
import { SignUpPage } from "./pages/SignUpPage";
import { UserPage } from "./pages/UserPage";
import { IntroducePage } from "./pages/IntroducePage";
import { NoticePage } from "./pages/NoticePage";
import { Lab } from "./pages/Lab";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/study",
        element: <StudyPage />,
        children: [
          {
            path: ":setName",
            element: <StudyPage />,
          },
        ],
      },
      {
        path: "/signUp",
        element: <SignUpPage />,
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
      {
        path: "Lab",
        element: <Lab />,
      },
    ],
  },
]);
