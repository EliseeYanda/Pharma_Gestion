import DashBoardNavBar from "../dashboard-navbar/dashboard-navbar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
    return(
        <>
            
            <nav>
                <DashBoardNavBar/>
            </nav>
            <main>
                <Outlet/>
            </main>
        </>
    );
}

export default DashboardLayout;