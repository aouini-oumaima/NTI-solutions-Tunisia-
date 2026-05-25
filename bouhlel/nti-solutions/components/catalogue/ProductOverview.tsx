import type { Product } from "@/lib/products";
import { Img } from "@/components/ui/Img";

interface ProductOverviewProps {
  product: Product;
}

export function ProductOverview({ product }: ProductOverviewProps) {
  return (
    <section className="bg-white section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#D4820A]" />
              <span className="label-tag text-[#526272]">Vue d&apos;ensemble</span>
            </div>

            <h2 className="heading-md text-[#0C1F3D] mb-7">
              {product.name}
            </h2>

            {product.description.split(". ").reduce<string[]>((acc, sentence, i, arr) => {
              if (i === 0) return [sentence + "."];
              if (i === Math.floor(arr.length / 2)) return [...acc, sentence + "."];
              return acc.map((p, pi) => pi === acc.length - 1 ? p + " " + sentence + "." : p);
            }, []).map((paragraph, i) => (
              <p key={i} className="text-base text-[#526272] leading-relaxed mb-5">
                {paragraph}
              </p>
            ))}

            {/* Benefits bullets */}
            <ul className="mt-8 space-y-3.5">
              {product.benefits.map((benefit) => (
                <li key={benefit.title} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#D4820A] flex-shrink-0 mt-2" />
                  <div>
                    <span className="text-sm font-semibold text-[#0C1F3D]" style={{ fontFamily: "var(--font-display)" }}>
                      {benefit.title}
                    </span>
                    <span className="text-sm text-[#526272]"> — {benefit.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Image with amber accent */}
          <div className="relative">
            {/* Amber corner decoration */}
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#D4820A] z-0" />
            <div className="absolute -bottom-4 -left-4 w-32 h-1 bg-[#D4820A] z-0" />

            <div
              className="relative z-10 border border-[#DDE3EC] overflow-hidden"
              style={
                product.nobgImage
                  ? { background: "linear-gradient(135deg, #0C1F3D 0%, #0E2A50 100%)" }
                  : undefined
              }
            >
              <Img
                src={product.nobgImage ?? product.heroImage}
                alt={`${product.name} — Vue d'ensemble`}
                loading="lazy"
                decoding="async"
                style={
                  product.nobgImage
                    ? {
                        width: "100%",
                        height: "420px",
                        objectFit: "contain",
                        padding: "32px",
                        filter: "drop-shadow(0 20px 50px rgba(0,0,0,0.5)) drop-shadow(0 0 30px rgba(212,130,10,0.12))",
                      }
                    : { width: "100%", height: "420px", objectFit: "cover" }
                }
              />
              {/* Category label overlay */}
              <div className="absolute top-5 left-5 flex items-center gap-2 bg-[#0C1F3D]/90 px-3 py-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4820A]" />
                <span className="text-xs text-white/70 font-medium tracking-wider uppercase">
                  {product.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
