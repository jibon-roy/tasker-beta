import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main/MainLayout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>
    }
])

export default router;