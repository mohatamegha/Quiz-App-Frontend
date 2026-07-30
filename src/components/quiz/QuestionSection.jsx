import robot from "../../assets/images/blue_mascot.png";
import OptionCard from "./OptionCard";

export default function QuestionSection({
  question,
  selectedAnswer,
  onSelect,
}) {
  const options = [
    question.option1,
    question.option2,
    question.option3,
    question.option4,
  ];

  return (
    <div className="mx-auto mt-16 flex max-w-6xl items-center gap-16 px-12">

      {/* Robot */}

      <div className="hidden w-1/4 justify-center lg:flex">
        <img
          src={robot}
          alt="Robot"
          className="w-52"
        />
      </div>

      {/* Question */}

      <div className="flex-1">

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
          {question.question}
        </h1>

        {/* Options */}

        <div className="min-h-[88px] mt-10 grid grid-cols-2 gap-6">

          {options.map((option, index) => (

            <OptionCard
              key={option}
              label={String.fromCharCode(65 + index)}
              text={option}
              selected={selectedAnswer === option}
              onClick={() => onSelect(option)}
            />

          ))}

        </div>

      </div>

    </div>
  );
}