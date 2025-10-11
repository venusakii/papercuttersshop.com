"use client"

import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function FeaturedProduct() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Metallic shimmer background */}
      <div className="absolute inset-0 shimmer opacity-10" />

      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-[#E0E0E0]">
          Product of the <span className="text-[#FF5F1F]">Week</span>
        </h2>
        <p className="text-center text-[#E0E0E0]/70 mb-16 text-xl font-[family-name:var(--font-inter)]">
          Professional's Choice
        </p>

        <div className="relative max-w-4xl mx-auto">
          <div
            className="relative bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border-2 border-[#333333] rounded-2xl p-8 md:p-12 transition-all duration-500 hover:border-[#FF5F1F] hover:shadow-[0_0_50px_rgba(255,95,31,0.3)]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Metallic reflection effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
            />

            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              <div className="relative">
                <div className="aspect-square rounded-lg overflow-hidden bg-[#1A1A1A] border border-[#333333]">
                  <img
                    src="/fiskars-premium-craft-knife-professional-tool.jpg"
                    alt="Fiskars Premium Craft Knife"
                    className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? "scale-110 rotate-6" : "scale-100"}`}
                  />
                </div>
                {/* Blade shine effect */}
                <div
                  className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-transparent transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
                />
              </div>

              <div>
                <h3 className="text-4xl font-bold mb-4 text-[#E0E0E0]">Fiskars Premium Craft Knife</h3>

                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FFD166] text-[#FFD166]" />
                  ))}
                  <span className="text-[#E0E0E0]/70 ml-2 font-[family-name:var(--font-inter)]">(247 reviews)</span>
                </div>

                <p className="text-[#E0E0E0]/80 mb-6 leading-relaxed font-[family-name:var(--font-inter)]">
                  Professional craft knife with ergonomic handle and replaceable blades made from Japanese steel. Ideal
                  for precision work with paper, cardboard, and thin materials.
                </p>

                <Button
                  asChild
                  size="lg"
                  className="bg-[#FF5F1F] hover:bg-[#FFD166] text-[#1A1A1A] font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,95,31,0.5)]"
                >
                  <Link href="/reviews">Read Review</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
