import { createBrowserRouter } from "react-router";
import App from "../App";
import { routes } from "./routes";
export const router = createBrowserRouter([
  {
    path: routes.home,

    Component: App,
  },
]);
