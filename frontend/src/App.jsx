import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Inventory from "./pages/Inventory";
import CompleteProfile from "./pages/CompleteProfile";
import Analyze from "./pages/Analyze";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

import AnalysisHistory from "./pages/AnalysisHistory";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

    return (

        <Routes>

            {/* Public Routes */}

            <Route
                path="/"
                element={<Home />}
            />

            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/register"
                element={<Register />}
            />

            <Route
                path="/forgot-password"
                element={<ForgotPassword />}
            />

            <Route
                path="/reset-password"
                element={<ResetPassword />}
            />

            {/* Protected Routes */}

            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/profile"
                element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/inventory"
                element={
                    <ProtectedRoute>
                        <Inventory />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/complete-profile"
                element={
                    <ProtectedRoute>
                        <CompleteProfile />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/analyze"
                element={
                    <ProtectedRoute>
                        <Analyze />
                    </ProtectedRoute>
                }
            />
            <Route
    path="/analysis-history"
    element={
        <ProtectedRoute>
            <AnalysisHistory />
        </ProtectedRoute>
    }
/>
              {/* Default Route */}

            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />

        </Routes>

    );

}

export default App;