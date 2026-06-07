import DashboardTop from "./DashboardTop";
import Dashboard_Mid from "./Dashboard_Mid";
import Dashboard_Bottom from "./Dashboard_Bottom";
import DashboardMid from "./DashboardMid";

const Dashboard = () => {
    return (
        <div>
            <DashboardTop />
            <Dashboard_Mid />
            <DashboardMid />
            <Dashboard_Bottom />
        </div>
    );
};

export default Dashboard;