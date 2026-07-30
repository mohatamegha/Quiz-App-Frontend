import { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";

import ResultNavbar from "../components/result/ResultNavbar";
import HeroSection from "../components/result/HeroSection";
import ReviewCard from "../components/result/ReviewCard";
import QuestionNavigator from "../components/result/QuestionNavigator";

export default function QuizResultPage() {
  const navigate = useNavigate();

  const { state } = useLocation();

  if (!state) {
    return <Navigate to="/dashboard" replace />;
  }

  useEffect(() => {
    confetti({
      particleCount: 180,
      spread: 90,
      origin: {
        y: 0.6,
      },
    });
  }, []);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const question =
    state.questionResponseList[currentQuestion];

  const percentage = Math.round(
    (state.score / state.totalQuestions) * 100
  );

  return (
    <div className="min-h-screen bg-[#FBF8FC]">

      <ResultNavbar />

      <HeroSection
        quizName={state.quizName}
        score={state.score}
        totalQuestions={state.totalQuestions}
        percentage={percentage}
      />

      <ReviewCard
        question={question}
      />

      <QuestionNavigator
        current={currentQuestion + 1}
        total={state.totalQuestions}
        onPrevious={() =>
          setCurrentQuestion((prev) => prev - 1)
        }
        onNext={() =>
          setCurrentQuestion((prev) => prev + 1)
        }
        disablePrevious={currentQuestion === 0}
        disableNext={
          currentQuestion ===
          state.totalQuestions - 1
        }
      />

      <div className="flex justify-center pb-12">
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-[#E5A73A] hover:bg-[#d99828] text-white font-semibold px-8 py-4 rounded-full transition"
        >
          Take Another Adventure
        </button>
      </div>

    </div>
  );
}