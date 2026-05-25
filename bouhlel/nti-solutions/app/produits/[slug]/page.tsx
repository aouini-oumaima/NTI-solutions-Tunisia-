import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/lib/products";
import { ProductHero } from "@/components/catalogue/ProductHero";
import { ProductOverview } from "@/components/catalogue/ProductOverview";
import { ProductFeatures } from "@/components/catalogue/ProductFeatures";
import { ProductSpecs } from "@/components/catalogue/ProductSpecs";
import { ProductGallery } from "@/components/catalogue/ProductGallery";
import { ProductIndustries } from "@/components/catalogue/ProductIndustries";
import { ProductFAQ } from "@/components/catalogue/ProductFAQ";
import { ProductRelated } from "@/components/catalogue/ProductRelated";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: product.seo.title,
    description: product.seo.description,
    openGraph: {
      title: product.seo.title,
      description: product.seo.description,
      images: [{ url: product.heroImage }],
      locale: "fr_TN",
      type: "website",
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <>
      {/* 1. Hero — full viewport, dark navy, entrance animations */}
      <ProductHero product={product} />

      {/* 2. Overview — 2-col with benefits */}
      <ProductOverview product={product} />

      {/* 3. Features — 3/4-col card grid */}
      <ProductFeatures product={product} />

      {/* 4. Specs — dark navy table */}
      <ProductSpecs product={product} />

      {/* 5. Gallery — css grid masonry */}
      <ProductGallery product={product} />

      {/* 6. Industries — 3×2 grid on light surface */}
      <ProductIndustries product={product} />

      {/* 7. FAQ — accordion client component */}
      <ProductFAQ product={product} />

      {/* 8. Related — dark navy 3-col */}
      <ProductRelated product={product} />
    </>
  );
}
