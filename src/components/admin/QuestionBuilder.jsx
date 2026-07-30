import { useState } from "react";
import { Plus } from "lucide-react";
import QuestionCard from "./QuestionCard";
import CollapsedQuestion from "./CollapsedQuestion";

const emptyQuestion = {
  question: "",
  option1: "",
  option2: "",
  option3: "",
  option4: "",
  correctAnswer: "option1",
  difficulty: "EASY",
};

export default function QuestionBuilder() {
  const [questions, setQuestions] = useState([emptyQuestion]);
  const [activeQuestion, setActiveQuestion] = useState(0);

  const addQuestion = () => {
    setQuestions((prev) => [...prev, emptyQuestion]);
    setActiveQuestion(questions.length);
  };

  return (
    <section className="rounded-[28px] border border-[#EEE7F5] bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-body text-xl font-bold text-[#1F1F1F]">
            2. Design Questions
          </h2>

          <p className="mt-1 text-sm text-[#7E7E7E]">
            Craft engaging questions for your learners.
          </p>
        </div>

        <button
          onClick={addQuestion}
          className="flex items-center gap-2 rounded-xl bg-[#FFC54D] px-5 py-2 font-semibold text-[#3C2D00] transition hover:brightness-95"
        >
          <Plus size={18} />
          New Question
        </button>
      </div>

      <div className="mt-4 space-y-4">
        {questions.map((question, index) =>
          index === activeQuestion ? (
            <QuestionCard
              key={index}
              index={index}
              question={question}
              canDelete={questions.length > 1}
              onChange={(updatedQuestion) => {
                const updated = [...questions];
                updated[index] = updatedQuestion;
                setQuestions(updated);
              }}
              onDelete={() => {
                const updated = questions.filter((_, i) => i !== index);
                setQuestions(updated);
                setActiveQuestion(Math.max(0, index - 1));
              }}
            />
          ) : (
            <CollapsedQuestion
              key={index}
              index={index}
              onClick={() => setActiveQuestion(index)}
            />
          )
        )}
      </div>
    </section>
  );
}