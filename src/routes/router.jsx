import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main/MainLayout";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import PublicRoute from "./PublicRoute";
import PrivetRoute from "./PrivetRoute";
import DashboardLayout from "../layouts/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import AddTask from "../pages/dashboard/addTask/AddTask";
import MyTasks from "../pages/dashboard/myTasks/MyTasks";


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
        path: '/dashboard',
        element: <PrivetRoute><DashboardLayout></DashboardLayout></PrivetRoute>,
        children: [
            {
                path: '/dashboard/home',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/my-tasks',
                element: <MyTasks></MyTasks>
            },
            {
                path: '/dashboard/add',
                element: <AddTask></AddTask>
            },
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