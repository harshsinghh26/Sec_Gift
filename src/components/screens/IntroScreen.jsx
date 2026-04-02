import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { introHeading } from "@/data";

export default function IntroScreen({ onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="flex flex-col items-center justify-center relative text-center "
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="will-change-transform"
      >
        <h1 className="text-4xl md:text-5xl font-dancing font-semibold text-rose-600 tracking-wide">
          {introHeading}
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
      >
        <motion.button
          onClick={onNext}
          className="mt-8 relative group will-change-transform"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 bg-rose-200/70 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
          <div className="relative w-32 h-32 bg-[#fff7fa] rounded-full shadow-xl flex items-center justify-center border-4 border-rose-200/60">
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-16 h-16 fill-rose-500/90 stroke-none" />
            </motion.div>
          </div>
        </motion.button>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="text-rose-500/60 text-sm mt-4"
      >
        Tap to open
      </motion.p>
    </motion.div>
  );
}
