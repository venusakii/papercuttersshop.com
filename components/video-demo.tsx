"use client"

import { Play } from "lucide-react"
import { useState } from "react"

export function VideoDemo() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-[#E0E0E0]">
          Video <span className="text-[#FF5F1F]">Demonstrations</span>
        </h2>

        <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-[#333333] hover:border-[#FF5F1F] transition-colors duration-300">
          <img
            src="/craftsman-cutting-leather-with-precision-knife-clo.jpg"
            alt="Video demonstration"
            className="w-full h-full object-cover"
          />

          {!isPlaying && (
            <>
              <div className="absolute inset-0 bg-[#1A1A1A]/60 backdrop-blur-sm" />
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-[#FF5F1F] hover:bg-[#FFD166] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_50px_rgba(255,95,31,0.6)] group"
              >
                <Play
                  className="w-10 h-10 text-[#1A1A1A] ml-1 transition-transform duration-300 group-hover:scale-110"
                  fill="currentColor"
                />
              </button>
            </>
          )}

          {/* Decorative cutting lines */}
          <div className="absolute top-0 left-1/4 w-[2px] h-full bg-gradient-to-b from-[#FF5F1F] via-transparent to-[#FF5F1F] opacity-30" />
          <div className="absolute top-0 right-1/4 w-[2px] h-full bg-gradient-to-b from-[#FFD166] via-transparent to-[#FFD166] opacity-30" />
        </div>
      </div>
    </section>
  )
}
