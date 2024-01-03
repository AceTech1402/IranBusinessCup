import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Paths from "../constants/paths";
import { PlayingRules } from "../pages/playing-rules/playingRules";
import { RegisterRules } from "../pages/register-rules/registerRules";
const Home = React.lazy(() => import("../pages/home/home"));
const Result = React.lazy(
  () => import("../pages/result-schedule/resultSchedule")
);
const PlayOff = React.lazy(() => import("../pages/play-off/playOff"));
const Router = createBrowserRouter([
  { path: Paths.HOME, element: <Home /> },
  { path: Paths.RESULT, element: <Result /> },
  { path: Paths.PLAYOFF, element: <PlayOff /> },
  { path: Paths.playingRules, element: <PlayingRules /> },
  { path: Paths.registerRules, element: <RegisterRules /> },
]);

export default Router;
