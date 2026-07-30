import { Sparkles } from "lucide-react";
import Flower from "./Flower";

export default function Hero() {
  return (
    <section className="relative py-8 text-center">

      <Flower className="absolute left-[22%] top-6 h-7 w-7 text-pink-400" />

      <Sparkles
        className="absolute left-[30%] top-16 text-yellow-500"
        size={16}
      />

      <Sparkles
        className="absolute right-[25%] top-3 text-yellow-500"
        size={22}
      />

      <h1 className="font-heading text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[#2D2A26]">
        World Of Whimsy
      </h1>

      <p className="mt-3 font-body text-lg text-gray-600">
        Pick any quiz and start playing!
      </p>

    </section>
  );
}