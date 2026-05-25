import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { pdfComposants } from "@/lib/pdf-data";

export const metadata: Metadata = {
  title: "Composants détection incendie",
  description:
    "Composants des systèmes de détection incendie : détecteurs, déclencheurs manuels, sirènes et indicateurs d'action. NTI Solutions — Tunisie.",
};

const composants = [
  {
    id: "01",
    name: "Détecteurs automatiques",
    image: "/images/Le-systeme-de-securite-incendie.jpg.png",
    description:
      "Les détecteurs automatiques surveillent en permanence les phénomènes chimiques et physiques liés au développement d'un incendie. Ils sont le premier maillon de la chaîne de détection.",
    types: [
      { name: "Détecteur de chaleur thermostatique", desc: "Déclenche quand la température atteint un seuil fixe (57°C ou 90°C). Idéal pour les cuisines et locaux techniques." },
      { name: "Détecteur optique ponctuel de fumée", desc: "Analyse le changement de diffusion lumineuse dans sa chambre de mesure. Réagit aux fumées visibles des feux couvants." },
      { name: "Détecteur optique linéaire de fumée", desc: "Faisceau laser entre émetteur et réflecteur. Couvre de grandes surfaces (entrepôts, halls, atriums)." },
      { name: "Détecteur de flamme", desc: "Analyse le rayonnement UV/IR émis par les flammes. Réaction quasi instantanée pour les feux vifs." },
    ],
  },
  {
    id: "02",
    name: "Déclencheur Manuel (BBG / DM)",
    image: "/images/Conventionnel.jpg.png",
    description:
      "Le déclencheur manuel permet à tout occupant de signaler manuellement la présence d'un incendie. Il envoie l'information à l'ECS, au CMSI ou au BAAS. La norme impose leur implantation tous les 30m et à chaque sortie.",
    types: [
      { name: "BBG (Bris de Glace)", desc: "Activation par bris d'une vitre de protection. Irréversible sans remplacement de la glace." },
      { name: "DM à membrane", desc: "Activation par enfoncement d'une membrane souple. Réarmement facile avec clé." },
    ],
  },
  {
    id: "03",
    name: "Sirène / Diffuseur sonore",
    image: "/images/Le-systeme-de-securite-incendie.jpg.png",
    description:
      "Le signal d'alarme générale doit être audible partout dans le bâtiment, même en présence de bruit ambiant. La norme impose un niveau sonore supérieur au bruit ambiant + 5 dB, pendant au minimum 5 minutes.",
    types: [
      { name: "BAAS (Blocs Autonomes d'Alarme Sonore)", desc: "Dispositifs autonomes avec batterie intégrée. Fonctionnent même en cas de coupure secteur." },
      { name: "Sirène filaire", desc: "Alimentée par la centrale. Niveau sonore élevé (> 90 dB). Installation en zones étendues." },
      { name: "Diffuseur vocal", desc: "Message vocal pré-enregistré pour guider l'évacuation. Utilisé dans les ERP de catégorie A." },
    ],
  },
  {
    id: "04",
    name: "Indicateur d'action (IA)",
    image: "/images/Conventionnel.jpg.png",
    description:
      "L'indicateur d'action permet la visualisation immédiate et rapide du détecteur en action, sans intervention dans la zone surveillée. Indispensable pour les détecteurs installés en combles, faux-plafonds ou locaux fermés à clé.",
    types: [
      { name: "IA lumineux en saillie", desc: "Voyant LED rouge visible depuis le couloir. Identifie immédiatement la zone en alarme." },
      { name: "IA lumineux + sonore", desc: "Combinaison visuelle et sonore. Utilisé dans les espaces bruyants ou à faible visibilité." },
      { name: "IA encastré", desc: "Version discrète intégrée au faux-plafond. Moins visible mais conforme aux exigences esthétiques." },
    ],
  },
];

export default function ComposantsPage() {
  return (
    <>
      <PageHeader
        title="Composants du système."
        subtitle="Détecteurs, déclencheurs manuels, sirènes et indicateurs d'action — chaque composant joue un rôle précis dans la chaîne de détection."
        breadcrumbs={[
          { label: "Sécurité", href: "/securite" },
          { label: "Détection incendie", href: "/securite/detection-incendie" },
          { label: "Composants" },
        ]}
        image="/images/Le-systeme-de-securite-incendie.jpg.png"
        tag="Composants système incendie"
        pdfData={pdfComposants}
      />

      <section className="bg-white section-padding">
        <div className="container-wide">
          <div className="space-y-20">
            {composants.map((comp, i) => (
              <div key={comp.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={comp.image} alt={comp.name} className="w-full h-72 object-cover"  loading="lazy" decoding="async"/>
                    <div className="absolute top-5 left-5">
                      <span className="label-tag bg-[#D4820A] text-white px-3 py-1.5">{comp.id}</span>
                    </div>
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="label-tag text-[#D4820A] block mb-3">{comp.id}</span>
                  <h2 className="heading-sm text-[#0C1F3D] mb-4">{comp.name}</h2>
                  <p className="text-base text-[#526272] leading-relaxed mb-8">{comp.description}</p>
                  <div className="space-y-4">
                    {comp.types.map((t) => (
                      <div key={t.name} className="border-l-2 border-[#DDE3EC] pl-5 hover:border-[#D4820A] transition-colors">
                        <p className="font-semibold text-sm text-[#0C1F3D] mb-1" style={{ fontFamily: "var(--font-display)" }}>{t.name}</p>
                        <p className="text-sm text-[#526272] leading-relaxed">{t.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary table */}
          <div className="mt-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-[#D4820A]" />
              <span className="label-tag text-[#526272]">Récapitulatif</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border border-[#DDE3EC] text-sm">
                <thead>
                  <tr className="bg-[#0C1F3D]">
                    <th className="text-left px-6 py-4 text-white font-semibold" style={{ fontFamily: "var(--font-display)" }}>Composant</th>
                    <th className="text-left px-6 py-4 text-white font-semibold" style={{ fontFamily: "var(--font-display)" }}>Rôle</th>
                    <th className="text-left px-6 py-4 text-white font-semibold hidden md:table-cell" style={{ fontFamily: "var(--font-display)" }}>Emplacement typique</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Détecteurs", "Surveillance continue et détection automatique", "Plafonds, combles, locaux"],
                    ["Déclencheur manuel", "Signalement manuel par les occupants", "Sorties, couloirs, tous les 30m"],
                    ["Sirène / BAAS", "Alarme générale d'évacuation", "Zones communes, étages"],
                    ["Indicateur d'action", "Repérage visuel du détecteur actif", "Couloirs, à l'extérieur des locaux"],
                  ].map(([comp, role, loc], i) => (
                    <tr key={comp} className={i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"}>
                      <td className="px-6 py-4 font-semibold text-[#0C1F3D] border-b border-[#DDE3EC]">{comp}</td>
                      <td className="px-6 py-4 text-[#526272] border-b border-[#DDE3EC]">{role}</td>
                      <td className="px-6 py-4 text-[#526272] border-b border-[#DDE3EC] hidden md:table-cell">{loc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
