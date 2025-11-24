import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import Footer from "../components/footer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800"], // Bold e ExtraBold
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "emov",
  description: "Landing Page emov",
  generator: "",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: "cover"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-[#000000]">
      <head>
        <style>{`
          html {
            font-family: ${inter.style.fontFamily};
            --font-sans: ${inter.variable};
            --font-mono: ${GeistMono.variable};
            --font-title: ${montserrat.variable};
          }
        `}</style>
      </head>

      <body
        className={`${inter.variable} ${montserrat.variable} ${GeistMono.variable} flex flex-col`}
      >
        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
