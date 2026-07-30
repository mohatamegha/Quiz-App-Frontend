export default function OAuthButton({ icon, provider, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-14 w-full items-center justify-center gap-3 rounded-full border border-[#e7e7e7] bg-white text-[15px] font-medium text-[#333] transition-colors hover:bg-[#fafafa]"
    >
      <img
        src={icon}
        alt={provider}
        className="h-5 w-5"
      />

      Continue with {provider}
    </button>
  )
}