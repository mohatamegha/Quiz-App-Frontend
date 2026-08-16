export default function StatCard({
  icon: Icon,
  label,
  value,
  suffix,
  variant = "purple",
}) {
  const styles =
    variant === "pink"
      ? {
          card: "border-[#F5C7DA] bg-[#FFF0F5]",
          icon: "bg-[#FFD1E2] text-[#C51B68]",
          value: "text-[#C51B68]",
        }
      : {
          card: "border-[#F1C8F5] bg-[#FCEFFD]",
          icon: "bg-[#F4B5FA] text-[#933393]",
          value: "text-[#933393]",
        };

  return (
    <div
      className={`relative min-h-44 overflow-hidden rounded-[28px] border p-7 ${styles.card}`}
    >
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full ${styles.icon}`}
      >
        <Icon size={20} />
      </div>

      <p className="mt-5 text-sm font-semibold text-[#51474F]">
        {label}
      </p>

      <div className="mt-1 flex items-baseline gap-2">
        <span className={`text-4xl font-bold ${styles.value}`}>
          {value}
        </span>

        {suffix && (
          <span className="text-lg font-semibold text-[#9D77A3]">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}