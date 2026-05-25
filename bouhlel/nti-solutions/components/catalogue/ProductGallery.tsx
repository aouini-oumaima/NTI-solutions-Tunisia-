import type { Product } from "@/lib/products";
import { Img } from "@/components/ui/Img";

interface ProductGalleryProps {
  product: Product;
}

export function ProductGallery({ product }: ProductGalleryProps) {
  if (!product.gallery || product.gallery.length === 0) return null;

  // First image is hero (large), rest are thumbnails
  const [heroImg, ...thumbs] = product.gallery;

  return (
    <section className="bg-white section-padding-sm">
      <div className="container-wide">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-8 h-px bg-[#D4820A]" />
          <span className="label-tag text-[#526272]">Galerie produit</span>
        </div>

        {/* CSS grid masonry-style */}
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridAutoRows: "200px",
          }}
        >
          {/* Hero image — spans 2 rows */}
          <div
            className="relative overflow-hidden group cursor-zoom-in img-zoom-wrap border border-[#DDE3EC]"
            style={{ gridRow: "span 2" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Img
              src={heroImg}
              alt={`${product.name} — vue principale`}
              className="zoom-target w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-[#0C1F3D]/0 group-hover:bg-[#0C1F3D]/40 transition-all duration-400 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 0zM10.5 7.5v6m3-3h-6" />
              </svg>
            </div>
          </div>

          {/* Thumbnails */}
          {thumbs.slice(0, 4).map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="relative overflow-hidden group cursor-zoom-in img-zoom-wrap border border-[#DDE3EC]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Img
                src={src}
                alt={`${product.name} — image ${i + 2}`}
                className="zoom-target w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-[#0C1F3D]/0 group-hover:bg-[#0C1F3D]/40 transition-all duration-400 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 0zM10.5 7.5v6m3-3h-6" />
                </svg>
              </div>
            </div>
          ))}

          {/* Fill remaining slots if fewer than 4 thumbs */}
          {thumbs.length < 2 && (
            <div className="bg-[#F2F5F8] border border-[#DDE3EC] flex items-center justify-center">
              <p className="text-xs text-[#526272] tracking-wide">Documentation disponible</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
