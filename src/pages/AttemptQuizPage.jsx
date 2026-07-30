import { useState } from "react";
import { useNavigate } from "react-router-dom";

import QuizNavbar from "../components/quiz/QuizNavbar";
import QuizProgress from "../components/quiz/QuizProgress";
import QuestionSection from "../components/quiz/QuestionSection";
import QuizFooter from "../components/quiz/QuizFooter";

const mockQuiz = {
  id: 1,
  name: "Planetary Science",
  createdAt: "2026-07-30T10:00:00",

  questions: [
    {
      questionId: 1,
      question:
        "Which planet is known as the Red Planet due to its iron oxide surface?",
      difficultyLevel: "Easy",
      option1: "Venus",
      option2: "Mars",
      option3: "Jupiter",
      option4: "Saturn",
    },
    {
      questionId: 2,
      question: "Which is the largest planet in our Solar System?",
      difficultyLevel: "Easy",
      option1: "Earth",
      option2: "Mars",
      option3: "Jupiter",
      option4: "Neptune",
    },
    {
      questionId: 3,
      question: "Which planet has the most prominent ring system?",
      difficultyLevel: "Easy",
      option1: "Mercury",
      option2: "Saturn",
      option3: "Venus",
      option4: "Earth",
    },
  ],
};

export default function AttemptQuizPage() {
  const [quiz] = useState(mockQuiz);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // { questionId : selectedOption }
  const [answers, setAnswers] = useState({});
  
  const navigate = useNavigate();

  const question = quiz.questions[currentQuestion];

  const handleSelect = (option) => {
    setAnswers((prev) => ({
      ...prev,
      [question.questionId]: option,
    }));
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (!answers[question.questionId]) return;

    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    const payload = {
        submittedQuestions: Object.entries(answers).map(
            ([questionId, selectedOption]) => ({
                questionId: Number(questionId),
                selectedOption,
            })
        ),
    };

    console.log(payload);

    // await submitQuiz(quiz.id, payload);

    navigate(`/quiz/${quiz.id}/result`, {
        state: {
            quizName: "Planetary Science",
            score: 8,
            totalQuestions: 10,
            questionResponseList: [
                {
                    questionId: 1,
                    question: "Which planet is known as the Red Planet?",
                    selectedOption: "Mars",
                    actualAnswer: "Mars",
                    isCorrect: true,
                },
                {
                    questionId: 2,
                    question: "Which planet is the largest in our solar system?",
                    selectedOption: "Saturn",
                    actualAnswer: "Jupiter",
                    isCorrect: false,
                },
                {
                    questionId: 3,
                    question: "How many planets are there in the Solar System?",
                    selectedOption: "8",
                    actualAnswer: "8",
                    isCorrect: true,
                },
            ],
        },
    });
  };

  return (
    <div className="min-h-screen bg-[#F7F1FA]">

      <QuizNavbar />

      <QuizProgress
        quizName={quiz.name}
        current={currentQuestion + 1}
        total={quiz.questions.length}
      />

      <QuestionSection
        question={question}
        selectedAnswer={answers[question.questionId]}
        onSelect={handleSelect}
      />

      <QuizFooter
        isFirst={currentQuestion === 0}
        isLast={currentQuestion === quiz.questions.length - 1}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onSubmit={handleSubmit}
        disableNext={!answers[question.questionId]}
      />

    </div>
  );
}