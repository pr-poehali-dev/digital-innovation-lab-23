import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-end justify-center h-screen overflow-hidden pb-16 md:pb-24"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/f765a61f-bf87-4b42-ba20-009a76791e9a/bucket/c1357446-84f3-4637-8924-19a59efda0f0.jpg"
          alt="Магазин Красное и Белое"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          РАСТИ <span className="text-red-500">ВМЕСТЕ С НАМИ</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          Ты ищешь место, где реально можно расти? У нас есть такое место.
        </p>
        <a
          href="#vacancies"
          className="inline-block mt-8 bg-red-600 text-white px-8 py-3 uppercase tracking-wide text-sm font-semibold transition-all duration-300 hover:bg-white hover:text-red-600"
        >
          Смотреть вакансии
        </a>
      </div>
    </div>
  );
}