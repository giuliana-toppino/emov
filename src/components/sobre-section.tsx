"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 md:py-32 px-8 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Coluna da Imagem */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full h-80 md:h-[500px] rounded-lg shadow-2xl overflow-hidden"
        >
          <Image
            src="/loja_1.webp"
            alt="Interior de uma das lojas da EMOV, mostrando araras com roupas e o ambiente moderno."
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* Coluna do Texto */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6">
            Moda que representa atitude.
          </h2>
          <p className="text-lg lg:text-xl text-white/80 leading-relaxed">
            Crescemos com um único propósito: entregar peças modernas, de alta qualidade e com personalidade. A EMOV nasceu para quem valoriza presença, estilo e autenticidade. Aqui, cada peça carrega identidade. A EMOV é mais que roupa — é estilo em movimento.
          </p>
        </motion.div>
      </div>
    </section>
  )
}