import { HeroSection } from "@/components/hero-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ProductCategories } from "@/components/product-categories"
import { FeaturedProduct } from "@/components/featured-product"
import { VideoDemo } from "@/components/video-demo"
import { ProductComparison } from "@/components/product-comparison"
import { Testimonials } from "@/components/testimonials"
import { ForWhom } from "@/components/for-whom"
import { BlogSection } from "@/components/blog-section"
import { Newsletter } from "@/components/newsletter"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Navigation } from "@/components/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { CustomCursor } from "@/components/custom-cursor"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1A1A1A] via-[#1A1A1A] to-[#0F0F0F]">
      <CustomCursor />
      <Navigation />
      <ThemeToggle />
      <HeroSection />
      <WhyChooseUs />
      <ProductCategories />
      <FeaturedProduct />
      <VideoDemo />
      <ProductComparison />
      <Testimonials />
      <ForWhom />
      <BlogSection />
      <Newsletter />
      <ContactSection />
      <Footer />
      <CookieBanner />
    </main>
  )
}
