import { ChevronLeft, ChevronRight } from "lucide-react";

export default function QuizFooter({
  isFirst,
  isLast,
  onPrevious,
  onNext,
  onSubmit,
  disableNext,
}) {
  return (
    <div className="mx-auto mt-16 flex max-w-6xl items-center justify-between px-12 pb-10">

      {/* Previous */}

      <button
        onClick={onPrevious}
        disabled={isFirst}
        className={`flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition
        ${
          isFirst
            ? "cursor-not-allowed text-gray-400"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        <ChevronLeft size={18} />
        Previous
      </button>

      {/* Next */}

      <button
        onClick={isLast ? onSubmit : onNext}
        disabled={disableNext}
        className={`flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold transition
        ${
          disableNext
            ? "cursor-not-allowed bg-gray-300 text-white"
            : "bg-[#933393] text-white hover:bg-[#7717c9]"
        }`}
      >
        {isLast ? "Submit Quiz" : "Save & Next"}

        {!isLast && <ChevronRight size={18} />}
      </button>

    </div>
  );
}