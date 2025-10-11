"use client"

import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Anna Peterson",
    role: "Illustrator Artist",
    image: "/professional-female-artist.png",
    rating: 5,
    text: "These knives changed my approach to work. The precision is incredible, and the ergonomics allow me to work for hours without fatigue.",
  },
  {
    name: "Dmitry Sokolov",
    role: "Architect",
    image: "/images/team-2.png",
    rating: 5,
    text: "I use them for creating models. The cutting quality is top-notch, and the blades stay sharp for a very long time.",
  },
  {
    name: "Maria Volkova",
    role: "Craft Master",
    image: "/professional-female-crafter-portrait.jpg",
    rating: 5,
    text: "The best tools I've ever had. I recommend them to everyone who is serious about crafting.",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-[#E0E0E0]">
          Customer <span className="text-[#FF5F1F]">Reviews</span>
        </h2>

        <div className="relative bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border-2 border-[#333333] rounded-2xl p-8 md:p-12">
          {/* Decorative cutting line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF5F1F] to-transparent" />

          <div className="flex flex-col items-center text-center">
            <img
              src={current.image || "/placeholder.svg"}
              alt={current.name}
              className="w-24 h-24 rounded-full border-4 border-[#FF5F1F] mb-6 object-cover"
            />

            <div className="flex gap-1 mb-4">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#FFD166] text-[#FFD166]" />
              ))}
            </div>

            <p className="text-xl text-[#E0E0E0]/90 mb-6 leading-relaxed font-[family-name:var(--font-inter)] max-w-2xl">
              "{current.text}"
            </p>

            <h3 className="text-2xl font-bold text-[#E0E0E0] mb-1">{current.name}</h3>
            <p className="text-[#E0E0E0]/70 font-[family-name:var(--font-inter)]">{current.role}</p>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="border-[#333333] hover:border-[#FF5F1F] hover:bg-[#FF5F1F]/10 bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="border-[#333333] hover:border-[#FF5F1F] hover:bg-[#FF5F1F]/10 bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
