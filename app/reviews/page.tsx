import { Navigation } from "@/components/navigation"
import { ProductReviewCards } from "@/components/product-review-cards"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function ReviewsPage() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main className="min-h-screen bg-background pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4">Customer Reviews</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what our customers say about our precision cutting tools
            </p>
          </div>
          <ProductReviewCards />
          <Testimonials />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
