// import API from "./api";

// export const getDashboardStats = async () => {

//     const token = localStorage.getItem("token");

//     return API.get("/dashboard/stats", {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     });

// };

import API from "./api";

const getAuthHeaders = () => {
    const token = localStorage.getItem("token");

    return {
        Authorization: `Bearer ${token}`
    };
};

// ============================
// Inventory Dashboard
// ============================
export const getDashboardStats = () => {
    return API.get("/dashboard/stats", {
        headers: getAuthHeaders()
    });
};

// ============================
// AI Dashboard Summary
// ============================
export const getAISummary = () => {
    return API.get("/dashboard/summary", {
        headers: getAuthHeaders()
    });
};

// ============================
// Analysis History
// ============================
export const getAnalysisHistory = () => {
    return API.get("/dashboard/history", {
        headers: getAuthHeaders()
    });
};

// ============================
// Material Distribution
// ============================
export const getMaterialDistribution = () => {
    return API.get("/dashboard/materials", {
        headers: getAuthHeaders()
    });
};

// ============================
// Damage Distribution
// ============================
export const getDamageDistribution = () => {
    return API.get("/dashboard/damage", {
        headers: getAuthHeaders()
    });
};

// ============================
// Quality Distribution
// ============================
export const getQualityDistribution = () => {
    return API.get("/dashboard/quality", {
        headers: getAuthHeaders()
    });
};

// ============================
// Recommendation Distribution
// ============================
export const getRecommendationDistribution = () => {
    return API.get("/dashboard/recommendations", {
        headers: getAuthHeaders()
    });
};

export const getSustainabilitySummary = () => {
    return API.get("/dashboard/sustainability-summary");
};