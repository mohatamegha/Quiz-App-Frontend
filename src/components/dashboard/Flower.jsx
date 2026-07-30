export default function Flower({ className, color = "pink" }) {
  const petal = color === "pink" ? "#FF7DBB" : "#C084FC";

  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
    >
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse
          key={a}
          cx="20"
          cy="11"
          rx="6"
          ry="8"
          fill={petal}
          transform={`rotate(${a} 20 20)`}
        />
      ))}

      <circle
        cx="20"
        cy="20"
        r="5"
        fill="#FFD54F"
      />
    </svg>
  );
}