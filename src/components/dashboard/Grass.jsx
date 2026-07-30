export default function Grass({ className }) {
  return (
    <svg
      viewBox="0 0 40 30"
      className={className}
    >
      <path
        d="M20 30C18 22 14 16 8 12c6 1 11 5 12 11z"
        fill="#6FCF97"
      />

      <path
        d="M20 30c2-8 6-14 12-18-6 1-11 5-12 11z"
        fill="#3BA55D"
      />

      <path
        d="M20 30V8"
        stroke="#3BA55D"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}