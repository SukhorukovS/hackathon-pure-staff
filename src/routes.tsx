import {
  createBrowserRouter,
} from "react-router-dom";

import HomePage from "./pages/Homepage/HomePage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);
