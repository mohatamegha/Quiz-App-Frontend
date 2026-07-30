export default function InputField({
  label,
  icon: Icon,
  className = "",
  ...props
}) {
  return (
    <div>
      {label && (
        <label className="mb-2 block text-sm font-semibold text-[#555]">
          {label}
        </label>
      )}

      <div className={`flex h-14 items-center rounded-full border border-[#e5e5e5] bg-white px-5 transition-colors focus-within:border-[#8f39b7] ${className}`}>
        {Icon && (
          <Icon
            size={18}
            className="mr-3 text-[#8f39b7]"
          />
        )}

        <input
          {...props}
          className="h-full w-full bg-transparent text-[15px] text-[#333] outline-none placeholder:text-[#b4b4b4]"
        />
      </div>
    </div>
  )
}