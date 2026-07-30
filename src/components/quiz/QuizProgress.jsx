import robot from "../../assets/images/blue_mascot.png";

export default function QuizProgress({
  quizName,
  current,
  total,
}) {
  const progress =
    total === 1
      ? 100
      : ((current - 1) / (total - 1)) * 100;
  return (
    <div className="flex flex-col items-center pt-6">

      {/* Heading */}

      <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
        {quizName}
      </p>

      <h2 className="mt-1 text-xl font-bold text-[#933393]">
        Question {current} of {total}
      </h2>

      {/* Progress */}

      <div className="relative mt-8 w-[520px]">

        {/* Background */}

        <div className="h-3 rounded-full bg-gray-200" />

        {/* Filled */}

        <div
          className="absolute left-0 top-0 h-3 rounded-full bg-gradient-to-r from-[#933393] to-[#C052E8]"
          style={{
            width: `${progress}%`,
          }}
        />

        {/* Robot */}

        <div
          className="absolute -top-5 -translate-x-1/2"
          style={{
            left: `${progress}%`,
          }}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#933393] bg-white shadow">

            <img
              src={robot}
              alt="Robot"
              className="h-9"
            />

          </div>
        </div>

      </div>

    </div>
  );
}