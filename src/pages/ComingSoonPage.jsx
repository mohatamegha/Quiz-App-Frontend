import { Sparkles, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import Mascot from "../assets/images/sleeping_mascot.png";

export default function ComingSoonPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FBF8FC]">
      <header className="flex items-center px-8 ">
        <img
          src={Logo}
          className="w-35 cursor-pointer"
          onClick={() => navigate("/dashboard")}
        />
      </header>

      <main className="flex min-h-[calc(100vh-200px)] items-center justify-center px-6">
        <div className="flex max-w-4xl flex-col items-center text-center">

          <div className="mb-5 flex items-center gap-2 rounded-full bg-[#F6EBF6] px-5 py-2 text-sm font-semibold text-[#933393]">
            <Sparkles size={17} />
            Something exciting is coming
          </div>

          <img
            src={Mascot}
            className="mb-4 h-40 object-contain"
          />

          <h1 className="font-body text-5xl font-bold text-[#933393]">
            Coming Soon!
          </h1>

          <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#6F6875]">
            We're cooking up something awesome for the Kwizzy playground.
            This feature isn't ready yet, but it'll be worth the wait!
          </p>

          <button
            onClick={() => navigate("/dashboard")}
            className="mt-8 flex items-center gap-2 rounded-full bg-[#FFC53D] px-7 py-3 font-semibold text-[#4A3B00] transition hover:bg-[#f5bc2d]"
          >
            <ArrowLeft size={18} />
            Back to Dashboard
          </button>

        </div>
      </main>
    </div>
  );
}