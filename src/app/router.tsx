import { createBrowserRouter } from "react-router-dom";
import { App } from "./app";
import { NotFound } from "../components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // END (404)
  {
    path: "*",
    element: <NotFound />,
  },
])