import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../components/admin/AdminNavbar";
import AdminHeroSection from "../components/admin/AdminHeroSection";
import QuickActions from "../components/admin/QuickActions";
import QuizList from "../components/admin/QuizList";
import { getAllQuizzes, updateQuiz, deleteQuiz, createQuiz } from "../api/api";

export default function AdminDashboardPage() {
  const navigate = useNavigate();

  const [quizzes, setQuizzes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [quizName, setQuizName] = useState("");

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

const handleCreateQuiz = async () => {
  if (!quizName.trim()) 
    return;

  try {
    const quiz = await createQuiz(quizName.trim());
    setShowModal(false);
    setQuizName("");

    navigate(`/admin/quiz/${quiz.quizId}`);
  } catch (error) {
    console.error("Failed to create quiz:", error);
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
        <QuickActions onCreateQuiz={ () => setShowModal(true)}/>     

        {/* Quizzes */}
        <QuizList
          onCreateQuiz={ () => setShowModal(true)}
          quizzes={quizzes}
          onSave={saveEdit}
          onDelete={handleDeleteQuiz}
        />
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="w-full max-w-md rounded-3xl bg-white p-7 shadow-xl">
              <h2 className="text-2xl font-bold text-[#3A2D1F]">
                Create New Quiz
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Give your quiz a name to get started.
              </p>

              <input
                value={quizName}
                onChange={(e) => setQuizName(e.target.value)}
                placeholder="e.g. Python Basics"
                className="mt-5 h-12 w-full rounded-full border border-gray-200 px-5 outline-none focus:border-[#933393]"
              />

              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => {
                    setShowModal(false);
                    setQuizName("");
                  }}
                  className="rounded-full px-5 py-2 font-medium text-gray-500 hover:bg-gray-100"
                >
                  Cancel
                </button>

                <button
                  className="rounded-full bg-[#933393] px-6 py-2 font-semibold text-white hover:bg-[#7d2c7d]"
                  onClick={handleCreateQuiz}
                >
                  Create Quiz
                </button>
              </div>
            </div>
          </div>
        )}
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