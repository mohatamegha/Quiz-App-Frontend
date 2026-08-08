import { useNavigate } from "react-router-dom"
import { Pencil, Trash2, Plus, X, Check } from "lucide-react";
import { useState } from "react";

export default function QuizList({quizzes, onSave, onDelete}){
  const navigate = useNavigate();
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

  const saveEdit = async (quizId) => {
    if (!editName.trim()) return;

    await onSave(quizId, editName.trim());
    cancelEditing();
  };

  
  return (
    <section className="mt-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#3A2D1F]">
            Your Quizzes
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage your existing quiz collection
          </p>
        </div>

        <button
          onClick={() => navigate("/admin/quiz/create")}
          className="flex items-center gap-2 rounded-full bg-[#FFC53D] px-5 py-2.5 text-sm font-semibold text-[#4A3B00] shadow-[0_2px_0_#D49D1E] hover:bg-[#F5BC2D]"
        >
          <Plus size={16} />
          New Quiz
        </button>
      </div>

      <div className="mt-4 space-y-3">
        {quizzes.map((quiz) => (
          <article
            key={quiz.quizId}
            className="flex items-center justify-between rounded-[26px] border border-[#E5D9C9] bg-white px-6 py-4 shadow-[0_3px_0_#DDD]"
          >
            {editingId === quiz.quizId ? (
              <div className="flex flex-1 items-center gap-3">
                <input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  autoFocus
                  className="h-11 max-w-md flex-1 rounded-full border border-[#D9C9DB] px-5 text-sm outline-none focus:border-[#96399D]"
                />

                <button
                  onClick={() => saveEdit(quiz.quizId)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#96399D] text-white hover:bg-[#813187]"
                >
                  <Check size={16} />
                </button>

                <button
                  onClick={cancelEditing}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DDD]"
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <>
                <div>
                  <h3 className="text-base font-semibold text-[#30282F]">
                    {quiz.quizName}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    {quiz.questions} Questions · Created{" "}
                    {new Date(quiz.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => startEditing(quiz)}
                    className="flex items-center gap-1.5 rounded-full bg-[#FFC53D] px-5 py-2 text-xs font-semibold text-[#4A3B00] hover:bg-[#F5BC2D]"
                  >
                    <Pencil size={13} />
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(quiz.quizId)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E5D9C9] text-gray-500 hover:bg-red-50 hover:text-red-500"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </>
            )}
          </article>
        ))}
      </div>
      <div>
      </div>
    </section>
  )
}