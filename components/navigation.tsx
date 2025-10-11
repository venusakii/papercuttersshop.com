"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#1A1A1A]/80 backdrop-blur-md border-b border-[#333333]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#FF5F1F] to-[#FFD166] clip-path-diamond" />
            <span className="text-xl font-bold text-[#E0E0E0]">PaperCuttersShop</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-[#E0E0E0] hover:text-[#FF5F1F] transition-colors">
              Home
            </Link>
            <Link href="/reviews" className="text-[#E0E0E0] hover:text-[#FF5F1F] transition-colors">
              Reviews
            </Link>
            <Link href="/about" className="text-[#E0E0E0] hover:text-[#FF5F1F] transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-[#E0E0E0] hover:text-[#FF5F1F] transition-colors">
              Contact
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-[#E0E0E0] hover:text-[#FF5F1F] hover:bg-[#2A2A2A]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#333333]">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-[#E0E0E0] hover:text-[#FF5F1F] transition-colors">
                Home
              </Link>
              <Link href="/reviews" className="text-[#E0E0E0] hover:text-[#FF5F1F] transition-colors">
                Reviews
              </Link>
              <Link href="/about" className="text-[#E0E0E0] hover:text-[#FF5F1F] transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-[#E0E0E0] hover:text-[#FF5F1F] transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
