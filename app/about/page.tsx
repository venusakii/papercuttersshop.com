import { Navigation } from "@/components/navigation"
import { WhyChooseUs } from "@/components/why-choose-us"
import { VideoDemo } from "@/components/video-demo"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function AboutPage() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main className="min-h-screen bg-background pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4">About Us</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Precision cutting tools crafted for professionals and enthusiasts
            </p>
          </div>
          <WhyChooseUs />
          <div className="mt-16">
            <VideoDemo />
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
