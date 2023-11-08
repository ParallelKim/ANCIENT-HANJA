import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import { App } from "./App";

const StudyPage = lazy(() => import("./pages/StudyPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const UserPage = lazy(() => import("./pages/UserPage"));
const IntroducePage = lazy(() => import("./pages/IntroducePage"));
const NoticePage = lazy(() => import("./pages/NoticePage"));
const Lab = lazy(() => import("./pages/Lab"));

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
