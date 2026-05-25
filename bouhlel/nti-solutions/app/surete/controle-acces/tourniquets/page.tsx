import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { CheckCircle } from "lucide-react";
import { pdfTourniquets } from "@/lib/pdf-data";

export const metadata: Metadata = {
  title: "Tourniquets & Couloirs sécurisés",
  description:
    "Tourniquets barreaudés, tripodes et couloirs sécurisés par NTI Solutions. Contrôle des flux piétons pour entreprises, stades, musées et sites industriels en Tunisie.",
};

const types = [
  {
    name: "Tourniquet barreaudé",
    image: "/images/systeme-de-tournique-barreaude.jpg",
    badge: "Haute sécurité",
    description:
      "Haut niveau de sécurité avec franchissement unipersonnel piéton. Ancrage sol robuste pour une installation permanente. Configurable en sens unique ou bidirectionnel.",
    useCases: ["Entrées de sites industriels", "Zones sécurisées et sensibles", "Contrôle périmétrique strict"],
    specs: [
      { label: "Mode", value: "Unidirectionnel ou bidirectionnel" },
      { label: "Débit", value: "Jusqu'à 30 personnes/min" },
      { label: "Alimentation", value: "220V AC" },
      { label: "Finition", value: "Inox brossé 304" },
    ],
  },
  {
    name: "Tourniquet tripode",
    image: "/images/systeme-de-tourniquet-tripod.jpg",
    badge: "Compact",
    description:
      "Plus compact que le barreaudé. Unicité de passage garantie. Idéal pour les entrées salariés avec 1 entrée traitée à la fois. Activé par lecteur d'accès intégré ou piloté à distance.",
    useCases: ["Entrées d'usines et bureaux", "Réfectoires et cantines", "Stades et événements"],
    specs: [
      { label: "Mode", value: "Unipersonnel" },
      { label: "Lecteur", value: "Badge, biométrie, code PIN" },
      { label: "Pilotage", value: "Local ou déporté" },
      { label: "Finition", value: "Inox ou ABS" },
    ],
  },
  {
    name: "Couloir sécurisé",
    image: "/images/couloir.jpg",
    badge: "Flux rapide",
    description:
      "Unicité de passage à l'intérieur des bâtiments. Gestion de flux jusqu'à 2× plus rapide qu'un tripode. Design esthétique et épuré, intégration architecturale facile dans les halls d'entreprise.",
    useCases: ["Halls d'entreprise premium", "Aéroports et gares", "Centres commerciaux"],
    specs: [
      { label: "Débit", value: "Jusqu'à 60 personnes/min" },
      { label: "Intégration", value: "Lecteur encastré discret" },
      { label: "Design", value: "Verre trempé + acier" },
      { label: "Mode", value: "Bidirectionnel possible" },
    ],
  },
];

export default function TourniquetsPage() {
  return (
    <>
      <PageHeader
        title="Tourniquets & Couloirs sécurisés."
        subtitle="Contrôlez les flux piétons avec précision. Trois types d'équipements pour chaque contexte : haute sécurité, compact ou architectural."
        breadcrumbs={[
          { label: "Sûreté", href: "/surete" },
          { label: "Contrôle d'accès", href: "/surete/controle-acces" },
          { label: "Tourniquets" },
        ]}
        image="/images/systeme-de-tourniquet-tripod.jpg"
        tag="Contrôle d'accès piétons"
        pdfData={pdfTourniquets}
      />

      <section className="bg-white section-padding">
        <div className="container-wide">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#D4820A]" />
            <span className="label-tag text-[#526272]">Applications</span>
          </div>
          <p className="text-base text-[#526272] leading-relaxed max-w-2xl mb-16">
            Les systèmes de contrôle de tourniquet sont choisis en fonction du
            système de sécurité du lieu. Ils permettent de contrôler les heures
            d&apos;entrée et de sortie dans des espaces variés : réfectoires, stades,
            musées, lieux touristiques, entreprises industrielles.
          </p>

          {/* 3 types */}
          <div className="space-y-16">
            {types.map((type, i) => (
              <div
                key={type.name}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={type.image}
                      alt={type.name}
                      className="w-full h-[380px] object-cover"
                     loading="lazy" decoding="async"/>
                    <div className="absolute top-5 left-5">
                      <span className="label-tag bg-[#D4820A] text-white px-3 py-1.5">
                        {type.badge}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="label-tag text-[#D4820A] block mb-3">0{i + 1}</span>
                  <h2 className="heading-sm text-[#0C1F3D] mb-5">{type.name}</h2>
                  <p className="text-base text-[#526272] leading-relaxed mb-6">{type.description}</p>

                  {/* Use cases */}
                  <div className="mb-6">
                    <p className="text-xs font-medium tracking-wider uppercase text-[#526272] mb-3">Applications</p>
                    <ul className="space-y-2">
                      {type.useCases.map((u) => (
                        <li key={u} className="flex items-center gap-2 text-sm text-[#526272]">
                          <CheckCircle size={14} className="text-[#D4820A] flex-shrink-0" />
                          {u}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specs */}
                  <div className="border border-[#DDE3EC]">
                    {type.specs.map((s, j) => (
                      <div key={s.label} className={`flex px-5 py-3 text-sm ${j !== 0 ? "border-t border-[#DDE3EC]" : ""}`}>
                        <span className="text-[#526272] w-36 flex-shrink-0">{s.label}</span>
                        <span className="text-[#0C1F3D] font-medium">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
