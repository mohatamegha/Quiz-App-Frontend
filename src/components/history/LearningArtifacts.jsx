import { BookOpen } from "lucide-react";
import ArtifactCard from "./ArtifactCard";

export default function LearningArtifacts({ results }) {
  return (
    <section className="mt-14">
      <div className="mb-8 flex items-center gap-3">
        <BookOpen size={27} className="text-[#933393]" />

        <h2 className="text-3xl font-bold text-[#1F1F1F]">
          Your Learning Artifacts
        </h2>
      </div>

      {results.length === 0 ? (
        <div className="rounded-3xl border border-[#EEE7F0] bg-white px-6 py-14 text-center shadow-sm">
          <p className="text-lg font-semibold text-[#3D3540]">
            No quizzes attempted yet.
          </p>

          <p className="mt-2 text-sm text-[#8A818C]">
            Complete a quiz and your achievement will appear here.
          </p>
        </div>
      ) : (
        <div className="relative ml-5 space-y-6 border-l-4 border-[#E8E5E8] pl-10">
          {results.map((result) => (
            <ArtifactCard
              key={result.resultId}
              result={result}
            />
          ))}
        </div>
      )}
    </section>
  );
}