"use client"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ShaderBackground from "@/components/shader-background"
import ProvaSocial from "@/components/provasocial-section"
import Sobre from "@/components/sobre-section"
import Colecoes from "@/components/colecoes-section"
import Diferenciais from "@/components/diferenciais-section"
import ProvaSocialVisual from "@/components/provasocialvisu-section"
import ChamadaFinal from "@/components/chamadafinal-section"
import FAQ from "@/components/faq-section"

export default function EMOVLanding() {
  return (
    <ShaderBackground>
      <Header />
      <HeroSection />
      <ProvaSocial />
      <Sobre />
      <Colecoes />
      <Diferenciais />
      <ProvaSocialVisual />
      <ChamadaFinal />
      <FAQ />
    </ShaderBackground>
  )
}
