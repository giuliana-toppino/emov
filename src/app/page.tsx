"use client"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FloatingCTA from "@/components/floating-cta"
import ShaderBackground from "@/components/shader-background"
import Footer from "@/components/footer"
import PulsingCircle from "@/components/pulsing-circle"

export default function EMOVLanding() {
  return (
    <ShaderBackground>
      <div className="min-h-screen flex flex-col relative">
        <Header />
        <HeroSection />
        <FloatingCTA />
        <Footer />
        <PulsingCircle />
      </div>
    </ShaderBackground>
  )
}
