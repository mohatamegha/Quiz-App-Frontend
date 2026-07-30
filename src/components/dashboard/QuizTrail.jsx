import QuizCard from "./QuizCard";
import Flower from "./Flower";
import Grass from "./Grass";
import dino from "../../assets/images/dino.png";
import monster from "../../assets/images/monster.png";
import alien from "../../assets/images/alien.png";

import { useEffect, useState } from "react";
import { getAllQuizzes } from "../../api/api";


const rowClasses = [
  "pl-10 pr-26",
  "px-14",
  "px-14",
  "pl-6 pr-20",
];

const offsets = [-8, 0, 8];

export default function QuizTrail() {
  const [quizzes, setQuizzes] = useState([]);
  
  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const data = await getAllQuizzes();
        setQuizzes(data);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    };
    fetchQuizzes();
  }, []);
  
  const rows = [];
  
  for (let i = 0; i < quizzes.length; i += 3) {
    rows.push(quizzes.slice(i, i + 3));
  }

  return (
    <section className="relative mt-10">

      {/* ================= Trail ================= */}

      <svg
        viewBox="0 0 1250 1600"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        {/* Main road */}

        <path
          d="
            M80 150
            H670
            C980 150 980 580 670 580
            H330
            C20 580 20 1030 330 1030
            H670
            C980 1030 980 1480 670 1480
            H120
          "
          stroke="#e2d6e5"
          strokeWidth="220"
          strokeLinecap="round"
          fill="none"
        />

        {/* White center line */}

        <path
          d="
            M80 150
            H670
            C910 150 910 580 670 580
            H330
            C90 580 90 1030 330 1030
            H670
            C910 1030 910 1480 670 1480
            H120
          "
          stroke="white"
          strokeWidth="12"
          strokeDasharray="36 44"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* ================= Mascots ================= */}

      <img
        src={dino}
        alt=""
        className="pointer-events-none absolute -left-2 -top-8 h-32"
      />

      <img
        src={monster}
        alt=""
        className="pointer-events-none absolute right-0 top-[41%] h-32"
      />

      <img
        src={alien}
        alt=""
        className="pointer-events-none absolute bottom-0 right-8 h-32"
      />

      {/* ================= Flowers ================= */}

      <Flower className="absolute left-[10%] top-[24%] h-8 w-8" />

      <Flower
        className="absolute right-[8%] top-[16%] h-8 w-8"
        color="purple"
      />

      <Flower
        className="absolute left-[5%] bottom-[25%] h-8 w-8"
        color="purple"
      />

      <Flower
        className="absolute right-[10%] bottom-[28%] h-6 w-6"
      />

      {/* ================= Grass ================= */}

      <Grass className="absolute left-[63%] top-2 h-8 w-8" />

      <Grass className="absolute left-[24%] top-[30%] h-8 w-8" />

      <Grass className="absolute left-[18%] top-[47%] h-9 w-9" />

      <Grass className="absolute right-[16%] bottom-[18%] h-9 w-9" />

      {/* ================= Quiz Cards ================= */}

      <div className="relative space-y-28 py-1">

        {rows.map((row, rowIndex) => (

          <div
            key={rowIndex}
            className={`flex justify-center gap-8 ${rowClasses[rowIndex]}`}
          >

            {row.map((quiz, i) => (

              <QuizCard
                key={quiz.quizId}
                title={quiz.quizName}
                q={10}
                top={offsets[i]}
                id={quiz.quizId}
              />

            ))}

          </div>

        ))}

      </div>

    </section>
  );
}