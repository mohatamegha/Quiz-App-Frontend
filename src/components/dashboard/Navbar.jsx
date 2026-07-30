import { Trophy, History, CircleDot, LogOut, Sparkles } from "lucide-react";
import Logo from "../../assets/logo.png"
import { useNavigate } from "react-router-dom";


export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-[#EFE3F3] shadow-[0_2px_12px_rgba(147,51,147,0.06)]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}

        <div className="pt-4 w-50 cursor-pointer" onClick={() => navigate("/dashboard")}>
          <img src={Logo} />
        </div>

        {/* Navigation */}

        <nav className="flex items-center gap-2">

          <button className="flex items-center gap-2 rounded-full bg-[#F6EBF6] px-5 py-2 font-medium text-[#933393] transition">
            <CircleDot size={17} />
            Quizzes
          </button>

          <button className="flex items-center gap-2 rounded-full px-5 py-2 text-[#5E5A65] transition hover:bg-[#F6EBF6] hover:text-[#933393]">
            <Trophy size={17} />
            Leaderboard
          </button>

          <button className="flex items-center gap-2 rounded-full px-5 py-2 text-[#5E5A65] transition hover:bg-[#F6EBF6] hover:text-[#933393]">
            <History size={17} />
            History
          </button>

        </nav>

        {/* Logout */}

        <button className="rounded-full p-2 text-[#5E5A65] transition hover:bg-[#F6EBF6] hover:text-[#933393]">
          <LogOut size={20} />
        </button>

      </div>
    </header>
  );
}