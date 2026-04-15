import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../pages/Home";
import Timeline from "../pages/Timeline";
import Stats from "../pages/Stats";
import FriendsDetails from "../pages/FriendsDetails";
import Errorpage from "../pages/Errorpage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Errorpage />,
    children: [
      { index: true, Component: Home },
      { path: "/timeline", Component: Timeline },
      { path: "/stats", Component: Stats },
      {
        path: "/friendsDetails/:id",
        loader: () => fetch("/data.json"),
        Component: FriendsDetails,
      },
    ],
  },
  {
    path: "*",
    Component: Errorpage,
  },
]);
