import { Rocket } from "lucide-react";

export default function LaunchButton({ onClick, disabled = false, loading = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className="inline-flex items-center gap-2 rounded-xl bg-[#933393] px-8 py-4 font-body text-base font-semibold text-white shadow-[0_8px_24px_rgba(139,61,255,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#7A2EF6] hover:shadow-[0_12px_28px_rgba(139,61,255,0.35)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
    >
      {loading ? (
        <>
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
          Creating Quiz...
        </>
      ) : (
        <>
          <Rocket size={18} />
          Create Quiz
        </>
      )}
    </button>
  );
}