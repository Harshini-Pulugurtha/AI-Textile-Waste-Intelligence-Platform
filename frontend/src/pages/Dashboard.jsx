import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import SummaryCard from "../components/dashboard/SummaryCard";
import DashboardCharts from "../components/dashboard/DashboardCharts";


import RecentInventory from "../components/dashboard/RecentInventory";

import {
    FaBoxes,
    FaWeightHanging,
    FaLayerGroup,
    FaCalendarDay,
    FaUserCircle,
    FaArrowRight
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
    getDashboardStats,
    getMaterialDistribution,
    getQualityDistribution,
    getAnalysisHistory,
    getSustainabilitySummary
} from "../services/dashboardService";
import SustainabilityDashboard from "../components/dashboard/SustainabilityDashboard";
import "./Dashboard.css";

const initialStats = {
    total_inventory: 0,
    total_quantity: 0,
    fabric_types: 0,
    today_entries: 0,
    recent_inventory: []
};


const getStoredUser = () => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
        return null;
    }

    try {
        return JSON.parse(storedUser);
    } catch (error) {
        console.error("Invalid user data in localStorage", error);
        return null;
    }
};

function Dashboard() {
    const navigate = useNavigate();
    const user = getStoredUser();
    const [stats, setStats] = useState(initialStats);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [materials,setMaterials]=useState({});

    const [quality,setQuality]=useState({});
    const [history, setHistory] = useState([]);

    const [sustainability, setSustainability] = useState({
        total_co2_saved: 0,
        total_water_saved: 0,
        total_landfill_saved: 0,
        average_sustainability: 0,
        average_circularity: 0,
        average_eco_rating: 0
    });

    
    const today = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    useEffect(() => {
        let isMounted = true;

        const loadDashboard = async () => {
            try {

                setLoading(true);

                const response = await getDashboardStats();
                const materialResponse = await getMaterialDistribution();

                const qualityResponse = await getQualityDistribution();
                const historyResponse = await getAnalysisHistory();
                const sustainabilityResponse = await getSustainabilitySummary();

                if (!isMounted) return;

                setMaterials(materialResponse.data);

                setQuality(qualityResponse.data);
                setHistory(historyResponse.data);
                setSustainability(sustainabilityResponse.data);

                if (!isMounted) return;

                setStats({
                    ...initialStats,
                    ...response.data,
                    recent_inventory: Array.isArray(response.data?.recent_inventory)
                        ? response.data.recent_inventory
                        : []
                });

                setErrorMessage("");

            } catch (error) {

                console.error(error);

                if (isMounted) {
                    setErrorMessage(
                            "Unable to load dashboard. Please refresh the page or login again."
                        );
                }

            } finally {

                if (isMounted) {
                    setLoading(false);
                }

            }
        };

        loadDashboard();

        return () => {
            isMounted = false;
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
    };

    const recentInventory = Array.isArray(stats.recent_inventory)
        ? stats.recent_inventory
        : [];
    if (loading) {
    return (
        <>
            <Navbar />
            <div className="dashboard-loading">
                <div className="loader"></div>
                <p>Loading Dashboard...</p>
            </div>
            <Footer />
        </>
    );
}

    return (
        <>
            <Navbar />

            {errorMessage && (
                <div className="dashboard-error">
                    {errorMessage}
                </div>
            )}

            <div className="dashboard-container dashboard-page">
                <WelcomeBanner
                    user={user}
                    today={today}
                    onAnalyze={() => navigate("/analyze")}
                />

                <div className="summary-grid">

                        <SummaryCard
                            title="Total Inventory"
                            value={stats.total_inventory}
                            icon={FaBoxes}
                            color="blue"
                        />

                        <SummaryCard
                            title="Total Quantity"
                            value={`${stats.total_quantity} kg`}
                            icon={FaWeightHanging}
                            color="green"
                        />

                        <SummaryCard
                            title="Fabric Types"
                            value={stats.fabric_types}
                            icon={FaLayerGroup}
                            color="orange"
                        />

                        <SummaryCard
                            title="Today's Entries"
                            value={stats.today_entries}
                            icon={FaCalendarDay}
                            color="red"
                        />

                    </div>
                    <SustainabilityDashboard
                        sustainability={sustainability}
                    />

                    <h2 className="section-title">
                            Dashboard Analytics
                        </h2>

                        <DashboardCharts
                            materials={materials}
                            quality={quality}
                        />
                   
                <div className="profile-card">

                    <div className="profile-header">

    <FaUserCircle className="profile-avatar" />

    <div className="profile-info">
        <h2>{user?.full_name}</h2>
        <p>{user?.role}</p>
    </div>

</div>
                        <hr/>

                        <h3>User Details</h3>
                    <div className="profile-grid">
                        <div className="profile-item">
                            <label>Full Name</label>
                            <p>{user?.full_name || "Not Available"}</p>
                        </div>

                        <div className="profile-item">
                            <label>Email</label>
                            <p>{user?.email || "Not Available"}</p>
                        </div>

                        <div className="profile-item">
                            <label>Role</label>
                            <p>{user?.role || "Not Available"}</p>
                        </div>

                        <div className="profile-item">
                            <label>Organization</label>
                            <p>{user?.organization || "Not Available"}</p>
                        </div>
                    </div>
                </div>


                    {recentInventory.length > 0 ? (
                        <RecentInventory inventory={recentInventory} />
                    ) : (
                        <div className="empty-card">
                            No inventory records found.
                        </div>
                    )}

            </div>

            <Footer />
        </>
    );
}

export default Dashboard;