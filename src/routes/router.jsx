import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main/MainLayout";
import Home from "../pages/home/Home";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default router;