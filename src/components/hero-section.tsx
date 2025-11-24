"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { WHATSAPP_LINK } from "./constants"

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center md:justify-start px-8 overflow-hidden md:min-h-screen pt-32 md:pt-40 lg:pt-48">
      {/* Imagem de fundo otimizada com Next/Image */}
      <Image
        src="/hero.png"
        alt="Modelo vestindo roupas da EMOV em um ambiente urbano estiloso"
        fill
        priority // Carrega a imagem com prioridade, pois é o conteúdo principal
        className="absolute inset-0 object-cover opacity-70 hidden md:block"
        sizes="100vw"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl w-full z-10 py-28 md:py-0"
      >
        {/* Desktop Layout - Content to the left with proper spacing */}
        <div className="hidden md:flex md:justify-start">
          <div className="max-w-2xl">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight text-left">
              A essência da moda masculina em Chapecó.
            </h1>

            <p className="text-lg lg:text-xl text-white/80 mb-10 leading-relaxed text-left">
              Peças streetwear e casuais com curadoria premium - feitas para quem leva estilo a sério.
            </p>

            {/* Botão CTA - Desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,255,255,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-white/10 text-white font-semibold rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 overflow-hidden flex items-center gap-3 text-base"
                >
                  <span className="relative z-10">Conhecer a EMOV agora</span>
                  <svg className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </motion.button>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Mobile Layout - Content centered */}
        <div className="md:hidden text-center">
          <h1 className="text-4xl font-extrabold text-white mb-8 leading-tight tracking-tight">
            A essência da moda masculina em Chapecó.
          </h1>

          <p className="text-base text-white/80 mb-12 leading-relaxed">
            Peças streetwear e casuais com curadoria premium - feitas para quem leva estilo a sério.
          </p>

          {/* Botão CTA - Mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-white/10 text-white font-semibold rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 overflow-hidden flex items-center gap-3 text-base"
              >
                <span className="relative z-10">Conhecer a EMOV agora</span>
                <svg className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </motion.button>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
