"use client"

import { Star, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { products } from "@/lib/products-data"

export function ProductReviewCards() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Top Rated <span className="text-[#FF5F1F]">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our most popular cutting tools, rated by professionals and enthusiasts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group bg-card border-border hover:border-[#FF5F1F] transition-all duration-300 overflow-hidden hover:shadow-[0_0_30px_rgba(255,95,31,0.3)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-[#FF5F1F] transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? "fill-[#FFD166] text-[#FFD166]" : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{product.summary}</p>

                <div className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#FF5F1F] rounded-full" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  className="w-full bg-[#FF5F1F] hover:bg-[#FFD166] text-[#1A1A1A] font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,95,31,0.5)]"
                >
                  <Link href={`/reviews/${product.slug}`}>
                    <Eye className="w-4 h-4 mr-2" />
                    Read Reviews
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
