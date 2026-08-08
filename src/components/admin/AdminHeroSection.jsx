import mascot from "../../assets/images/admin_dashboard_mascot.png";

export default function AdminHeroSection() {
  return (
    <section className="relative flex min-h-[190px] items-center overflow-hidden rounded-[34px] bg-[#F3A5F2] px-10 shadow-[0_5px_0_#DED6DE]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-[#914B9B]">
          Admin Dashboard
        </p>
    
        <h1 className="mt-2 text-4xl font-bold text-[#71347D]">
          Manage Quizzes
        </h1>
    
        <p className="mt-2 max-w-md text-sm text-[#7E477F]">
          Create, organize and keep your quiz collection ready for
          curious minds.
        </p>
      </div>
    
      <img src={mascot} alt="" className="absolute bottom-0 right-12 h-[200px]"/>
    </section>
  )
}