import DashboardTop from "../Dashboard/DashboardTop";
import DashboardQuickAccess from "../Dashboard/DashboardQuickAccess";
import DashboardFeatures from "../Dashboard/DashboardFeatures";
import Dashboard_Bottom from "../Dashboard/Dashboard_Bottom";
import '../styles/home.css';

const Home = () => {
    return (
        <div>
            <DashboardTop />
            <DashboardQuickAccess />
            <DashboardFeatures />
            <Dashboard_Bottom />
        </div>
    );
};

export default Home;