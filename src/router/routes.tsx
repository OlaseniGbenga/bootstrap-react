import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/home";
import Login from "@/pages/login";
import { ROUTES } from "@/utils/constants";

const router = createBrowserRouter([
  {
    path: ROUTES.AUTH.LOGIN,
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
