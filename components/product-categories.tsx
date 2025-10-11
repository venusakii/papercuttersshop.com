"use client"

import { useState } from "react"

const categories = [
  {
    name: "Guillotine Cutters",
    image: "/professional-guillotine-paper-cutter-blade.jpg",
    description: "For high-volume work",
  },
  {
    name: "Mini Cutters",
    image: "/compact-precision-craft-knife.jpg",
    description: "Portable and precise",
  },
  {
    name: "Craft Knives",
    image: "/premium-craft-knife-with-ergonomic-handle.jpg",
    description: "For artists and craftsmen",
  },
  {
    name: "Replacement Blades",
    image: "/sharp-replacement-blades-set.jpg",
    description: "Always sharp and ready",
  },
]

export function ProductCategories() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-[#E0E0E0]">
          Tool <span className="text-[#FF5F1F]">Categories</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                clipPath:
                  hoveredIndex === index
                    ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                    : "polygon(0 0, 100% 0, 95% 100%, 0 100%)",
                transition: "clip-path 0.4s ease-out",
              }}
            >
              <div className="relative h-80 bg-[#222222] border border-[#333333]">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-60" />

                {/* Cutting line effect */}
                <div
                  className={`absolute top-0 right-0 w-[2px] h-full bg-[#FF5F1F] transition-all duration-500 ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}
                />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold mb-2 text-[#E0E0E0] transition-transform duration-300 group-hover:translate-x-2">
                    {category.name}
                  </h3>
                  <p className="text-[#E0E0E0]/70 font-[family-name:var(--font-inter)]">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
