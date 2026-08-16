import { Trophy, BookOpen, Target, Star } from "lucide-react";
import StatCard from "./StatCard";

export default function MuseumStats({ results }) {
  const quizzesAttempted = results.length;

  const questionsAnswered = results.reduce(
    (total, result) => total + result.totalQuestions,
    0
  );

  const averageScore =
    results.length === 0
      ? 0
      : Math.round(
          results.reduce((sum, result) => {
            if (result.totalQuestions === 0) return sum;

            return (
              sum + (result.score / result.totalQuestions) * 100
            );
          }, 0) / results.length
        );

  const bestScore =
    results.length === 0
      ? 0
      : Math.round(
          Math.max(
            ...results.map((result) =>
              result.totalQuestions === 0
                ? 0
                : (result.score / result.totalQuestions) * 100
            )
          )
        );

  return (
    <section className="mt-16 pb-10">
      <h2 className="mb-7 text-3xl font-bold text-[#1F1F1F]">
        Museum Stats
      </h2>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <StatCard
          icon={Trophy}
          label="Quizzes Attempted"
          value={quizzesAttempted}
          suffix="Quizzes"
          variant="purple"
        />

        <StatCard
          icon={BookOpen}
          label="Questions Answered"
          value={questionsAnswered}
          suffix="Questions"
          variant="pink"
        />

        <StatCard
          icon={Target}
          label="Average Score"
          value={`${averageScore}%`}
          variant="purple"
        />

        <StatCard
          icon={Star}
          label="Best Performance"
          value={`${bestScore}%`}
          variant="pink"
        />
      </div>
    </section>
  );
}