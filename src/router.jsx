import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./layouts/RootLayout";

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

