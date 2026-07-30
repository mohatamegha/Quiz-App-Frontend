import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getQuizById, evaluateQuiz } from "../api/api";

import QuizNavbar from "../components/quiz/QuizNavbar";
import QuizProgress from "../components/quiz/QuizProgress";
import QuestionSection from "../components/quiz/QuestionSection";
import QuizFooter from "../components/quiz/QuizFooter";


export default function AttemptQuizPage() {
  const [quiz, setQuiz] = useState(null);
  const {id} = useParams();
  console.log("ID from URL:", id);
  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await getQuizById(id);
        console.log(response.data);
        setQuiz(response.data);
      } catch (error) {
        console.error("Error fetching quiz:", error);
      }
    };

    fetchQuiz();
  }, [id]);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  // { questionId : selectedOption }
  const [answers, setAnswers] = useState({});
  
  const navigate = useNavigate();

  if (!quiz) {
    return <div>Loading...</div>;
  }

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

    try {
        const response = await evaluateQuiz(quiz.id, payload);

        navigate(`/quiz/${quiz.id}/result`, {
            state: {
                quizName: quiz.name,
                ...response.data,
            },
        });
    } catch (error) {
        console.error("Error submitting quiz:", error);
    }
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