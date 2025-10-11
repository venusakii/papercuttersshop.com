"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Scissors } from "lucide-react"

export function Newsletter() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Animated diagonal lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF5F1F]/30 to-transparent animate-pulse" />
        <div
          className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E0E0E0]/20 to-transparent"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFD166]/30 to-transparent animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Scissors className="w-16 h-16 text-[#FF5F1F] mx-auto mb-6" />
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#E0E0E0]">
          Discover the World of Precision <span className="text-[#FF5F1F]">Tools</span>
        </h2>
        <p className="text-xl text-[#E0E0E0]/80 mb-8 font-[family-name:var(--font-inter)]">
          Subscribe to our updates and get exclusive offers
        </p>

        <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <Input
            type="email"
            placeholder="Your email"
            className="flex-1 bg-[#2A2A2A] border-[#333333] text-[#E0E0E0] placeholder:text-[#E0E0E0]/50 focus:border-[#FF5F1F] h-12"
          />
          <Button
            size="lg"
            className="bg-[#FF5F1F] hover:bg-[#FFD166] text-[#1A1A1A] font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,95,31,0.5)] h-12"
          >
            Stay Sharp ✂️
          </Button>
        </div>
      </div>
    </section>
  )
}
