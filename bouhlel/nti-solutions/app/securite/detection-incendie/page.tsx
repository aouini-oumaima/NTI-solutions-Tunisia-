import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { ArrowRight, CheckCircle, AlertTriangle, Bell, Zap } from "lucide-react";
import { pdfDetectionIncendie } from "@/lib/pdf-data";
import { Img } from "@/components/ui/Img";

export const metadata: Metadata = {
  title: "Détection incendie",
  description:
    "Systèmes de détection incendie conventionnels et adressables par NTI Solutions. Centrales Hochiki ESP et Apollo. Installation et maintenance en Tunisie.",
};

export default function DetectionIncendiePage() {
  return (
    <>
      <PageHeader
        title="Sécurité incendie."
        subtitle="Systèmes conventionnels ou adressables : détecter le feu au plus tôt, localiser précisément, déclencher l'alerte. Compatibles Hochiki et Apollo."
        breadcrumbs={[{ label: "Sécurité", href: "/securite" }, { label: "Détection incendie" }]}
        image="/images/Le-systeme-de-securite-incendie.jpg.png"
        tag="Sécurité incendie"
        pdfData={pdfDetectionIncendie}
      />

      <section className="bg-white section-padding">
        <div className="container-wide">
          {/* What is it */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-[#D4820A]" />
                <span className="label-tag text-[#526272]">Principe</span>
              </div>
              <h2 className="heading-md text-[#0C1F3D] mb-6">
                Comment fonctionne un système de détection incendie ?
              </h2>
              <p className="text-base text-[#526272] leading-relaxed mb-4">
                Un système de détection incendie assure la <strong className="text-[#0C1F3D]">détection automatique</strong> d&apos;un
                phénomène lié au développement d&apos;un feu, le <strong className="text-[#0C1F3D]">localise précisément</strong> et
                envoie l&apos;information nécessaire pour activer les commandes adéquates.
              </p>
              <p className="text-base text-[#526272] leading-relaxed mb-4">
                Il comprend au minimum des <strong className="text-[#0C1F3D]">détecteurs automatiques</strong> et
                un <strong className="text-[#0C1F3D]">équipement de contrôle et de signalisation (ECS)</strong>.
                L&apos;alarme prévient les occupants et provoque l&apos;évacuation en toute sécurité.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { icon: AlertTriangle, text: "Détection précoce" },
                  { icon: Zap, text: "Localisation précise" },
                  { icon: Bell, text: "Alerte immédiate" },
                  { icon: CheckCircle, text: "Évacuation sécurisée" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 p-3 border border-[#DDE3EC]">
                    <item.icon size={16} className="text-[#D4820A] flex-shrink-0" />
                    <span className="text-sm text-[#0C1F3D] font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Img src="/images/Le-systeme-de-securite-incendie.jpg.png" alt="Système de sécurité incendie" className="w-full h-[400px] object-cover"  loading="lazy" decoding="async"/>
            </div>
          </div>

          {/* 2 types */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-[#D4820A]" />
            <span className="label-tag text-[#526272]">Deux technologies</span>
          </div>
          <h2 className="heading-sm text-[#0C1F3D] mb-10">
            Conventionnel ou adressable — lequel choisir ?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Link href="/securite/detection-incendie/conventionnel" className="group border border-[#DDE3EC] hover:border-[#D4820A] transition-all p-8 card-lift">
              <div className="w-6 h-px bg-[#D4820A] mb-5 group-hover:w-12 transition-all" />
              <span className="label-tag text-[#D4820A] block mb-3">Type 1</span>
              <h3 className="heading-sm text-[#0C1F3D] mb-4">Conventionnel</h3>
              <p className="text-base text-[#526272] leading-relaxed mb-5">
                Couvre 2, 4 ou 6 zones distinctes. Détection au niveau de l&apos;ensemble des boucles.
                Compatible Hochiki ESP et Apollo (Xplorer, XP95, Discover). Idéal pour les petits et moyens sites.
              </p>
              <ul className="space-y-2 mb-6">
                {["2, 4 ou 6 zones", "3 relais programmables", "3 000 messages d'événements", "Extension RS 485"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#526272]">
                    <CheckCircle size={13} className="text-[#D4820A]" />
                    {f}
                  </li>
                ))}
              </ul>
              <span className="flex items-center gap-2 text-sm text-[#D4820A] font-medium">
                Détails <ArrowRight size={14} />
              </span>
            </Link>

            <Link href="/securite/detection-incendie/adressable" className="group border border-[#DDE3EC] hover:border-[#D4820A] transition-all p-8 card-lift">
              <div className="w-6 h-px bg-[#D4820A] mb-5 group-hover:w-12 transition-all" />
              <span className="label-tag text-[#D4820A] block mb-3">Type 2</span>
              <h3 className="heading-sm text-[#0C1F3D] mb-4">Adressable</h3>
              <p className="text-base text-[#526272] leading-relaxed mb-5">
                Identification et localisation de zones distinctes sur une même boucle.
                Deux solutions : F2 (petites propriétés, 1 boucle) et F1 (moyennes/grandes, 2 à 18 boucles).
              </p>
              <ul className="space-y-2 mb-6">
                {["Localisation précise au détecteur", "Solutions F1 et F2", "Compatible Hochiki + Apollo", "Télémaintenance web"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#526272]">
                    <CheckCircle size={13} className="text-[#D4820A]" />
                    {f}
                  </li>
                ))}
              </ul>
              <span className="flex items-center gap-2 text-sm text-[#D4820A] font-medium">
                Détails <ArrowRight size={14} />
              </span>
            </Link>
          </div>

          {/* Composants CTA */}
          <div className="bg-[#F2F5F8] p-8 flex items-center justify-between gap-8 flex-wrap">
            <div>
              <p className="font-semibold text-[#0C1F3D] text-lg mb-1" style={{ fontFamily: "var(--font-display)" }}>
                Composants du système
              </p>
              <p className="text-sm text-[#526272]">
                Détecteurs, déclencheurs manuels, sirènes et indicateurs d&apos;action expliqués.
              </p>
            </div>
            <Link href="/securite/detection-incendie/composants" className="btn-outline-dark whitespace-nowrap">
              Voir les composants <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

