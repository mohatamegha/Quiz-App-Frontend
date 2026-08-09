export default function OptionCard({
  label,
  text,
  selected,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer flex items-center gap-4 rounded-2xl border px-5 py-5 text-left transition-all duration-200
      ${
        selected
          ? "border-[#933393] bg-[#F8F0FF] shadow-md"
          : "border-gray-200 bg-white hover:border-[#933393]"
      }`}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-full font-bold">
        {label}
      </div>

      <span className="font-medium text-gray-800">
        {text}
      </span>
    </button>
  );
}