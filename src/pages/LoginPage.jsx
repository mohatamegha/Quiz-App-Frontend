import LoginForm from "../components/auth/LoginForm"
import mascot from "../assets/images/orange_mascot.png"

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#EFE3F3] px-6 py-8">
      <div className="flex h-[760px] w-full max-w-7xl overflow-hidden rounded-[40px]">
        <section className="relative flex w-1/2 flex-col justify-between px-14 py-12">
          <span className="absolute left-[320px] top-16 rounded-full bg-[#8d3cb5] px-5 py-3 text-sm font-semibold text-white shadow-lg">
            ✨ Brain Gains!
          </span>

          <div className="flex flex-1 items-center justify-center">
            <img
              src={mascot}
              alt="Kwizzy Mascot"
              className="w-[420px] select-none"
              draggable={false}
            />
          </div>

          <div>
            <h1 className="text-6xl font-extrabold text-[#8f39b7]">
              Kwizzy
            </h1>

            <p className="mt-4 max-w-md text-xl leading-9 text-[#555]">
              Where playful moments become masterfully learned skills.
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-[#c69edc] uppercase">
            <span>🛡</span>
            <span>Secure & Student Friendly</span>
          </div>
        </section>

        <section className="flex w-1/2 items-center justify-center">
          <LoginForm />
        </section>
      </div>
    </main>
  )
}