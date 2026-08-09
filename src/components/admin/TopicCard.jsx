import { BookOpen } from "lucide-react";

export default function TopicCard({ value }) {
  return (
    <section className="rounded-3xl border border-[#E8E2EE] bg-white p-6">
      <div className="flex items-start gap-4">
        <div className="rounded-2xl bg-[#F6EBF6] p-3">
          <BookOpen className="text-[#933393]" size={22} />
        </div>

        <div className="flex-1">
          <h2 className="font-body text-xl font-bold text-[#1F1F1F]">
            1. Topic
          </h2>

          <p className="mt-1 text-sm text-[#7E7E7E]">
            Your quiz topic
          </p>

          <div className="mt-3 w-full rounded-full border border-[#E8E2EE] bg-[#FAF8FC] px-6 py-4 text-[15px] text-[#333]">
            {value || "Loading..."}
          </div>
        </div>
      </div>
    </section>
  );
}