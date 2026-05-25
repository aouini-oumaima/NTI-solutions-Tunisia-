"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Img } from "@/components/ui/Img";
import type { Product } from "@/lib/products";

interface ProductHeroProps {
  product: Product;
}

export function ProductHero({ product }: ProductHeroProps) {
  const categoryColor =
    product.categorySlug === "securite-incendie"
      ? "text-red-400"
      : "text-[#D4820A]";

  return (
    <section
      className="relative min-h-[100svh] flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0C1F3D 0%, #102040 55%, #0E2A50 100%)",
      }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Right diagonal panel */}
      <div
        className="absolute right-0 top-0 bottom-0 z-0 pointer-events-none hidden lg:block"
        style={{
          width: "52%",
          background:
            "linear-gradient(155deg, transparent 0%, rgba(212,130,10,0.04) 40%, rgba(21,42,82,0.6) 100%)",
          clipPath: "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      />

      {/* Radial amber glow */}
      <div
        className="absolute z-0 pointer-events-none hidden lg:block"
        style={{
          right: "4%",
          top: "50%",
          transform: "translate(0, -50%)",
          width: "480px",
          height: "480px",
          background:
            "radial-gradient(ellipse at center, rgba(212,130,10,0.18) 0%, rgba(212,130,10,0.06) 45%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Corner marks */}
      <div className="absolute top-24 right-10 w-14 h-14 border-t border-r border-white/10 z-10" />
      <div className="absolute top-24 left-10 w-14 h-14 border-t border-l border-white/10 z-10 hidden lg:block" />
      <div className="absolute bottom-10 left-10 w-10 h-10 border-b border-l border-[#D4820A]/25 z-10 hidden lg:block" />

      {/* Amber accent lines */}
      <div className="absolute top-0 right-0 w-[1px] h-36 bg-gradient-to-b from-[#D4820A] to-transparent z-10" />
      <div className="absolute top-0 right-0 h-[1px] w-36 bg-gradient-to-l from-[#D4820A] to-transparent z-10" />

      {/* Main layout */}
      <div className="relative z-10 container-wide w-full flex items-center min-h-[100svh] pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-center w-full">

          {/* LEFT — Text */}
          <div className="flex flex-col justify-center">
            {/* Category badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-px bg-[#D4820A]" />
              <span
                className="inline-flex items-center px-3 py-1 text-[11px] font-semibold tracking-widest uppercase"
                style={{
                  background: "rgba(212,130,10,0.15)",
                  border: "1px solid rgba(212,130,10,0.35)",
                  color: "#D4820A",
                }}
              >
                {product.category}
              </span>
              {product.badge && (
                <span
                  className="inline-flex items-center px-2.5 py-1 text-[10px] font-semibold tracking-widest uppercase text-white/60"
                  style={{ border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  {product.badge}
                </span>
              )}
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.215, 0.61, 0.355, 1] }}
              className="heading-lg text-white mb-5"
            >
              {product.name}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-base md:text-lg text-[#D4820A] font-medium mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {product.tagline}
            </motion.p>

            {/* Description excerpt */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-sm md:text-base text-white/55 max-w-[480px] mb-10 leading-relaxed"
            >
              {product.description.split(". ").slice(0, 2).join(". ")}.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link href="/contact" className="btn-primary group text-sm px-7 py-3.5">
                Demander un devis
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                className="btn-outline text-sm px-7 py-3.5 flex items-center gap-2"
                aria-label="Télécharger la fiche technique (bientôt disponible)"
                disabled
                style={{ opacity: 0.6, cursor: "not-allowed" }}
              >
                <Download size={15} />
                Fiche technique
              </button>
            </motion.div>

            {/* Specs preview */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-6 flex-wrap"
            >
              {product.specs.slice(0, 3).map((spec, i) => (
                <div
                  key={spec.label}
                  className={`flex flex-col ${i > 0 ? "pl-6 border-l border-white/10" : ""}`}
                >
                  <p
                    className="text-sm font-bold text-white leading-none mb-0.5"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {spec.value}
                  </p>
                  <p className="text-[10px] text-white/35 tracking-widest uppercase">{spec.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Product image */}
          <div className="relative hidden lg:flex items-center justify-center">
            {/* Ring decorations */}
            <div
              className="absolute"
              style={{
                width: "420px",
                height: "420px",
                border: "1px solid rgba(212,130,10,0.12)",
                borderRadius: "50%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <div
              className="absolute"
              style={{
                width: "310px",
                height: "310px",
                border: "1px solid rgba(212,130,10,0.07)",
                borderRadius: "50%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative z-10"
            >
              <Img
                src={product.nobgImage ?? product.heroImage}
                alt={product.name}
                fetchPriority="high"
                style={{
                  height: "clamp(340px, 52vh, 520px)",
                  width: "auto",
                  maxWidth: "480px",
                  objectFit: product.nobgImage ? "contain" : "cover",
                  filter: product.nobgImage
                    ? "drop-shadow(0 30px 60px rgba(0,0,0,0.55)) drop-shadow(0 0 40px rgba(212,130,10,0.18))"
                    : "drop-shadow(0 30px 60px rgba(0,0,0,0.5))",
                }}
              />
            </motion.div>

            {/* Floating spec badge */}
            {product.badge && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="absolute bottom-[22%] right-[4%] flex items-center gap-2.5 bg-[#D4820A] px-4 py-3 z-20"
              >
                <span className="text-sm font-bold text-white tracking-wide whitespace-nowrap">
                  {product.badge}
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
