export default function ReviewCard({ question }) {
  const isCorrect = question.isCorrect;

  return (
    <div className="max-w-6xl mx-auto mt-4 bg-white rounded-3xl shadow-md p-8">

      <div className="flex items-center justify-between mb-3">
        <h2 className="text-2xl font-bold text-[#3A2D1F]">
          Question Review
        </h2>

        <span
          className={`px-4 py-2 rounded-full text-sm font-semibold ${
            isCorrect
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {isCorrect ? "Correct ✓" : "Incorrect ✗"}
        </span>
      </div>

      <div className="space-y-6">

        <div>
          <p className="text-sm text-gray-500 mb-2">
            Question
          </p>

          <p className="text-xl font-medium text-[#3A2D1F]">
            {question.question}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500 mb-2">
            Your Answer
          </p>

          <div
            className={`rounded-xl p-4 font-medium ${
              isCorrect
                ? "bg-green-50 border border-green-300 text-green-700"
                : "bg-red-50 border border-red-300 text-red-700"
            }`}
          >
            {question.selectedOption}
          </div>
        </div>

        {!isCorrect && (
          <div>
            <p className="text-sm text-gray-500 mb-2">
              Correct Answer
            </p>

            <div className="rounded-xl p-4 font-medium bg-green-50 border border-green-300 text-green-700">
              {question.actualAnswer}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}