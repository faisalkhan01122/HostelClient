import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Rootlayout from "./layouts/Rootlayout";
const router = createBrowserRouter([

    {
        path: "/",
        element: <Rootlayout />,
        // errorElement: <ErrorPage />,

        children: [

            {
path: "/",
element: <HomePage />,
            }
        ]
    },

]);
export default router;

