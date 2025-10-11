"use client"

import { Scissors, Settings, Brain, Truck } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const features = [
  {
    icon: Scissors,
    title: "High Precision",
    description: "Perfect cuts every time",
  },
  {
    icon: Settings,
    title: "Premium Materials",
    description: "Only the finest steel and components",
  },
  {
    icon: Brain,
    title: "Ergonomic Design",
    description: "Comfort during extended work",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Worldwide shipping",
  },
]

export function WhyChooseUs() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          features.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, index])
            }, index * 200)
          })
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-[#E0E0E0]">
          Why Choose <span className="text-[#FF5F1F]">Us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`group relative p-8 bg-[#222222] border border-[#333333] rounded-lg transition-all duration-500 hover:border-[#FF5F1F] hover:shadow-[0_0_30px_rgba(255,95,31,0.2)] ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF5F1F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <Icon className="w-12 h-12 text-[#FF5F1F] mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <h3 className="text-2xl font-semibold mb-2 text-[#E0E0E0]">{feature.title}</h3>
                <p className="text-[#E0E0E0]/70 font-[family-name:var(--font-inter)]">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
