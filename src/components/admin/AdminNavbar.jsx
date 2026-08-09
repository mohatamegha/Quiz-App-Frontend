import { LayoutDashboard, Users, CircleDot, LogOut } from "lucide-react";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function AdminNavbar() {
  const { logout } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <header className="h-20 sticky top-0 z-50 bg-[#EFE3F3] shadow-[0_2px_12px_rgba(147,51,147,0.06)] flex items-center justify-between">
      <div
        className="w-45 cursor-pointer pt-4 mx-auto"
        onClick={() => navigate("/admin/dashboard")}
      >
        <img src={Logo} alt="Kwizzy" />
      </div>

      <nav className="flex items-center gap-2 mx-auto">
        <button
          className="flex items-center gap-2 rounded-full bg-[#F6EBF6] px-5 py-2 font-medium text-[#933393]"
        >
          <LayoutDashboard size={17} />
          Dashboard
        </button>

        <button
          className="flex items-center gap-2 rounded-full px-5 py-2 text-[#5E5A65] transition hover:bg-[#F6EBF6] hover:text-[#933393]"
        >
          <Users size={17} />
          Users
        </button>
      </nav>

      <button
        className="mx-auto rounded-full p-2 text-[#5E5A65] transition hover:bg-[#F6EBF6] hover:text-[#933393]"
        onClick={logout}
      >
        <LogOut size={20} />
      </button>
    </header>
  );
}
