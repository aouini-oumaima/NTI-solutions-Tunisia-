import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield, Camera, Flame } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { products } from "@/lib/products";
import { CatalogueClient } from "./CatalogueClient";

export const metadata: Metadata = {
  title: "Catalogue Produits | Systèmes de sécurité — NTI Solutions Tunisie",
  description:
    "Découvrez les 20 produits NTI Solutions : caméras IP, PTZ, thermiques, tourniquets, systèmes anti-intrusion, détection incendie, désenfumage. Solutions B2B pour la Tunisie.",
  openGraph: {
    title: "Catalogue Produits — NTI Solutions Tunisie",
    description:
      "Vidéosurveillance, contrôle d'accès et sécurité incendie. 20 produits professionnels pour entreprises tunisiennes.",
    locale: "fr_TN",
    type: "website",
  },
};

const categories = [
  {
    icon: Camera,
    label: "Vidéosurveillance",
    count: products.filter((p) => p.categorySlug === "videosurveillance").length,
    desc: "Caméras IP, CCTV, PTZ, thermiques, DVR/NVR/XVR",
    color: "#1E4A7B",
  },
  {
    icon: Shield,
    label: "Contrôle d'accès",
    count: products.filter((p) => p.categorySlug === "controle-acces").length,
    desc: "Tourniquets, couloirs sécurisés, anti-intrusion, véhicules",
    color: "#0C1F3D",
  },
  {
    icon: Flame,
    label: "Sécurité incendie",
    count: products.filter((p) => p.categorySlug === "securite-incendie").length,
    desc: "Détection, désenfumage, lutte incendie",
    color: "#B81C2E",
  },
];

export default function ProduitsPage() {
  return (
    <>
      <PageHeader
        title="Catalogue Produits."
        subtitle="L'ensemble de nos solutions de sécurité et de sûreté électronique, pensées pour les entreprises tunisiennes."
        breadcrumbs={[{ label: "Catalogue Produits" }]}
        image="/images/Le-systeme-de-securite-incendie.jpg.png"
        tag="Catalogue — 20 produits"
      />

      {/* Category overview strip */}
      <section className="bg-[#0C1F3D] py-10">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {categories.map((cat) => (
              <div key={cat.label} className="bg-[#0C1F3D] px-8 py-7 flex items-center gap-5">
                <div
                  className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(212,130,10,0.12)", border: "1px solid rgba(212,130,10,0.25)" }}
                >
                  <cat.icon size={22} className="text-[#D4820A]" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="font-semibold text-white text-sm" style={{ fontFamily: "var(--font-display)" }}>
                      {cat.label}
                    </p>
                    <span className="text-xs text-[#D4820A] font-bold">{cat.count}</span>
                  </div>
                  <p className="text-xs text-white/40 leading-snug">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main catalogue section */}
      <section className="bg-white section-padding">
        <div className="container-wide">
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-[#D4820A]" />
                <span className="label-tag text-[#526272]">Produits & Solutions</span>
              </div>
              <h2 className="heading-md text-[#0C1F3D]">
                Toutes nos solutions<br />
                <span className="gradient-text">de sécurité.</span>
              </h2>
            </div>
            <p className="text-sm text-[#526272] max-w-sm leading-relaxed self-end">
              Filtrez par catégorie pour trouver rapidement le produit adapté à votre besoin.
              Chaque fiche détaille les caractéristiques, spécifications et applications.
            </p>
          </div>

          {/* Client-side filter + grid */}
          <CatalogueClient products={products} />
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-[#F2F5F8] section-padding-sm">
        <div className="container-wide">
          <div className="bg-[#0C1F3D] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            {/* Amber accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D4820A] via-[#D4820A]/40 to-transparent" />

            {/* Corner decorations */}
            <div className="absolute top-5 right-5 w-10 h-10 border-t border-r border-white/10" />
            <div className="absolute bottom-5 left-5 w-10 h-10 border-b border-l border-[#D4820A]/20" />

            <div>
              <p
                className="text-xl font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
              >
                Un projet de sécurité sur mesure ?
              </p>
              <p className="text-sm text-white/50 max-w-md leading-relaxed">
                Nos ingénieurs étudient votre site, dimensionnent la solution et vous remettent un devis
                détaillé sous 24h. Sans engagement.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Link href="/contact" className="btn-primary group text-sm px-7 py-3.5">
                Demander un devis
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="tel:+21671805945" className="btn-outline text-sm px-7 py-3.5">
                +216 71 805 945
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
