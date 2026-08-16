import SignupForm from "../components/auth/SignupForm"
import mascot from "../assets/images/purple_mascot.png"

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#EFE3F3] px-6 py-8">
      <div className="flex h-[760px] w-full max-w-7xl overflow-hidden rounded-[40px]">
        <section className="relative flex w-1/2 flex-col justify-between px-14 py-12">
          <div className="flex flex-1 items-center justify-center">
            <img
              src={mascot}
              alt="Kwizzy Mascot"
              className="w-[380px] select-none"
              draggable={false}
            />
          </div>

          <div>
            <h1 className="text-6xl font-extrabold text-[#8f39b7]">
              Kwizzy
            </h1>
            
            <h2 className="text-lg font-semibold text-[#9d3fb9]">
              Level Up Your Learning.
            </h2>

            <p className="mt-4 max-w-md text-lg leading-8 text-[#555]">
              Join thousands of students turning study time into playtime with
              Kwizzy's adaptive adventures.
            </p>
          </div>
        </section>

        <section className="flex w-1/2 items-center justify-center">
          <SignupForm />
        </section>
      </div>
    </main>
  )
}