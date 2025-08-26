import { createBrowserRouter} from "react-router-dom";

import Login from "@/pages/login";
import { ROUTES } from "@/utils/constants";

const router = createBrowserRouter([
  {
    path: ROUTES.AUTH.LOGIN,
    element: <Login />,
  },
]);

export default router;
