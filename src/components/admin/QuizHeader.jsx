import mascot from "../../assets/images/sleeping_mascot.png"; // Replace with your actual mascot asset

export default function QuizHeader() {
  return (
    <section className="flex items-center justify-between gap-8">
      {/* Left */}
      <div>
        <h1 className="font-heading text-5xl font-bold text-[#1F1F1F]">
          Quiz Architect
        </h1>

        <p className="mt-3 max-w-md font-body text-base text-[#6E6A74]">
          Design high-impact learning experiences.
        </p>
      </div>

      {/* Right */}
      <div className="relative hidden md:block">
        {/* Speech Bubble */}
        <div className="absolute -top-4 -left-12 w-44 rounded-2xl bg-white p-3 text-sm text-[#3B3B3B] shadow-md">
          "Ready to build something amazing?"
        </div>

        <img
          src={mascot}
          alt="Mascot"
          className="h-40 w-auto object-contain"
        />
      </div>
    </section>
  );
}