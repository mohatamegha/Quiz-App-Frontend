import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import AttemptQuizPage from "./pages/AttemptQuizPage";
import QuizResultPage from "./pages/QuizResultPage";
import AddQuizPage from "./pages/AddQuizPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import ComingSoonPage from "./pages/ComingSoonPage";
import LandingPage from "./pages/LandingPage";
import HistoryPage from "./pages/HistoryPage";

function ProtectedRoute({ adminOnly = false }) {
  const { token, user } = useContext(AuthContext);

  if (!token) {
    return <Navigate to="/" replace />;
  }

  if (adminOnly && user?.role !== "ADMIN") {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}

export default function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage/>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      {/* Protected User Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/quiz/:id" element={<AttemptQuizPage />} />
        <Route path="/quiz/:id/result" element={<QuizResultPage />} />
        <Route path="/leaderboard" element={<ComingSoonPage/>} />
        <Route path="/history" element={<HistoryPage/>} />
      </Route>

      {/* Protected Admin Routes */}
      <Route element={<ProtectedRoute adminOnly />}>
        <Route path="/admin/quiz/:quizId" element={<AddQuizPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboardPage/>} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}