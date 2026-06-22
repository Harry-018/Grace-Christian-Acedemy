import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/Landingpage.jsx";
import NotFound from "./NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
