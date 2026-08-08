import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../components/admin/AdminNavbar";
import AdminHeroSection from "../components/admin/AdminHeroSection";
import QuickActions from "../components/admin/QuickActions";
import QuizList from "../components/admin/QuizList";
import { getAllQuizzes, updateQuiz, deleteQuiz } from "../api/api";

export default function AdminDashboardPage() {
  const navigate = useNavigate();

  const [quizzes, setQuizzes] = useState([]);

  const loadQuizzes = async () => {
    try {
      const data = await getAllQuizzes();
      setQuizzes(data);
    } catch (error) {
      console.error("Failed to fetch quizzes:", error);
    }
  };

  useEffect(() => {
    loadQuizzes();
  }, []);

  const saveEdit = async (quizId, updatedQuizName) => {
    try {
      const updatedQuiz = await updateQuiz(quizId, updatedQuizName);

      setQuizzes((prev) =>
        prev.map((quiz) =>
          quiz.quizId === quizId ? updatedQuiz : quiz
        )
      );
    } catch (error) {
      console.error("Failed to update quiz:", error);
    }
  };

  const handleDeleteQuiz = async (quizId) => {
    try {
      await deleteQuiz(quizId);

      setQuizzes((prev) =>
        prev.filter((quiz) => quiz.quizId !== quizId)
      );
    } catch (error) {
      console.error("Failed to delete quiz:", error);
    }
  };

  return (
    <div className=" bg-[#FBF8FC] text-[#30282F]">

      {/* Navbar */}
      <AdminNavbar/>

      <main className="mx-auto max-w-7xl px-8 py-7">

        {/* Hero */}
        <AdminHeroSection/> 
    
        {/* Stats */}
        <section className="mt-6 grid grid-cols-3 gap-5">
          <StatCard title="Total Quizzes" value={quizzes.length} />
          <StatCard title="Total Questions" value="15" />
          <StatCard title="Total Users" value="42" />
        </section>

        {/* Quick Actions */}
        <QuickActions onCreateQuiz={ () => navigate("/admin/quiz/create")}/>     

        {/* Quizzes */}
        <QuizList
          quizzes={quizzes}
          onSave={saveEdit}
          onDelete={handleDeleteQuiz}
        />
      </main>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="rounded-[26px] border border-[#E5D9C9] bg-white px-7 py-3 shadow-[0_3px_0_#DDD]">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="mt-1 text-3xl font-bold text-[#71347D]">{value}</p>
    </div>
  );
}