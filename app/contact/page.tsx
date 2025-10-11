import { Navigation } from "@/components/navigation"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main className="min-h-screen bg-background pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our team for any questions or support
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FF5F1F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#FF5F1F]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground">support@papercuttersshop.com</p>
                  <p className="text-muted-foreground">sales@papercuttersshop.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FF5F1F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#FF5F1F]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-muted-foreground">Mon-Fri: 9AM - 6PM EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FF5F1F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#FF5F1F]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground">123 Precision Street</p>
                  <p className="text-muted-foreground">New York, NY 10001</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Send us a message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5F1F] text-foreground"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5F1F] text-foreground"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5F1F] text-foreground resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#FF5F1F] hover:bg-[#FFD166] text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <Newsletter />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
