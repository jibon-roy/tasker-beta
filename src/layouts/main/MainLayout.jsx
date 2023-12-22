import { Outlet } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Footer from "../../components/footer/Footer";


const MainLayout = () => {
    return (
        <>
            <div className="w-full">
                <NavigationBar></NavigationBar>
            </div>
            <div className="container mx-auto">
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </>
    );
};

export default MainLayout;