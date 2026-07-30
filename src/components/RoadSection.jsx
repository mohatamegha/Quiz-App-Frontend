import QuizCard from "./QuizCard"

export default function RoadSection({ quizzes, reverse }) {
  return (
    <section
      className={`relative mx-auto h-[330px] w-[95%] ${
        reverse ? "scale-x-[-1]" : ""
      }`}
    >
      {/* Main Road */}
      <div className="absolute inset-0">
        {/* Top */}
        <div className="absolute left-0 top-0 h-40 w-full rounded-full bg-[#dcc5ff] shadow-inner" />

        {/* Middle */}
        <div className="absolute left-12 top-24 h-44 w-[92%] rounded-full bg-[#dcc5ff]" />

        {/* Bottom */}
        <div className="absolute left-0 bottom-0 h-40 w-full rounded-full bg-[#dcc5ff]" />
      </div>

      {/* Road Markings */}
      <div className="absolute inset-0 overflow-hidden rounded-[80px] opacity-25">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-2 w-8 rounded-full bg-[#8d63d7]"
            style={{
              top: `${20 + (i % 5) * 18}%`,
              left: `${i * 3}%`,
              transform: "rotate(18deg)"
            }}
          />
        ))}
      </div>

      {/* Cards */}
      <div
        className={`absolute top-10 flex w-full justify-evenly ${
          reverse ? "scale-x-[-1]" : ""
        }`}
      >
        {quizzes.map((quiz) => (
          <QuizCard
            key={quiz.quizName}
            title={quiz.quizName}
            questions={quiz.questionCount}
          />
        ))}
      </div>
    </section>
  )
}