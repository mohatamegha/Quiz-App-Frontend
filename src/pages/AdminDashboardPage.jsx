import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../components/admin/AdminNavbar";
import AdminHeroSection from "../components/admin/AdminHeroSection";
import QuickActions from "../components/admin/QuickActions";
import QuizList from "../components/admin/QuizList";

const quizzes = [
  { quizId: 1, quizName: "Java Basics", questions: 3, createdAt: "2026-07-27" },
  { quizId: 2, quizName: "Spring Boot Fundamentals", questions: 4, createdAt: "2026-07-27" },
  { quizId: 3, quizName: "DBMS and SQL", questions: 3, createdAt: "2026-07-27" },
  { quizId: 4, quizName: "Operating Systems", questions: 2, createdAt: "2026-07-27" },
  { quizId: 5, quizName: "General Knowledge", questions: 3, createdAt: "2026-07-27" },
];

export default function AdminDashboardPage() {
  const navigate = useNavigate();

  const [quizList, setQuizList] = useState(quizzes);
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");

  const startEditing = (quiz) => {
    setEditingId(quiz.quizId);
    setEditName(quiz.quizName);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditName("");
  };

  const saveEdit = (id) => {
    if (!editName.trim()) return;

    setQuizList((prev) =>
      prev.map((quiz) =>
        quiz.quizId === id
          ? { ...quiz, quizName: editName.trim() }
          : quiz
      )
    );

    cancelEditing();
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
          <StatCard title="Total Quizzes" value={quizList.length} />
          <StatCard title="Total Questions" value="15" />
          <StatCard title="Total Users" value="42" />
        </section>

        {/* Quick Actions */}
        <QuickActions/>     

        {/* Quizzes */}
        <QuizList/>
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