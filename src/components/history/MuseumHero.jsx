import { BookOpen } from "lucide-react";
import Mascot from "../../assets/images/monster.png";

export default function MuseumHero() {
  return (
    <section className="overflow-hidden rounded-[32px] border border-[#F0E5F1] bg-gradient-to-r from-white via-white to-[#FFF3FA] shadow-[0_4px_0_#E8E8E8]">
      <div className="flex items-center gap-8 px-8 py-8">
        <div className="flex h-40 w-40 shrink-0 items-center justify-center rounded-2xl bg-white shadow-[0_3px_12px_rgba(0,0,0,0.08)]">
          <img
            src={Mascot}
            alt="Kwizzy mascot"
            className="h-36 w-36 object-contain"
          />
        </div>

        <div>
          <div className="mb-2 flex items-center gap-2">
            <BookOpen size={22} className="text-[#933393]" />

            <span className="text-sm font-semibold text-[#933393]">
              Your Learning Journey
            </span>
          </div>

          <h1 className="font-body text-4xl font-bold text-[#1F1F1F]">
            Museum of Knowledge
          </h1>

          <p className="mt-3 max-w-2xl text-[17px] leading-7 text-[#665D67]">
            Your learning journey, all in one place. Revisit your quizzes,
            track your progress, and see how far you've come.
          </p>
        </div>
      </div>
    </section>
  );
}