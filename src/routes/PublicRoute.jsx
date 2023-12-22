import { Navigate } from "react-router-dom";
import useAuth from "../utils/hooks/useAuth";



const PublicRoute = ({ children }) => {

    const { loading, user } = useAuth();

    if (loading)
        return <div className="w-full h-screen flex justify-center items-center"><span className="loading text-primary-green loading-ring loading-lg"></span></div>

    if (user) {
        return <Navigate to='/'></Navigate>
    } else {
        return children
    }
};

export default PublicRoute;