"use client"

import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 z-50 bg-[#FF5F1F] hover:bg-[#FFD166] text-[#1A1A1A] shadow-lg hover:shadow-[0_0_30px_rgba(255,95,31,0.5)] transition-all duration-300"
        >
          <ArrowUp className="h-5 w-5" />
          <span className="sr-only">Наверх</span>
        </Button>
      )}
    </>
  )
}
