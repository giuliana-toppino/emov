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
    <div ref={containerRef} className="min-h-screen min-h-[100dvh] bg-[#0A2E35] relative overflow-hidden fixed inset-0 w-full h-full">
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
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Subtle mesh background base */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#0A2E35", "#139FB2", "#1D8F9B", "#0F6D79", "#5FC8D7"]}
        speed={0}
      />
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-12"
        colors={["#0A2E35", "#0E4F58", "#139FB2", "#083C46"]}
        speed={0}
      />

      {/* Hero background image with soft bottom fade */}
      <div
        className="absolute inset-0 bg-[url('/hero.png')] bg-no-repeat bg-right md:bg-center bg-cover md:bg-cover opacity-75 md:opacity-60"
        aria-hidden="true"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Directional teal overlay for readability (much lighter) */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,46,53,0.40) 0%, rgba(10,46,53,0.24) 45%, rgba(10,46,53,0.08) 100%)",
        }}
      />

      {/* Soft vignette to blend edges (lighter) */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(120% 100% at 18% 50%, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.06) 42%, rgba(0,0,0,0) 70%)",
        }}
      />

      {/* Bottom blend into base color to avoid hard cut at footer */}
      <div
        className="absolute bottom-0 inset-x-0 h-24 md:h-36 bg-gradient-to-b from-transparent via-[#0A2E35]/20 to-[#0A2E35]"
        aria-hidden="true"
      />

      {children}
    </div>
  )
}
