import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { PlayingRules } from "../pages/playing-rules/playingRules";
import { RegisterRules } from "../pages/register-rules/registerRules";
const Home = React.lazy(() => import("../pages/home/home"));
const Result = React.lazy(
  () => import("../pages/result-schedule/resultSchedule")
);
const PlayOff = React.lazy(() => import("../pages/play-off/playOff"));
const Router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/result-schedule", element: <Result /> },
  { path: "/play-off", element: <PlayOff /> },
  { path: "/playing-rules", element: <PlayingRules /> },
  { path: "/register-rules", element: <RegisterRules /> },
]);

export default Router;
