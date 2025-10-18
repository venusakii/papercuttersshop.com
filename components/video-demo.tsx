"use client"

export function VideoDemo() {
  // const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-[#E0E0E0]">
          Product <span className="text-[#FF5F1F]">Showcase</span>
        </h2>

        <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-[#333333] hover:border-[#FF5F1F] transition-colors duration-300">
          <img
            src="/precision-craft-knife-cutting-demonstration-video-t.jpg"
            alt="Precision craft knife cutting demonstration"
            className="w-full h-full object-cover"
          />

          {/* Decorative cutting lines */}
          <div className="absolute top-0 left-1/4 w-[2px] h-full bg-gradient-to-b from-[#FF5F1F] via-transparent to-[#FF5F1F] opacity-30" />
          <div className="absolute top-0 right-1/4 w-[2px] h-full bg-gradient-to-b from-[#FFD166] via-transparent to-[#FFD166] opacity-30" />
        </div>
      </div>
    </section>
  )
}
