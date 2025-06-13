import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Error from "../pages/Error";
import HomeLayouts from "../layouts/HomeLayouts";
import Register from "../components/register/Register";
import PrivateRoute from "../privateRoute/PrivateRoute";
import AddCar from "../components/addCar/AddCar";
import MyCars from "../components/myCars/MyCars";
import AvailableCars from "../components/availableCars/AvailableCars";
import MyBooking from "../components/myBooking/MyBooking";
import LogIn from "../components/logIn/LogIn";
import Booknow from "../pages/Booknow";
import UpdateInfo from "../pages/UpdateInfo";
import Loading from "../pages/Loading";
import MyProfile from "../components/shared/MyProfile";
import UpdateProfile from "../components/shared/UpdateProfile";

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
        path: "logIn",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/myProfile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/availableCars",
        element: <AvailableCars />,
        loader: () => fetch("http://localhost:3000/cars/available"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/addCar",
        element: (
          <PrivateRoute>
            <AddCar />
          </PrivateRoute>
        ),
      },
      {
        path: "/myCars",
        element: (
          <PrivateRoute>
            <MyCars />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateCar/:id",
        element: (
          <PrivateRoute>
            <UpdateInfo />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:3000/car/${params.id}`),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/bookNow/:id",
        element: (
          <PrivateRoute>
            <Booknow />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:3000/car/${params.id}`),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/myBooking",
        element: (
          <PrivateRoute>
            <MyBooking />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
