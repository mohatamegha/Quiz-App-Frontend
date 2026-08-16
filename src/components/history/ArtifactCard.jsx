import { Circle } from "lucide-react";

function getMastery(percentage) {
  if (percentage >= 90) return "Grand Master";
  if (percentage >= 75) return "Mastery";
  if (percentage >= 50) return "Proficient";
  return "Keep Exploring";
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function ArtifactCard({ result }) {
  const percentage =
    result.totalQuestions === 0
      ? 0
      : Math.round((result.score / result.totalQuestions) * 100);

  const mastery = getMastery(percentage);

  return (
    <article className="relative rounded-[28px] border border-[#EEE7F0] bg-white p-6 shadow-[0_4px_0_#E4E1E4]">
      {/* Timeline node */}
      <div className="absolute -left-[54px] top-8 flex h-7 w-7 items-center justify-center rounded-full border-4 border-[#FF4D9D] bg-white">
        <Circle size={7} fill="#FF4D9D" className="text-[#FF4D9D]" />
      </div>

      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          <h3 className="text-xl font-bold text-[#29232A]">
            {result.quizName}
          </h3>

          <p className="mt-1 text-sm text-[#7B727D]">
            {result.score} / {result.totalQuestions} correct
          </p>

          <div className="mt-5 flex items-center gap-4">
            <div className="h-2.5 w-64 overflow-hidden rounded-full bg-[#E7E4E7]">
              <div
                className="h-full rounded-full bg-[#C51B68]"
                style={{ width: `${percentage}%` }}
              />
            </div>

            <span className="text-sm font-bold text-[#C51B68]">
              {percentage}% {mastery}
            </span>
          </div>
        </div>

        <span className="shrink-0 rounded-full bg-[#F9EDF4] px-4 py-2 text-xs font-medium text-[#695D66]">
          {formatDate(result.attemptedAt)}
        </span>
      </div>
    </article>
  );
}