"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { MeshGradient } from "@paper-design/shaders-react"

interface ShaderBackgroundProps {
  children: React.ReactNode
}

export default function ShaderBackground({ children }: ShaderBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true)
    const handleMouseLeave = () => setIsActive(false)

    const container = containerRef.current
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#000000] relative overflow-hidden flex flex-col"
    >
      {/* SVG Filters */}
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>

          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Subtle mesh background base */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#2E2E2E", "#000000"]}
        speed={0}
      />
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        colors={["#FFFFFF"]}
        speed={0}
      />
      {/* Directional overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Soft vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle at center, transparent 0%, #000000 100%)",
        }}
      />

      {/* Bottom blend */}
      <div
        className="absolute bottom-0 inset-x-0 h-24 md:h-36 
        bg-gradient-to-b from-transparent to-[#000000]"
        aria-hidden="true"
      />

      {/* ⭐ Agora SIM o conteúdo aparece por cima de tudo */}
      <div className="relative z-20 flex flex-col w-full">
        {children}
      </div>
    </div>
  )
}
