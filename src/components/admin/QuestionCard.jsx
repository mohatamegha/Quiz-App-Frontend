import { Trash2 } from "lucide-react";
import { Circle, CheckCircle2 } from "lucide-react";

export default function QuestionCard({
  index,
  question,
  onChange,
  onDelete,
  canDelete,
}) {
  const updateField = (field, value) => {
    onChange({
      ...question,
      [field]: value,
    });
  };

  return (
    <div className="rounded-[24px] border-2 border-[#933393] bg-white shadow-[0_16px_40px_rgba(139,61,255,0.08)] p-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#933393]">
            Question {String(index + 1).padStart(2, "0")}
          </p>
        </div>

        {canDelete && (
          <button
            onClick={onDelete}
            className="rounded-lg p-2 text-[#933393] transition hover:bg-red-50 hover:text-red-500"
          >
            <Trash2 size={18} />
          </button>
        )}
      </div>

      {/* Difficulty */}
      <div className="mt-3">
        <label className="mb-3 block text-sm font-semibold text-[#444]">
          Difficulty
        </label>

        <div className="flex gap-3">
          {["EASY", "MEDIUM", "HARD"].map((level) => (
            <button
              key={level}
              type="button"
              onClick={() => updateField("difficulty", level)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition
                ${
                  question.difficulty === level
                    ? "bg-[#933393] text-white"
                    : "bg-white border border-[#DDD] text-[#666] hover:border-[#8B3DFF]"
                }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Question */}
      <div className="mt-4">
        <label className="mb-2 block text-sm font-semibold text-[#444]">
          Question
        </label>

        <textarea
          rows={1}
          value={question.question}
          onChange={(e) => updateField("question", e.target.value)}
          placeholder="Enter your question..."
          className="w-full rounded-xl border border-[#E5E5E5] bg-white p-4 outline-none focus:border-[#8B3DFF]"
        />
      </div>

      {/* Options */}
      <div className="mt-4 grid gap-5">
        {[
          ["option1", "Option A"],
          ["option2", "Option B"],
          ["option3", "Option C"],
          ["option4", "Option D"],
        ].map(([field, label]) => (
          <div
            key={field}
            className="flex items-center gap-4"
          >
            <button
              type="button"
              onClick={() => updateField("correctAnswer", field)}
              className="shrink-0"
            >
              {question.correctAnswer === field ? (
                <CheckCircle2
                  size={24}
                  className="text-[#933393]"
                />
              ) : (
                <Circle
                  size={24}
                  className="text-[#D0D0D0]"
                />
              )}
            </button>

            <input
              type="text"
              value={question[field]}
              onChange={(e) => updateField(field, e.target.value)}
              placeholder={label}
              className="flex-1 rounded-xl border border-[#E5E5E5] bg-white px-4 py-2 outline-none focus:border-[#8B3DFF]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}