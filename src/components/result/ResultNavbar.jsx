import { useNavigate } from "react-router-dom";
import { CircleDot } from "lucide-react";
import Logo from "../../assets/logo.png";

export default function ResultNavbar() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-[#EFE3F3] shadow-[0_2px_12px_rgba(147,51,147,0.06)]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}

        <div className="pt-4 w-50 cursor-pointer" onClick={() => navigate("/dashboard")}>
          <img src={Logo} alt="Logo" />
        </div>

        {/* Current Page */}

        <div className="flex items-center gap-2 rounded-full bg-[#F6EBF6] px-5 py-2 font-medium text-[#933393]">
          <CircleDot size={17} />
          Quiz Results
        </div>

        {/* Dashboard */}

        <button
          onClick={() => navigate("/dashboard")}
          className="rounded-full bg-[#933393] px-5 py-2 font-medium text-white transition hover:bg-[#842E84]"
        >
          Dashboard
        </button>

      </div>
    </header>
  );
}