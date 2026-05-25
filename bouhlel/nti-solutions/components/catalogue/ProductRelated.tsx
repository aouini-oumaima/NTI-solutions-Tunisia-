import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getRelatedProducts } from "@/lib/products";
import type { Product } from "@/lib/products";
import { Img } from "@/components/ui/Img";

interface ProductRelatedProps {
  product: Product;
}

export function ProductRelated({ product }: ProductRelatedProps) {
  const related = getRelatedProducts(product.related);
  if (related.length === 0) return null;

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: "#0C1F3D" }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#D4820A]" />
              <span className="label-tag text-white/40">Découvrir aussi</span>
            </div>
            <h2 className="heading-md text-white">
              Produits associés.
            </h2>
          </div>
          <Link
            href="/produits"
            className="btn-outline text-sm px-6 py-3 self-start md:self-end flex items-center gap-2"
          >
            Voir tout le catalogue
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {related.map((rel) => (
            <Link
              key={rel.slug}
              href={`/produits/${rel.slug}`}
              className="group block border border-white/10 hover:border-[#D4820A]/40 transition-all duration-300 card-lift"
            >
              {/* Image */}
              <div
                className="h-52 overflow-hidden flex items-center justify-center"
                style={
                  rel.nobgImage
                    ? { background: "linear-gradient(135deg, #0A1A30 0%, #0E2448 100%)" }
                    : undefined
                }
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Img
                  src={rel.nobgImage ?? rel.heroImage}
                  alt={rel.name}
                  loading="lazy"
                  decoding="async"
                  style={
                    rel.nobgImage
                      ? {
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          padding: "20px",
                          filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.6)) drop-shadow(0 0 20px rgba(212,130,10,0.15))",
                          opacity: 0.9,
                          transition: "opacity 0.3s ease, transform 0.4s ease",
                        }
                      : { width: "100%", height: "100%", objectFit: "cover", opacity: 0.75 }
                  }
                  className={rel.nobgImage ? "group-hover:opacity-100 group-hover:scale-105" : "group-hover:opacity-100 zoom-target img-zoom-wrap"}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span
                  className="inline-block text-[10px] font-semibold tracking-widest uppercase text-[#D4820A] mb-3"
                >
                  {rel.category}
                </span>
                <h3
                  className="font-semibold text-white mb-2 text-base group-hover:text-[#D4820A] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
                >
                  {rel.name}
                </h3>
                <p className="text-xs text-white/45 leading-relaxed mb-5">
                  {rel.tagline}
                </p>
                <div className="flex items-center gap-2 text-xs text-[#D4820A] font-medium">
                  Voir le produit
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
