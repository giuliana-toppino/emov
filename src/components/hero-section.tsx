"use client"

import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <main className="flex-1 flex items-center px-8 py-20 md:py-0 md:px-12 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl w-full z-10"
      >
        {/* Desktop Layout - Content to the left with proper spacing */}
        <div className="hidden md:flex md:justify-start">
          <div className="max-w-2xl">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight text-left">
              Invista em você!
            </h1>

            <p className="text-lg lg:text-xl text-white/80 mb-8 leading-relaxed text-left">
              A loja com mais peças por m² que você já viu. E um time pronto pra te mostrar todas
            </p>

            <div className="flex items-start justify-start mb-8">
              <div className="h-1 w-12 bg-red-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Content centered */}
        <div className="md:hidden text-center">
          <h1 className="text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
            Invista em você!
          </h1>

          <p className="text-base text-white/80 mb-8 leading-relaxed">
            A loja com mais peças por m² que você já viu. E um time pronto pra te mostrar todas
          </p>

          <div className="flex items-center justify-center mb-8">
            <div className="h-1 w-12 bg-red-500 rounded-full"></div>
          </div>
        </div>
      </motion.div>
    </main>
  )
}
