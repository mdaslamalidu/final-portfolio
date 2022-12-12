import { createBrowserRouter } from "react-router-dom";
import Details from "../components/pages/Details";
import Home from "../components/pages/Home/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/details/:id",
    element: <Details></Details>,
    loader: ({ params }) => `http://localhost:3001/details/${params.id}`,
  },
]);
