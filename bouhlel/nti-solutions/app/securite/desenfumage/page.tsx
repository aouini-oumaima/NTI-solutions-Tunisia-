import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { Wind, ArrowUp, Waves, CheckCircle } from "lucide-react";
import { pdfDesenfumage } from "@/lib/pdf-data";
import { Img } from "@/components/ui/Img";

export const metadata: Metadata = {
  title: "Désenfumage et compartimentage",
  description:
    "Systèmes de désenfumage naturel et mécanique par NTI Solutions. Exutoires SKYDOME, tourelles d'extraction, écrans de cantonnement. Tunisie.",
};

const systems = [
  {
    icon: Wind,
    title: "Désenfumage naturel",
    description:
      "Tirage thermique naturel par la convection des gaz chauds. Installation d'exutoires de désenfumage type SKYDOME en toiture. Aucune énergie électrique nécessaire pour l'évacuation des fumées.",
    benefits: ["Aucune consommation électrique", "Déclenchement automatique par fusible thermique", "Conforme NF S 61-937", "Maintenance simplifiée"],
    image: "/images/Desenfumage-et-compartimentage-1.png",
  },
  {
    icon: ArrowUp,
    title: "Désenfumage mécanique",
    description:
      "Renouvellement actif de l'air carbonisé par installation de tourelles et extracteurs de désenfumage. Efficace même lorsque le tirage naturel est insuffisant (bâtiments bas, parkings souterrains).",
    benefits: ["Efficace en sous-sol et parkings", "Débit contrôlable et ajustable", "Couplé à une amenée d'air neuf", "Alarme et pilotage centralisé"],
    image: "/images/Desenfumage-et-compartimentage-1.png",
  },
  {
    icon: Waves,
    title: "Compartimentage coupe-feu",
    description:
      "Division du bâtiment en compartiments étanches aux fumées et aux flammes via des portes coupe-feu (CF 30, CF 60, CF 120) ou des rideaux d'eau. Limite la propagation de l'incendie.",
    benefits: ["Portes CF 30 / 60 / 120 minutes", "Rideaux d'eau intégrés", "Fermeture automatique sur alarme", "Préserve les voies d'évacuation"],
    image: "/images/Desenfumage-et-compartimentage-1.png",
  },
];

export default function DesenfumagePage() {
  return (
    <>
      <PageHeader
        title="Désenfumage & compartimentage."
        subtitle="Évacuer les fumées mortelles, ouvrir une voie d'évacuation sécurisée pour les occupants, permettre l'accès des pompiers. Une discipline technique exigeante."
        breadcrumbs={[
          { label: "Sécurité", href: "/securite" },
          { label: "Désenfumage" },
        ]}
        image="/images/Desenfumage-et-compartimentage-1.png"
        tag="Sécurité — Désenfumage"
        pdfData={pdfDesenfumage}
      />

      <section className="bg-white section-padding">
        <div className="container-wide">
          {/* What & why */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-[#D4820A]" />
                <span className="label-tag text-[#526272]">Définition & objectifs</span>
              </div>
              <h2 className="heading-md text-[#0C1F3D] mb-6">
                Les fumées tuent avant les flammes.
              </h2>
              <p className="text-base text-[#526272] leading-relaxed mb-4">
                80% des victimes d&apos;incendie sont asphyxiées, pas brûlées. Le
                désenfumage consiste à évacuer une partie des fumées en créant une
                hauteur d&apos;air libre sous la couche de fumée, permettant aux occupants
                de voir et de respirer pendant leur évacuation.
              </p>
              <p className="text-base text-[#526272] leading-relaxed mb-6">
                Deux principes complémentaires : l&apos;évacuation des fumées via des
                exutoires en toiture et des ouvertures en façade, et l&apos;amenée d&apos;air
                neuf en partie basse du local.
              </p>
              <div className="space-y-3">
                {[
                  "Faciliter l'évacuation rapide et sécurisée des occupants",
                  "Limiter la propagation de l'incendie par convection",
                  "Permettre l'accès et l'intervention des pompiers",
                  "Réduire les dégâts causés par les fumées sur les biens",
                ].map(obj => (
                  <div key={obj} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#D4820A] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#526272]">{obj}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Img
                src="/images/Desenfumage-et-compartimentage-1.png"
                alt="Schéma désenfumage"
                className="w-full h-[420px] object-cover"
               loading="lazy" decoding="async"/>
            </div>
          </div>

          {/* 3 systems */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-[#D4820A]" />
            <span className="label-tag text-[#526272]">Nos solutions</span>
          </div>
          <h2 className="heading-sm text-[#0C1F3D] mb-10">Trois systèmes complémentaires.</h2>

          <div className="space-y-8">
            {systems.map((sys, i) => (
              <div key={sys.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border border-[#DDE3EC] overflow-hidden`}>
                <div className={`h-64 lg:h-full ${i % 2 === 1 ? "lg:order-2" : ""} overflow-hidden img-zoom-wrap`}>
                  <Img src={sys.image} alt={sys.title} className="zoom-target w-full h-full object-cover"  loading="lazy" decoding="async"/>
                </div>
                <div className={`p-8 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#D4820A]/10 border border-[#D4820A]/20 flex items-center justify-center">
                      <sys.icon size={20} className="text-[#D4820A]" />
                    </div>
                    <h3 className="font-semibold text-[#0C1F3D] text-xl" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>{sys.title}</h3>
                  </div>
                  <p className="text-sm text-[#526272] leading-relaxed mb-6">{sys.description}</p>
                  <ul className="space-y-2">
                    {sys.benefits.map(b => (
                      <li key={b} className="flex items-center gap-2 text-sm text-[#526272]">
                        <span className="w-1.5 h-1.5 bg-[#D4820A]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Norms */}
          <div className="mt-16 bg-[#F2F5F8] p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { code: "NF S 61-937", label: "Systèmes de désenfumage", desc: "Systèmes de type naturel et mécanique" },
              { code: "NF EN 12101", label: "Contrôle de fumée et de chaleur", desc: "Évacuateurs de fumée et de chaleur naturels" },
              { code: "IT 246", label: "Instruction technique", desc: "Désenfumage des ERP — catégories 1 à 5" },
            ].map(norm => (
              <div key={norm.code} className="bg-white border border-[#DDE3EC] p-5">
                <p className="font-semibold text-[#D4820A] text-sm mb-1" style={{ fontFamily: "var(--font-display)" }}>{norm.code}</p>
                <p className="font-medium text-[#0C1F3D] text-sm mb-1">{norm.label}</p>
                <p className="text-xs text-[#526272]">{norm.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

