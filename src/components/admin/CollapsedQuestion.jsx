import { ChevronRight } from "lucide-react";

export default function CollapsedQuestion({ index, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        w-full
        rounded-2xl
        border
        border-[#EEE7F5]
        bg-[#FCFBFD]
        px-6
        py-5
        transition-all
        hover:border-[#C89BFF]
        hover:bg-white
      "
    >
      <div className="flex items-center justify-between">
        <div className="text-left">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A086C4]">
            Question {String(index + 1).padStart(2, "0")}
          </p>

          <p className="mt-2 text-sm text-[#7E7E7E]">
            Add another challenge...
          </p>
        </div>

        <ChevronRight
          size={22}
          className="text-[#8B3DFF]"
        />
      </div>
    </button>
  );
}