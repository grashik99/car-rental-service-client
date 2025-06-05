import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Error from "../pages/Error";
import HomeLayouts from "../layouts/HomeLayouts";
import Register from "../components/register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomeLayouts />,
      },
      {
        path: "/register",
        element: <Register/>
      }
    ],
  },
]);
