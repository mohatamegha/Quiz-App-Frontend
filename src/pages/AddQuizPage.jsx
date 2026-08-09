import { useState, useEffect } from "react";
import Navbar from "../components/dashboard/Navbar";
import QuizHeader from "../components/admin/QuizHeader";
import TopicCard from "../components/admin/TopicCard";
import QuestionBuilder from "../components/admin/QuestionBuilder";
import LaunchButton from "../components/admin/LaunchButton";
import { useParams } from "react-router-dom";
import { getQuizById } from "../api/api";
import { useNavigate } from "react-router-dom";
import { addBulkQuestions } from "../api/api";

export default function AddQuizPage() {
  const {quizId} = useParams();
  const navigate = useNavigate();


  const emptyQuestion = {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    correctAnswer: "option1",
    difficulty: "EASY",
  };

  const [quizName, setQuizName] = useState("");
  const [questions, setQuestions] = useState([emptyQuestion]);

  useEffect(()=>{
    const loadQuiz = async () =>{
      try{
        const quiz = await getQuizById(quizId);
        setQuizName(quiz.data.name);
      } catch(error){
        console.log("Failed to fetch quiz: ",error);
      }
    }

    loadQuiz();
  }, [quizId]);

  const handleCreateQuiz = async () => {
    try {
      const payload = questions.map((q) => ({
        question: q.question,
        quizId: Number(quizId),
        answer: q[q.correctAnswer],
        difficultyLevel: q.difficulty,
        option1: q.option1,
        option2: q.option2,
        option3: q.option3,
        option4: q.option4,
      }));

      await addBulkQuestions(payload);

      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Failed to create questions:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF8FC]">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-8">
        <QuizHeader />

        <div className="mt-5">
          <TopicCard
            value={quizName}
            //onChange={setQuizName}
          />
        </div>

        <div className="mt-4">
          <QuestionBuilder questions={questions} setQuestions={setQuestions}/>
        </div>

        <div className="mt-7 flex justify-center">
          <LaunchButton onClick={handleCreateQuiz}/>
        </div>
      </main>
    </div>
  );
}