"use client"

import { Check, X } from "lucide-react"
import { useState } from "react"

const products = [
  {
    name: "Fiskars",
    price: "$24.99",
    features: {
      "Japanese Steel": true,
      "Ergonomic Handle": true,
      "Replaceable Blades": true,
      "5-Year Warranty": true,
      "Case Included": true,
    },
  },
  {
    name: "OLFA",
    price: "$19.99",
    features: {
      "Japanese Steel": true,
      "Ergonomic Handle": true,
      "Replaceable Blades": true,
      "5-Year Warranty": false,
      "Case Included": false,
    },
  },
  {
    name: "X-Acto",
    price: "$14.99",
    features: {
      "Japanese Steel": false,
      "Ergonomic Handle": true,
      "Replaceable Blades": true,
      "5-Year Warranty": false,
      "Case Included": false,
    },
  },
]

export function ProductComparison() {
  const [hoveredColumn, setHoveredColumn] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-[#E0E0E0]">
          Model <span className="text-[#FF5F1F]">Comparison</span>
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left text-[#E0E0E0] font-semibold text-xl border-b-2 border-[#333333]">
                  Feature
                </th>
                {products.map((product, index) => (
                  <th
                    key={index}
                    className={`p-4 text-center border-b-2 transition-all duration-300 ${
                      hoveredColumn === index ? "border-[#FF5F1F] bg-[#FF5F1F]/10" : "border-[#333333]"
                    }`}
                    onMouseEnter={() => setHoveredColumn(index)}
                    onMouseLeave={() => setHoveredColumn(null)}
                  >
                    <div className="text-2xl font-bold text-[#E0E0E0] mb-2">{product.name}</div>
                    
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.keys(products[0].features).map((feature, featureIndex) => (
                <tr
                  key={featureIndex}
                  className="border-b border-[#333333] hover:bg-[#222222] transition-colors duration-200"
                >
                  <td className="p-4 text-[#E0E0E0] font-[family-name:var(--font-inter)]">{feature}</td>
                  {products.map((product, productIndex) => (
                    <td
                      key={productIndex}
                      className={`p-4 text-center transition-all duration-300 ${
                        hoveredColumn === productIndex ? "bg-[#FF5F1F]/10" : ""
                      }`}
                    >
                      {product.features[feature as keyof typeof product.features] ? (
                        <Check className="w-6 h-6 text-[#FF5F1F] mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-[#E0E0E0]/30 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
