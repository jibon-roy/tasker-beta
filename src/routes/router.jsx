import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main/MainLayout";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import PublicRoute from "./PublicRoute";


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
    },
    {
        path: '/register',
        element: <PublicRoute><Register></Register></PublicRoute>
    },
    {
        path: '/login',
        element: <PublicRoute><Login></Login></PublicRoute>
    }
])

export default router;