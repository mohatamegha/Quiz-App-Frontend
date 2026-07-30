export default function OptionCard({
  label,
  text,
  selected,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-4 rounded-2xl border px-5 py-5 text-left transition-all duration-200
      ${
        selected
          ? "border-[#8B1EE8] bg-[#F8F0FF] shadow-md"
          : "border-gray-200 bg-white hover:border-[#8B1EE8]"
      }`}
    >
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-full font-bold
        ${
          selected
            ? "border-[#8B1EE8] bg-[#F8F0FF]"
            : "border-gray-200 bg-white hover:border-[#8B1EE8]"
        }`}
      >
        {label}
      </div>

      <span className="font-medium text-gray-800">
        {text}
      </span>
    </button>
  );
}