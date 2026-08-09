import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function QuizNavbar() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center px-12 pt-8">

      <button
        onClick={() => navigate(-1)}
        className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm transition hover:bg-gray-100"
      >
        <X size={18} />
      </button>

    </div>
  );
}