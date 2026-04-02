import { outroHeading, outroSubtext } from "@/data";
import { motion } from "framer-motion";

export default function OutroScreen() {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative flex flex-col items-center justify-center"
      >
        <div className="mb-4">
          <img src="/gifs/happy.gif" alt="happy gif" className="w-40" />
        </div>

        <h1 className="text-4xl md:text-5xl font-dancing text-rose-600 font-semibold mb-3">
          {outroHeading}
        </h1>
        <p className="text-rose-500/80">{outroSubtext}</p>
      </motion.div>
    </div>
  );
}
