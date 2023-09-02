import {
  createBrowserRouter,
} from "react-router-dom";

import HomePage from "./pages/Homepage/HomePage.tsx";
import SwiperCardsPage from "./pages/SwiperCardsPage/SwiperCardsPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/card",
    element: <SwiperCardsPage/>,
  },
]);
