"use client"

import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <main className="flex-1 flex items-center justify-center px-6 py-20 md:py-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl w-full text-center z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          Invista em você!
        </h1>

        <p className="text-base md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          A loja com mais peças por m² que você já viu. E um time pronto pra te mostrar todas
        </p>

        <div className="flex items-center justify-center mb-8">
          <div className="h-1 w-12 bg-red-500 rounded-full"></div>
        </div>
      </motion.div>
    </main>
  )
}
