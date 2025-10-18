import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { Star, Check, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { products } from "@/lib/products-data"

export default function ProductReviewPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <CustomCursor />
        <Navigation />

        <main className="pt-24 pb-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-[#FF5F1F] mb-6">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Product Not Found</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The product you're looking for doesn't exist or has been removed.
            </p>
            <Button
              size="lg"
              asChild
              className="bg-[#FF5F1F] hover:bg-[#FFD166] text-[#1A1A1A] font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,95,31,0.5)]"
            >
              <a href="/reviews">Back to Reviews</a>
            </Button>
          </div>
        </main>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Product Header */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="relative group">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-[500px] object-cover rounded-lg border-2 border-border group-hover:border-[#FF5F1F] transition-all duration-300"
              />
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{product.name}</h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < Math.floor(product.rating) ? "fill-[#FFD166] text-[#FFD166]" : "text-muted"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{product.description}</p>

              <div className="space-y-3 mb-8">
                <h3 className="text-xl font-semibold text-foreground">Key Features:</h3>
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#FF5F1F]" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                asChild
                className="w-full bg-[#FF5F1F] hover:bg-[#FFD166] text-[#1A1A1A] font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,95,31,0.5)]"
              >
                <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Buy on Amazon
                </a>
              </Button>
            </div>
          </div>

          {/* Specifications */}
          <Card className="p-8 mb-16 bg-card border-border">
            <h2 className="text-3xl font-bold text-foreground mb-6">Technical Specifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center border-b border-border pb-3">
                  <span className="text-muted-foreground capitalize">{key}:</span>
                  <span className="text-foreground font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Customer Reviews */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Customer Reviews</h2>
            <div className="space-y-6">
              {product.customerReviews.map((review, index) => (
                <Card key={index} className="p-6 bg-card border-border">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-foreground">{review.name}</h3>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? "fill-[#FFD166] text-[#FFD166]" : "text-muted"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
