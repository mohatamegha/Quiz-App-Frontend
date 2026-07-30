import { motion } from "framer-motion";
import mascot from "../../assets/mascot/orange_mascot.png";

const MascotPane = () => {
  return (
    <div className="relative hidden w-[55%] overflow-hidden bg-gradient-to-br from-[#F8F2FF] via-[#FCF8FF] to-white px-14 py-12 lg:flex lg:flex-col">

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute right-20 top-16 rounded-full bg-[#8B3DFF] px-5 py-3 text-sm font-semibold text-white shadow-xl"
      >
        ✨ Brain Gains!
      </motion.div>

      <div className="flex flex-1 items-center justify-center">
        <motion.img
          src={mascot}
          alt="Kwizzy Mascot"
          className="w-[420px] select-none"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          draggable={false}
        />
      </div>

      <div>
        <h1 className="text-6xl font-black tracking-tight text-[#8B3DFF]">
          Kwizzy
        </h1>

        <p className="mt-5 max-w-sm text-lg leading-8 text-gray-600">
          Learn smarter, compete faster and make every quiz feel like a game.
        </p>
      </div>

      <div className="mt-12 flex items-center gap-3 text-sm font-medium text-gray-500">
        <div className="h-2 w-2 rounded-full bg-green-500" />
        Trusted by thousands of learners.
      </div>

    </div>
  );
};

export default MascotPane;