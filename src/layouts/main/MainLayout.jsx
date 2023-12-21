import { Outlet } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar/NavigationBar";


const MainLayout = () => {
    return (
        <>
            <div className="w-full">
                <NavigationBar></NavigationBar>
            </div>
            <div className="container mx-auto px-3">
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default MainLayout;