import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { Flame, Wind, Droplets, ArrowRight } from "lucide-react";
import { Img } from "@/components/ui/Img";

export const metadata: Metadata = {
  title: "Système de Sécurité Incendie",
  description:
    "NTI Solutions : systèmes de sécurité incendie complets en Tunisie. Détection incendie, désenfumage, lutte contre l'incendie. Centrales Hochiki et Apollo.",
};

const solutions = [
  {
    icon: Flame,
    title: "Détection incendie",
    description:
      "Centrales conventionnelles et adressables, détecteurs de fumée/chaleur/flamme, déclencheurs manuels. Systèmes compatibles Hochiki ESP et Apollo.",
    href: "/securite/detection-incendie",
    image: "/images/Le-systeme-de-securite-incendie.jpg.png",
    features: ["Conventionnel & adressable", "Hochiki / Apollo", "Détecteurs optiques & thermiques", "Déclencheurs manuels"],
  },
  {
    icon: Wind,
    title: "Désenfumage",
    description:
      "Exutoires SKYDOME, tourelles d'extraction mécanique, écrans de cantonnement et portes coupe-feu. Solutions naturelles et mécaniques.",
    href: "/securite/desenfumage",
    image: "/images/Desenfumage-et-compartimentage-1.png",
    features: ["Désenfumage naturel (SKYDOME)", "Extraction mécanique", "Écrans de cantonnement", "Rideaux d'eau"],
  },
  {
    icon: Droplets,
    title: "Lutte incendie",
    description:
      "Réseaux incendie armés (RIA/PIA), surpresseurs, bâches à eau, extinction automatique à gaz. Pour priver le feu de ses éléments vitaux.",
    href: "/securite/lutte-incendie",
    image: "/images/lutte.png",
    features: ["Réseau incendie armé (RIA)", "PIA & surpresseurs", "Extinction gaz", "Bâche à eau"],
  },
];

export default function SecuritePage() {
  return (
    <>
      <PageHeader
        title="Système de sécurité incendie."
        subtitle="Détecter, désenfumer, éteindre — la triade complète pour protéger vos occupants et limiter les dégâts matériels en cas d'incendie."
        breadcrumbs={[{ label: "Sécurité" }]}
        image="/images/Le-systeme-de-securite-incendie.jpg.png"
        tag="Sécurité incendie"
      />

      <section className="bg-white section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-[#D4820A]" />
                <span className="label-tag text-[#526272]">Principe</span>
              </div>
              <h2 className="heading-md text-[#0C1F3D] mb-6">
                La sécurité incendie : une obligation légale, une responsabilité morale.
              </h2>
              <p className="text-base text-[#526272] leading-relaxed mb-4">
                En Tunisie comme dans tous les pays, la réglementation impose des
                systèmes de sécurité incendie dans les établissements recevant du public,
                les industries et les immeubles de grande hauteur.
              </p>
              <p className="text-base text-[#526272] leading-relaxed mb-4">
                NTI Solutions conçoit des systèmes intégrés qui couvrent les trois phases
                critiques : la <strong className="text-[#0C1F3D]">détection précoce</strong> du sinistre,
                le <strong className="text-[#0C1F3D]">désenfumage</strong> pour permettre l&apos;évacuation,
                et la <strong className="text-[#0C1F3D]">lutte active</strong> contre les flammes.
              </p>
            </div>
            <div className="bg-[#0C1F3D] p-8">
              <p className="label-tag text-white/40 mb-4">Le triangle du feu</p>
              <div className="grid grid-cols-3 gap-4 text-center">
                {["Combustible", "Comburant", "Énergie"].map((elem) => (
                  <div key={elem} className="border border-white/10 p-4">
                    <div className="w-8 h-8 bg-[#D4820A]/20 border border-[#D4820A]/30 flex items-center justify-center mx-auto mb-3">
                      <Flame size={16} className="text-[#D4820A]" />
                    </div>
                    <p className="text-white text-xs font-medium">{elem}</p>
                  </div>
                ))}
              </div>
              <p className="text-white/40 text-xs text-center mt-4">
                Priver le feu de l&apos;un de ces 3 éléments = extinction
              </p>
            </div>
          </div>

          {/* Solutions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((sol) => (
              <Link key={sol.title} href={sol.href} className="group border border-[#DDE3EC] hover:border-[#D4820A] transition-all duration-300 card-lift">
                <div className="h-52 overflow-hidden img-zoom-wrap relative">
                  <Img src={sol.image} alt={sol.title} className="zoom-target w-full h-full object-cover"  loading="lazy" decoding="async"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-10 h-10 bg-[#D4820A] flex items-center justify-center">
                    <sol.icon size={20} className="text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="w-6 h-px bg-[#D4820A] mb-3 group-hover:w-10 transition-all duration-300" />
                  <h3 className="font-semibold text-[#0C1F3D] text-lg mb-3" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>{sol.title}</h3>
                  <p className="text-sm text-[#526272] leading-relaxed mb-5">{sol.description}</p>
                  <ul className="space-y-1.5 mb-5">
                    {sol.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-[#526272]">
                        <span className="w-1.5 h-1.5 bg-[#D4820A]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <span className="flex items-center gap-2 text-sm text-[#D4820A] font-medium">
                    En savoir plus <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

