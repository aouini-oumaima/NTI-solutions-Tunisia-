"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Product } from "@/lib/products";

interface ProductFAQProps {
  product: Product;
}

export function ProductFAQ({ product }: ProductFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <section className="bg-white section-padding">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#D4820A]" />
            <span className="label-tag text-[#526272]">FAQ</span>
          </div>
          <h2 className="heading-md text-[#0C1F3D] mb-12">
            Questions fréquentes.
          </h2>

          {/* Accordion items */}
          <div className="space-y-0 border-t border-[#DDE3EC]">
            {product.faq.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`border-b border-[#DDE3EC] transition-all duration-300 ${
                    isOpen ? "border-l-2 border-l-[#D4820A]" : ""
                  }`}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between gap-4 py-5 px-4 text-left group hover:bg-[#F2F5F8] transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-sm font-semibold leading-snug transition-colors duration-200 ${
                        isOpen ? "text-[#D4820A]" : "text-[#0C1F3D] group-hover:text-[#0C1F3D]"
                      }`}
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`flex-shrink-0 text-[#526272] transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#D4820A]" : ""
                      }`}
                      strokeWidth={1.5}
                    />
                  </button>

                  {/* Answer — conditional height */}
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: isOpen ? "500px" : "0px",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <p className="text-sm text-[#526272] leading-relaxed px-4 pb-5 pt-1">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 bg-[#F2F5F8] border border-[#DDE3EC] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <p
                className="font-semibold text-[#0C1F3D] mb-1 text-sm"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Vous n&apos;avez pas trouvé votre réponse ?
              </p>
              <p className="text-xs text-[#526272]">
                Notre équipe technique répond à toutes vos questions.
              </p>
            </div>
            <a href="/contact" className="btn-outline-dark text-sm px-5 py-2.5 flex-shrink-0 whitespace-nowrap">
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
