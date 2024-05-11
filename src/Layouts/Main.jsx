import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Main = () => {
    return (
        <div>
            {/* nav */}
            <Navbar/>
            {/* outlet */}
            <div className="min-h-[calc(100vh-270px)]">
            <Outlet/>
            </div>
            {/* footer */}
            <Footer/> 
        </div>
    );
};

export default Main;