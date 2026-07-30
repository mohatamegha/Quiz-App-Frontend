import { BookOpen } from "lucide-react";

export default function TopicCard({ value, onChange }) {
  return (
    <section className="rounded-[28px] border border-[#EEE7F5] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F8EDFF]">
          <BookOpen className="h-5 w-5 text-[#933393]" />
        </div>

        <div className="flex-1">
          <h2 className="font-body text-xl font-bold text-[#1F1F1F]">
            1. Define Topic
          </h2>

          <p className="mt-1 text-sm text-[#7E7E7E]">
            What should your quiz be about?
          </p>

          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="e.g. The French Revolution or Quantum Mechanics"
            className="
              mt-3
              w-full
              rounded-full
              border
              border-[#E8E2EE]
              bg-[#FAF8FC]
              px-6
              py-4
              text-[15px]
              outline-none
              transition-all
              placeholder:text-[#B1A8BB]
              focus:border-[#B87AF9]
              focus:ring-4
              focus:ring-[#EEDCFF]
            "
          />
        </div>
      </div>
    </section>
  );
}