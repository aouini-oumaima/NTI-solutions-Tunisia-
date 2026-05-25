import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { CheckCircle } from "lucide-react";
import { pdfConventionnel } from "@/lib/pdf-data";

export const metadata: Metadata = {
  title: "Détection incendie conventionnelle",
  description:
    "Centrales de détection incendie conventionnelles NTI Solutions. Compatibles Hochiki ESP et Apollo. 2, 4 ou 6 zones. Installation et maintenance en Tunisie.",
};

const brands = [
  {
    name: "HOCHIKI ESP",
    description: "Leader mondial de la détection incendie. Détecteurs et modules ESP (Enhanced Series Protocol) reconnus pour leur fiabilité et longévité exceptionnelles.",
    compatible: ["Détecteurs optiques de fumée", "Détecteurs thermostatiques", "Détecteurs de chaleur", "Modules d'interface", "Déclencheurs manuels"],
  },
  {
    name: "Apollo Fire Detectors",
    description: "Fabricant britannique de référence. Trois séries disponibles : Xplorer (entrée de gamme), XP95 (milieu de gamme) et Discover (premium).",
    compatible: ["Série Xplorer", "Série XP95", "Série Discover", "Dispositifs sonores", "Points d'appel manuels"],
  },
];

export default function ConventionnelPage() {
  return (
    <>
      <PageHeader
        title="Système conventionnel."
        subtitle="Détection par zones distinctes, simple et fiable. Compatible Hochiki ESP et Apollo. La solution idéale pour les petits et moyens bâtiments."
        breadcrumbs={[
          { label: "Sécurité", href: "/securite" },
          { label: "Détection incendie", href: "/securite/detection-incendie" },
          { label: "Conventionnel" },
        ]}
        image="/images/Conventionnel.jpg.png"
        tag="Détection conventionnelle"
        pdfData={pdfConventionnel}
      />

      <section className="bg-white section-padding">
        <div className="container-wide">
          {/* Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-[#D4820A]" />
                <span className="label-tag text-[#526272]">Principe</span>
              </div>
              <h2 className="heading-md text-[#0C1F3D] mb-6">
                Détection par zones : simple, éprouvée, fiable.
              </h2>
              <p className="text-base text-[#526272] leading-relaxed mb-4">
                Le système conventionnel divise le bâtiment en zones distinctes.
                Chaque boucle couvre une zone définie. En cas d&apos;alarme, la centrale
                identifie la zone concernée — rapide à diagnostiquer, simple à maintenir.
              </p>
              <p className="text-base text-[#526272] leading-relaxed mb-6">
                La centrale conventionnelle NTI couvre <strong className="text-[#0C1F3D]">2, 4 ou 6 zones</strong>,
                dispose de 3 relais programmables et de 3 000 messages d&apos;événements
                en mémoire. Extension possible via carte RS 485.
              </p>
              <ul className="space-y-3">
                {[
                  "Détection au niveau de l'ensemble des boucles d'organes",
                  "3 relais programmables",
                  "3 000 messages d'événements en mémoire",
                  "Carte d'extension RS 485 disponible",
                  "Alimentation de secours intégrée (batterie)",
                  "Compatible Hochiki ESP et Apollo",
                ].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#526272]">
                    <CheckCircle size={14} className="text-[#D4820A] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Conventionnel.jpg.png" alt="Centrale conventionnelle" className="w-full h-[420px] object-cover"  loading="lazy" decoding="async"/>
            </div>
          </div>

          {/* Specs table */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-[#D4820A]" />
              <span className="label-tag text-[#526272]">Spécifications techniques</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border border-[#DDE3EC] text-sm">
                <thead>
                  <tr className="bg-[#F2F5F8]">
                    <th className="text-left px-6 py-4 font-semibold text-[#0C1F3D] border-b border-[#DDE3EC]" style={{ fontFamily: "var(--font-display)" }}>Paramètre</th>
                    <th className="text-left px-6 py-4 font-semibold text-[#0C1F3D] border-b border-[#DDE3EC]" style={{ fontFamily: "var(--font-display)" }}>Valeur</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Nombre de zones", "2, 4 ou 6 zones"],
                    ["Relais programmables", "3"],
                    ["Mémoire événements", "3 000 messages"],
                    ["Extension", "Carte RS 485"],
                    ["Alimentation", "230V AC + batterie secours"],
                    ["Compatibilité", "Hochiki ESP, Apollo (Xplorer, XP95, Discover)"],
                    ["Certification", "NF EN 54 partie 2 & 4"],
                    ["Indicateur LED", "Par zone, dérangement et alarme"],
                  ].map(([param, val], i) => (
                    <tr key={param} className={i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"}>
                      <td className="px-6 py-3 text-[#526272] border-b border-[#DDE3EC]">{param}</td>
                      <td className="px-6 py-3 text-[#0C1F3D] font-medium border-b border-[#DDE3EC]">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Compatible brands */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-[#D4820A]" />
            <span className="label-tag text-[#526272]">Marques compatibles</span>
          </div>
          <h2 className="heading-sm text-[#0C1F3D] mb-10">Équipements de référence mondiale.</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {brands.map((brand) => (
              <div key={brand.name} className="border border-[#DDE3EC] p-8">
                <div className="w-8 h-px bg-[#D4820A] mb-4" />
                <h3 className="font-semibold text-[#0C1F3D] text-xl mb-3" style={{ fontFamily: "var(--font-display)" }}>{brand.name}</h3>
                <p className="text-sm text-[#526272] leading-relaxed mb-5">{brand.description}</p>
                <p className="text-xs font-medium tracking-wider uppercase text-[#526272] mb-3">Compatibilités :</p>
                <ul className="space-y-2">
                  {brand.compatible.map(c => (
                    <li key={c} className="flex items-center gap-2 text-sm text-[#526272]">
                      <span className="w-1.5 h-1.5 bg-[#D4820A]" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
