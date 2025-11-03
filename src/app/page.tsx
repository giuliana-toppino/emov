"use client"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ShaderBackground from "@/components/shader-background"
import Footer from "@/components/footer"
import PulsingCircle from "@/components/pulsing-circle"

export default function EMOVLanding() {
  return (
    <ShaderBackground>
      <div className="min-h-screen flex flex-col relative">
        <Header />
        <HeroSection />
        <Footer />
        <PulsingCircle />
      </div>
    </ShaderBackground>
  )
}
