
import { Plus, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function QuickActions({onCreateQuiz}) {
  const navigate = useNavigate();
  
  return (
    <section className="mt-7">
      <h2 className="text-xl font-bold text-[#3A2D1F]">
        Quick Actions
      </h2>

      <div className="mt-3 grid grid-cols-2 gap-5">
        <button
          onClick={() => onCreateQuiz()}
          className="flex min-h-[90px] items-center gap-5 rounded-[28px] border border-[#E5D9C9] bg-white px-7 text-left shadow-[0_3px_0_#DDD] transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF1C7] text-[#A97800]">
            <Plus size={28} />
          </div>

          <div>
            <h3 className="text-base font-bold">Create New Quiz</h3>
            <p className="mt-1 text-sm text-gray-500">
              Start building a new quiz
            </p>
          </div>
        </button>

        <button
          className="flex min-h-[90px] items-center gap-5 rounded-[28px] border border-[#E5D9C9] bg-white px-7 text-left shadow-[0_3px_0_#DDD] transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F3DDF5] text-[#96399D]">
            <Users size={28} />
          </div>

          <div>
            <h3 className="text-base font-bold">Manage Users</h3>
            <p className="mt-1 text-sm text-gray-500">
              View and manage your users
            </p>
          </div>
        </button>
      </div>
    </section>
  );
}