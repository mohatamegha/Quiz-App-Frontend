import { useNavigate } from "react-router-dom";

export default function QuizCard({ id, title, q, top }) {
  const navigate = useNavigate();

  return (
    <article
      style={{ marginTop: top }}
      className="
        w-[14rem]
        rounded-[26px]
        border
        border-violet-100
        bg-white
        p-4
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      <h2 className="font-display text-l font-bold leading-tight text-gray-900">
        {title}
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        {q} Questions
      </p>

      <button
        onClick={() => navigate(`/quiz/${id}`)}
        className="
          mt-3
          w-full
          rounded-full
          border-2
          border-[#933393]-500
          py-1.5
          font-semibold
          text-[#933393]
          transition
          hover:bg-[#933393]
          hover:text-white
        "
      >
        Attempt Quiz
      </button>
    </article>
  );
}