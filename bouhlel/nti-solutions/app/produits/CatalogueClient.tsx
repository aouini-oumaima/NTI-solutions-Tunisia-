"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/products";

type FilterSlug = "tous" | "videosurveillance" | "controle-acces" | "securite-incendie";

const FILTERS: { label: string; value: FilterSlug }[] = [
  { label: "Tous les produits", value: "tous" },
  { label: "Vidéosurveillance", value: "videosurveillance" },
  { label: "Contrôle d'accès", value: "controle-acces" },
  { label: "Sécurité incendie", value: "securite-incendie" },
];

const CATEGORY_COLORS: Record<string, string> = {
  videosurveillance: "bg-blue-500/10 text-blue-300 border-blue-500/20",
  "controle-acces": "bg-amber-500/10 text-amber-300 border-amber-500/20",
  "securite-incendie": "bg-red-500/10 text-red-300 border-red-500/20",
};

interface CatalogueClientProps {
  products: Product[];
}

export function CatalogueClient({ products }: CatalogueClientProps) {
  const [activeFilter, setActiveFilter] = useState<FilterSlug>("tous");

  const filtered =
    activeFilter === "tous"
      ? products
      : products.filter((p) => p.categorySlug === activeFilter);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-14">
        {FILTERS.map((filter) => {
          const isActive = activeFilter === filter.value;
          return (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 py-2.5 text-sm font-medium transition-all duration-200 border ${
                isActive
                  ? "bg-[#0C1F3D] text-white border-[#0C1F3D]"
                  : "bg-white text-[#526272] border-[#DDE3EC] hover:border-[#0C1F3D] hover:text-[#0C1F3D]"
              }`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              {filter.label}
              {filter.value !== "tous" && (
                <span
                  className={`ml-2 text-xs ${
                    isActive ? "text-white/60" : "text-[#526272]/60"
                  }`}
                >
                  ({products.filter((p) => p.categorySlug === filter.value).length})
                </span>
              )}
              {filter.value === "tous" && (
                <span
                  className={`ml-2 text-xs ${
                    isActive ? "text-white/60" : "text-[#526272]/60"
                  }`}
                >
                  ({products.length})
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Product grid — 4 col desktop, 2 tablet, 1 mobile */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-[#526272]">Aucun produit dans cette catégorie.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((product) => (
            <Link
              key={product.slug}
              href={`/produits/${product.slug}`}
              className="group block border border-[#DDE3EC] hover:border-[#D4820A] bg-white transition-all duration-300 card-lift"
            >
              {/* Image */}
              <div
                className="relative h-48 overflow-hidden flex items-center justify-center"
                style={{ background: "#F4F6F9" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.nobgImage ?? product.heroImage}
                  alt={product.name}
                  loading="lazy"
                  decoding="async"
                  style={
                    product.nobgImage
                      ? {
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          padding: "20px",
                          transition: "transform 0.4s ease",
                        }
                      : { width: "100%", height: "100%", objectFit: "cover" }
                  }
                  className="group-hover:scale-105"
                />
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 text-[10px] font-semibold tracking-widest uppercase border ${
                      CATEGORY_COLORS[product.categorySlug] ?? "bg-white/10 text-white border-white/20"
                    }`}
                  >
                    {product.category}
                  </span>
                </div>
                {/* Product badge (IP66, etc.) */}
                {product.badge && (
                  <div className="absolute top-3 right-3 bg-[#D4820A] px-2 py-0.5">
                    <span className="text-[10px] font-bold text-white tracking-wide">
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  className="font-semibold text-[#0C1F3D] mb-1.5 text-sm leading-snug group-hover:text-[#D4820A] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
                >
                  {product.name}
                </h3>
                <p className="text-xs text-[#526272] leading-relaxed mb-5 line-clamp-2">
                  {product.tagline}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-[#D4820A] font-semibold group-hover:gap-2.5 transition-all duration-200">
                  Voir le produit
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
