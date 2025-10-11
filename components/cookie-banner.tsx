"use client"

import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { useState, useEffect } from "react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookiesAccepted")
    if (!hasAccepted) {
      setTimeout(() => setIsVisible(true), 1000)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md animate-in slide-in-from-bottom-5 duration-500">
      <div className="bg-[#222222] border-2 border-[#333333] rounded-lg p-6 shadow-2xl relative overflow-hidden">
        {/* Cutting line effect */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF5F1F] to-transparent" />

        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-[#E0E0E0]/50 hover:text-[#E0E0E0] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-lg font-semibold mb-2 text-[#E0E0E0] pr-8">🍪 Cookies</h3>
        <p className="text-sm text-[#E0E0E0]/70 mb-4 font-[family-name:var(--font-inter)] leading-relaxed">
          This website uses cookies to improve your experience and analyze site usage. By continuing, you consent to the
          use of cookies.
        </p>

        <Button
          onClick={handleAccept}
          className="w-full bg-[#FF5F1F] hover:bg-[#FFD166] text-[#1A1A1A] font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,95,31,0.5)]"
        >
          Accept
        </Button>
      </div>
    </div>
  )
}
