export default function ScoreCircle({
  score,
  total,
  percentage,
}) {
  const radius = 70;
  const stroke = 12;

  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference -
    (percentage / 100) * circumference;

  return (
    <div className="relative">

      <svg
        width="160"
        height="160"
      >
        <circle
          stroke="#F2E7DA"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx="80"
          cy="80"
        />

        <circle
          stroke="#F59E0B"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx="80"
          cy="80"
          transform="rotate(-90 80 80)"
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">

        <p className="text-4xl font-bold text-[#3A2D1F]">
          {score}/{total}
        </p>

        <p className="text-sm text-gray-500">
          Score
        </p>

      </div>

    </div>
  );
}