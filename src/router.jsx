import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./layouts/Rootlayout";




const router = createBrowserRouter([

    {
        path: "/",
        element: <RootLayout />,
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

