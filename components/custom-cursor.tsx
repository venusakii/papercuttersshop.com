"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      const target = e.target as HTMLElement
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" || target.tagName === "BUTTON" || target.tagName === "A",
      )
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      {/* Main cursor - blade */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className={`transition-all duration-200 ${isPointer ? "scale-150" : "scale-100"}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L22 12L12 22L2 12L12 2Z" fill="#FF5F1F" opacity="0.8" />
            <path d="M12 2L22 12L12 14L2 12L12 2Z" fill="#FFD166" opacity="0.6" />
          </svg>
        </div>
      </div>

      {/* Trail effect */}
      <div
        className="fixed pointer-events-none z-[9998] w-1 h-8 bg-gradient-to-b from-[#FF5F1F] to-transparent opacity-50 blur-sm"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -100%) rotate(45deg)",
          transition: "left 0.1s, top 0.1s",
        }}
      />
    </>
  )
}
