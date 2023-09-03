import {createBrowserRouter,} from "react-router-dom";

import HomePage from "./pages/Homepage/HomePage.tsx";
import {FindPeoplePage} from "./pages/findPeoplePage/FindPeoplePage.tsx";
import {FindVacancyPage} from "./pages/FindeVacancyPage/FindVacancyPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/find-people",
    element: <FindPeoplePage/>,
  },
  {
    path: "/find-vacancy",
    element: <FindVacancyPage/>,
  },
]);
