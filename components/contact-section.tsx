"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-[#E0E0E0]">
          <span className="text-[#FF5F1F]">Contact</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[#222222]/50 backdrop-blur-sm border border-[#333333] rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-[#E0E0E0]">Write to Us</h3>
            <form className="space-y-4">
              <Input
                placeholder="Your Name"
                className="bg-[#2A2A2A] border-[#333333] text-[#E0E0E0] placeholder:text-[#E0E0E0]/50 focus:border-[#FF5F1F]"
              />
              <Input
                type="email"
                placeholder="Email"
                className="bg-[#2A2A2A] border-[#333333] text-[#E0E0E0] placeholder:text-[#E0E0E0]/50 focus:border-[#FF5F1F]"
              />
              <Textarea
                placeholder="Your Message"
                rows={5}
                className="bg-[#2A2A2A] border-[#333333] text-[#E0E0E0] placeholder:text-[#E0E0E0]/50 focus:border-[#FF5F1F] resize-none"
              />
              <Button className="w-full bg-[#FF5F1F] hover:bg-[#FFD166] text-[#1A1A1A] font-semibold transition-all duration-300">
                Send
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#FF5F1F]/10 border border-[#FF5F1F] flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-[#FF5F1F]" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-[#E0E0E0]">Email</h4>
                <p className="text-[#E0E0E0]/70 font-[family-name:var(--font-inter)]">info@papercuttersshop.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#FF5F1F]/10 border border-[#FF5F1F] flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-[#FF5F1F]" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-[#E0E0E0]">Phone</h4>
                <p className="text-[#E0E0E0]/70 font-[family-name:var(--font-inter)]">+1 513-398-4635</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#FF5F1F]/10 border border-[#FF5F1F] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#FF5F1F]" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-[#E0E0E0]">Address</h4>
                <p className="text-[#E0E0E0]/70 font-[family-name:var(--font-inter)]">
                  123 Craft Street
                  <br />
                  New York, NY 10001
                  <br />
                  United States
                </p>
              </div>
            </div>

            {/* Mini map placeholder */}
          </div>
        </div>
      </div>
    </section>
  )
}
