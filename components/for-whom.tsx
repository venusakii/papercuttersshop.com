"use client"

import { Palette, Scissors, Ruler, Hammer } from "lucide-react"
import { useState } from "react"

const audiences = [
  {
    icon: Palette,
    title: "Artists",
    description: "Precise tools for creative projects",
    image: "/artist-working-with-precision-cutting-tools.jpg",
  },
  {
    icon: Scissors,
    title: "Craft Masters",
    description: "Perfect solutions for hobbies and crafts",
    image: "/crafter-using-precision-knife.jpg",
  },
  {
    icon: Ruler,
    title: "Architects",
    description: "Professional tools for models",
    image: "/architect-cutting-architectural-model.jpg",
  },
  {
    icon: Hammer,
    title: "Craftsmen",
    description: "Reliable knives for working with materials",
    image: "/craftsman-working-with-cutting-tools.jpg",
  },
]

export function ForWhom() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-[#E0E0E0]">
          Who is <span className="text-[#FF5F1F]">this for?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => {
            const Icon = audience.icon
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative h-96 bg-[#222222] border border-[#333333] transition-all duration-300 hover:border-[#FF5F1F]">
                  <img
                    src={audience.image || "/placeholder.svg"}
                    alt={audience.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent" />

                  {/* Cut-out silhouette effect */}
                  <div
                    className={`absolute inset-0 transition-all duration-500 ${
                      hoveredIndex === index ? "bg-[#FF5F1F]/20" : "bg-transparent"
                    }`}
                    style={{
                      clipPath:
                        hoveredIndex === index
                          ? "polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)"
                          : "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    }}
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <Icon className="w-12 h-12 text-[#FF5F1F] mb-4 transition-transform duration-300 group-hover:scale-110" />
                    <h3 className="text-2xl font-bold mb-2 text-[#E0E0E0]">{audience.title}</h3>
                    <p className="text-[#E0E0E0]/70 font-[family-name:var(--font-inter)]">{audience.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
