import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/features",
        element: <Home />,
      },
      {
        path: "/pricing",
        element: <Home />,
      },
      { 
        path: "/resource",
        element: <Home />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
