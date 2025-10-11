"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background video placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A]">
          <img
            src="/sharp-blade-cutting-through-paper-macro-photograph.jpg"
            alt="Blade cutting paper"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
      </div>

      {/* Animated cutting lines */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF5F1F] to-transparent opacity-50 shimmer" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E0E0E0] to-transparent opacity-30 metallic-shine" />
        <div
          className="absolute top-3/4 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FFD166] to-transparent opacity-40 shimmer"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-[#E0E0E0] tracking-tight">
            <span className="inline-block slice-in">Sharpness.</span>{" "}
            <span className="inline-block slice-in" style={{ animationDelay: "0.2s" }}>
              Control.
            </span>{" "}
            <span className="inline-block slice-in text-[#FF5F1F]" style={{ animationDelay: "0.4s" }}>
              Perfect Line.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[#E0E0E0]/80 mb-8 font-[family-name:var(--font-inter)]">
            The Best Cutting Tools of 2025
          </p>
          <Button
            size="lg"
            className="bg-[#FF5F1F] hover:bg-[#FFD166] text-[#1A1A1A] font-semibold text-lg px-8 py-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,95,31,0.5)] hover:scale-105"
            asChild
          >
            <Link href="/reviews">View Collection</Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-[#FF5F1F]" />
          <div className="w-[2px] h-12 bg-gradient-to-b from-[#FF5F1F] to-transparent" />
        </div>
      </div>
    </section>
  )
}
