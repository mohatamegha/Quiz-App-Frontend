import Navbar from "../components/dashboard/Navbar";
import Hero from "../components/dashboard/Hero";
import QuizTrail from "../components/dashboard/QuizTrail";

export default function DashboardPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      <main className="min-h-[calc(100vh-80px)] bg-[#F7F1FA] bg-dots">
        <div className="mx-auto max-w-[1400px] px-4 md:px-6 lg:px-10 pt-10 pb-24">
          <Hero />
          <QuizTrail />
        </div>
      </main>
    </div>
  );
}