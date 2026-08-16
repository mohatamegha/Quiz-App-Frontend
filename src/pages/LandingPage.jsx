import { useNavigate } from "react-router-dom";
import { Gamepad2, Zap, Trophy, Users } from "lucide-react";
import Logo from "../assets/logo.png";
import { Globe2 } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function LandingPage() {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);

  return (
    <div className="relative">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: "url('/src/assets/images/landing_bg.png')" }}
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">

        {/* Navbar */}
        <header className="flex items-center justify-between px-8 py-4">
          <img
            src={Logo}
            onClick={() => navigate("/")}
            className="w-40 cursor-pointer"
          />

          <nav className="flex items-center gap-3">
            <button
              onClick={() => navigate("/login")}
              className="rounded-full border-2 border-white/70 px-6 py-2 font-semibold text-white hover:bg-white/10"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/signup")}
              className="rounded-full bg-[#933393] px-6 py-2 font-semibold text-white shadow-lg hover:bg-[#7d2c7d]"
            >
              Sign Up
            </button>
          </nav>
        </header>

        {/* Hero */}
        <main className="flex flex-1 items-center justify-center">
          <section className="w-full max-w-xl px-4 py-3 mb-15 text-center">

          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#F6EBF6]">
            <Globe2 size={30} className="text-[#933393]" />
          </div>

            <h1 className="text-5xl font-extrabold leading-tight text-[#27134F]">
              Enter the
              <span className="block text-[#933393]">
                Playground
              </span>
              <span className="block">
                of Learning
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-lg text-base text-[#6F6875]">
              Where curiosity meets mastery. Embark on epic
              educational quests crafted for vibrant minds.
            </p>

            <button
              onClick={() => navigate(token? "/dashboard" : "/login")}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#FF8A00] px-10 py-3 text-m font-bold text-white shadow-[0_5px_0_#C75E00] transition hover:-translate-y-1"
            >
              Start Your Quest
              <Gamepad2 size={22} />
            </button>

          </section>
        </main>

        {/* Activity Strip */}
        <div className="overflow-hidden bg-white py-3 text-[#933393]">
          <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap">

            <span className="flex items-center gap-2">
              <Zap size={18} />
              New Quiz Added: "Space Explorer 101"
            </span>

            <span className="flex items-center gap-2">
              <Trophy size={18} />
              Sarah reached "Brainiac" status!
            </span>

            <span className="flex items-center gap-2">
              <Users size={18} />
              500+ students playing right now
            </span>

            <span className="flex items-center gap-2">
              <Zap size={18} />
              New Quiz Added: "Space Explorer 101"
            </span>

            <span className="flex items-center gap-2">
              <Trophy size={18} />
              Sarah reached "Brainiac" status!
            </span>

            <span className="flex items-center gap-2">
              <Users size={18} />
              500+ students playing right now
            </span>

          </div>
        </div>

      </div>
    </div>
  );
}