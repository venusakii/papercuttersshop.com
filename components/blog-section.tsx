import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const articles = [
  {
    title: "How to Choose a Craft Knife?",
    excerpt: "Complete guide to selecting the perfect tool for your tasks",
    image: "/craft-knife-selection-guide-blueprint-style.jpg",
    date: "March 15, 2025",
  },
  {
    title: "TOP-5 Safe Cutters for Models",
    excerpt: "Review of the best tools for architectural and design projects",
    image: "/safe-cutting-tools-for-models-blueprint.jpg",
    date: "March 10, 2025",
  },
  {
    title: "Guillotine vs Rotary Cutter?",
    excerpt: "Analyzing the advantages and disadvantages of different cutter types",
    image: "/guillotine-vs-rotary-cutter-comparison-blueprint.jpg",
    date: "March 5, 2025",
  },
]

export function BlogSection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-[#E0E0E0]">
          Blog & <span className="text-[#FF5F1F]">Tips</span>
        </h2>
        <p className="text-center text-[#E0E0E0]/70 mb-16 text-xl font-[family-name:var(--font-inter)]">
          Helpful articles about choosing and using tools
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="group bg-[#222222] border border-[#333333] rounded-lg overflow-hidden transition-all duration-300 hover:border-[#FF5F1F] hover:shadow-[0_0_30px_rgba(255,95,31,0.2)]"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#222222] to-transparent" />
              </div>

              <div className="p-6">
                <p className="text-sm text-[#FF5F1F] mb-2 font-[family-name:var(--font-inter)]">{article.date}</p>
                <h3 className="text-xl font-bold mb-3 text-[#E0E0E0] group-hover:text-[#FF5F1F] transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-[#E0E0E0]/70 mb-4 font-[family-name:var(--font-inter)] leading-relaxed">
                  {article.excerpt}
                </p>
                <Button
                  variant="ghost"
                  className="text-[#FF5F1F] hover:text-[#FFD166] hover:bg-[#FF5F1F]/10 p-0 h-auto font-semibold"
                >
                  Read More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
