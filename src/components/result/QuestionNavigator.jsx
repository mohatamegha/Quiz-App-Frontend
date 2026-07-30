import { ChevronLeft, ChevronRight } from "lucide-react";

export default function QuestionNavigator({
  current,
  total,
  onPrevious,
  onNext,
  disablePrevious,
  disableNext,
}) {
  return (
    <div className="max-w-5xl mx-auto mt-6 mb-3 flex items-center justify-between">

      <button
        onClick={onPrevious}
        disabled={disablePrevious}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
      >
        <ChevronLeft size={24} />
      </button>

      <p className="text-lg font-semibold text-[#3A2D1F]">
        Question {current} of {total}
      </p>

      <button
        onClick={onNext}
        disabled={disableNext}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
      >
        <ChevronRight size={24} />
      </button>

    </div>
  );
}