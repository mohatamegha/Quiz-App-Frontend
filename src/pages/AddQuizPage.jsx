import { useState } from "react";
import Navbar from "../components/dashboard/Navbar";
import QuizHeader from "../components/admin/QuizHeader";
import TopicCard from "../components/admin/TopicCard";
import QuestionBuilder from "../components/admin/QuestionBuilder";
import LaunchButton from "../components/admin/LaunchButton";

export default function AddQuizPage() {
  const [quizName, setQuizName] = useState("");

  return (
    <div className="min-h-screen bg-[#FBF8FC]">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-8">
        <QuizHeader />

        <div className="mt-5">
          <TopicCard
            value={quizName}
            onChange={setQuizName}
          />
        </div>

        <div className="mt-4">
          <QuestionBuilder />
        </div>

        <div className="mt-7 flex justify-center">
          <LaunchButton />
        </div>
      </main>
    </div>
  );
}