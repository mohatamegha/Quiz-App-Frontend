import ScoreCircle from "./ScoreCircle";
import mascot from "../../assets/images/green_mascot.png"; // change path accordingly

export default function HeroSection({
  quizName,
  score,
  totalQuestions,
  percentage,
}) {
  const getPerformance = () => {
    if (percentage >= 90) {
      return {
        title: "Legendary!",
        subtitle: "Your stellar performance has earned you a place among the quiz masters!",
      };  
    }

    if (percentage >= 75) {
      return {
        title: "Excellent!",
        subtitle: "Fantastic work! You really know your stuff.",
      };
    }

    if (percentage >= 50) {
      return {
        title: "Good Job!",
        subtitle: "You're getting there. Keep practicing!",
      };
    }

    return {
      title: "Keep Going!",
      subtitle: "Every quiz is another step toward mastery.",
    };
  };

  const performance = getPerformance();

  return (
    <section className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-10">

      <ScoreCircle
        score={score}
        total={totalQuestions}
        percentage={percentage}
      />

      <div className="flex-1 text-center">
        <h1 className="text-5xl font-bold text-[#3A2D1F]">
          {performance.title}
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-[#8B5E3C]">
          {quizName}
        </h2>

        <p className="mt-3 text-gray-600 max-w-lg mx-auto">
          {performance.subtitle}
        </p>
      </div>

      <img
        src={mascot}
        alt="Mascot"
        className="w-56"
      />

    </section>
  );
}