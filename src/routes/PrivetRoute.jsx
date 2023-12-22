import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../utils/hooks/useAuth";


const PrivetRoute = ({ children }) => {

    const { loading, user } = useAuth();
    const location = useLocation()


    if (loading)
        return <div className="w-full h-screen flex justify-center items-center"><span className="loading text-primary-green loading-ring loading-lg"></span></div>

    if (user) {
        return children
    } else {
        return <Navigate to='/login' state={location?.state} replace></Navigate>
    }
};

export default PrivetRoute;