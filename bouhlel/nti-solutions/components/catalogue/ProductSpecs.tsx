import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/products";

interface ProductSpecsProps {
  product: Product;
}

export function ProductSpecs({ product }: ProductSpecsProps) {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: "#0C1F3D" }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Amber radial */}
      <div
        className="absolute z-0 pointer-events-none"
        style={{
          right: "-5%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(ellipse at center, rgba(212,130,10,0.08) 0%, transparent 65%)",
          borderRadius: "50%",
        }}
      />

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l border-t border-[#D4820A]/30 z-10" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-[#D4820A]/30 z-10" />

      <div className="relative z-10 container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Header + CTA */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#D4820A]" />
              <span className="label-tag text-white/40">Données techniques</span>
            </div>
            <h2 className="heading-md text-white mb-6">
              Spécifications{" "}
              <span className="gradient-text">techniques.</span>
            </h2>
            <p className="text-sm text-white/45 leading-relaxed mb-10 max-w-sm">
              Toutes les données techniques du produit pour vous aider à dimensionner votre installation avec précision.
            </p>

            <div className="space-y-4">
              <Link
                href="/contact"
                className="btn-primary group inline-flex items-center gap-2 text-sm"
              >
                Demander un devis
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="block">
                <button
                  disabled
                  className="btn-outline text-sm px-6 py-3 mt-0"
                  style={{ opacity: 0.45, cursor: "not-allowed" }}
                >
                  Télécharger la fiche technique
                </button>
              </div>
            </div>

            {/* Category badge */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-xs text-white/30 tracking-widest uppercase mb-2">Catégorie</p>
              <p className="text-sm text-white/60 font-medium">{product.category}</p>
            </div>
          </div>

          {/* Right — Specs table */}
          <div>
            {/* Amber left accent */}
            <div className="relative pl-6 border-l-2 border-[#D4820A]">
              <div className="space-y-0">
                {product.specs.map((spec, i) => (
                  <div
                    key={spec.label}
                    className={`flex items-start justify-between gap-6 py-4 ${
                      i < product.specs.length - 1 ? "border-b border-white/8" : ""
                    }`}
                  >
                    <span className="text-sm text-white/50 flex-shrink-0 min-w-[140px]">
                      {spec.label}
                    </span>
                    <span
                      className="text-sm text-white font-medium text-right"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Badge if present */}
            {product.badge && (
              <div className="mt-8 inline-flex items-center gap-2.5 bg-[#D4820A]/10 border border-[#D4820A]/25 px-4 py-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4820A]" />
                <span className="text-xs text-[#D4820A] font-semibold tracking-widest uppercase">
                  {product.badge}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
