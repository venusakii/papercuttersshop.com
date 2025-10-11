import { Scissors } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-[#333333]">
      {/* Animated cutting line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF5F1F] to-transparent shimmer" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and tagline */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="w-8 h-8 text-[#FF5F1F]" />
              <span className="text-2xl font-bold text-[#E0E0E0]">PaperCuttersShop</span>
            </div>
            <p className="text-[#E0E0E0]/70 font-[family-name:var(--font-inter)] max-w-md">
              Sharpness. Control. Perfect Line. The Best Cutting Tools of 2025.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#E0E0E0]">Links</h3>
            <ul className="space-y-2 font-[family-name:var(--font-inter)]">
              <li>
                <a href="#" className="text-[#E0E0E0]/70 hover:text-[#FF5F1F] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[#E0E0E0]/70 hover:text-[#FF5F1F] transition-colors">
                  Catalog
                </a>
              </li>
              <li>
                <a href="#" className="text-[#E0E0E0]/70 hover:text-[#FF5F1F] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-[#E0E0E0]/70 hover:text-[#FF5F1F] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#E0E0E0]">Legal</h3>
            <ul className="space-y-2 font-[family-name:var(--font-inter)]">
              <li>
                <a href="#" className="text-[#E0E0E0]/70 hover:text-[#FF5F1F] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#E0E0E0]/70 hover:text-[#FF5F1F] transition-colors">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-[#E0E0E0]/70 hover:text-[#FF5F1F] transition-colors">
                  Returns & Exchanges
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#333333] text-center text-[#E0E0E0]/60 text-sm font-[family-name:var(--font-inter)]">
          <p>© 2025 PaperCuttersShop. All rights reserved.</p>
          <p className="mt-2">
            Amazon Affiliate Program Participant. 🛒 As an Amazon Associate, we earn from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  )
}
