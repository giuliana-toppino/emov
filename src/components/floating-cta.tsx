"use client"

import { motion } from "framer-motion"

export default function FloatingCTA() {
  const whatsappLink =
    "https://wa.me/5549999620725?text=Vim%20do%20site%20da%20EMOV%20e%20quero%20ver%20as%20pe%C3%A7as%20dispon%C3%ADveis."

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="fixed bottom-8 right-8 z-50 md:bottom-12 md:right-12"
    >
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full shadow-lg transition-all duration-200 flex items-center gap-3"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.364-5.002 5.92-5.002 9.713 0 6.05 4.93 10.993 11.052 10.993 1.798 0 3.528-.479 5.063-1.386l5.614 1.476 1.477-5.614c.917-1.535 1.386-3.265 1.386-5.063 0-6.122-4.943-11.052-10.993-11.052z" />
          </svg>
          Ver as novidades no WhatsApp
        </motion.button>
      </a>
    </motion.div>
  )
}
