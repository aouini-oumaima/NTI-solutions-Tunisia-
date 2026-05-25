import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { Droplets, Flame, Wind, CheckCircle } from "lucide-react";
import { pdfLutteIncendie } from "@/lib/pdf-data";

export const metadata: Metadata = {
  title: "Lutte contre les incendies",
  description:
    "Réseau Incendie Armé (RIA), extinction automatique à gaz, surpresseurs et bâches à eau. NTI Solutions, spécialiste de la lutte incendie en Tunisie.",
};

export default function LutteIncendiePage() {
  return (
    <>
      <PageHeader
        title="Lutte contre les incendies."
        subtitle="Priver le feu de ses trois éléments vitaux : combustible, comburant, énergie d'activation. Des moyens adaptés à chaque type de risque."
        breadcrumbs={[
          { label: "Sécurité", href: "/securite" },
          { label: "Lutte incendie" },
        ]}
        image="/images/lutte.png"
        tag="Sécurité — Lutte incendie"
        pdfData={pdfLutteIncendie}
      />

      <section className="bg-white section-padding">
        <div className="container-wide">
          {/* Triangle du feu */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-[#D4820A]" />
                <span className="label-tag text-[#526272]">Principe fondamental</span>
              </div>
              <h2 className="heading-md text-[#0C1F3D] mb-6">
                Le triangle du feu — et comment le briser.
              </h2>
              <p className="text-base text-[#526272] leading-relaxed mb-4">
                Un incendie nécessite trois éléments simultanés pour se développer :
                un <strong className="text-[#0C1F3D]">combustible</strong> (matière qui brûle),
                un <strong className="text-[#0C1F3D]">comburant</strong> (oxygène de l&apos;air),
                et une <strong className="text-[#0C1F3D]">énergie d&apos;activation</strong> (chaleur initiale).
              </p>
              <p className="text-base text-[#526272] leading-relaxed mb-6">
                Priver le feu de l&apos;un de ces trois éléments suffit à l&apos;éteindre.
                Les moyens de lutte doivent être adaptés au <strong className="text-[#0C1F3D]">risque incendie présent</strong> —
                eau pour les feux ordinaires, gaz pour les salles informatiques, poudre pour les liquides inflammables.
              </p>
              <p className="text-base text-[#526272] leading-relaxed italic text-sm border-l-2 border-[#D4820A] pl-4">
                &ldquo;Un être humain, c&apos;est un être de lumière libre, qui se fait braise
                quand il tombe, qui se fait incendie quand il se relève.&rdquo;<br />
                <span className="not-italic font-normal">— Nelson Mandela</span>
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Flame, label: "Combustible", color: "bg-orange-50 border-orange-200", iconColor: "text-orange-500", desc: "Éliminer en stockant correctement" },
                { icon: Wind, label: "Comburant", color: "bg-blue-50 border-blue-200", iconColor: "text-blue-500", desc: "Saturer par gaz inerte ou CO2" },
                { icon: Droplets, label: "Énergie", color: "bg-red-50 border-red-200", iconColor: "text-red-500", desc: "Refroidir par eau ou mousse" },
              ].map(item => (
                <div key={item.label} className={`border ${item.color} p-5 text-center`}>
                  <div className="flex items-center justify-center mb-3">
                    <item.icon size={28} className={item.iconColor} />
                  </div>
                  <p className="font-semibold text-[#0C1F3D] text-sm mb-2" style={{ fontFamily: "var(--font-display)" }}>{item.label}</p>
                  <p className="text-xs text-[#526272]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-16 border border-[#DDE3EC]">
            <div className="overflow-hidden img-zoom-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/lutte.png" alt="Réseau Incendie Armé" className="zoom-target w-full h-[380px] object-cover"  loading="lazy" decoding="async"/>
            </div>
            <div className="p-8">
              <span className="label-tag text-[#D4820A] block mb-3">Solution principale</span>
              <h2 className="heading-sm text-[#0C1F3D] mb-4">Réseau Incendie Armé (RIA)</h2>
              <p className="text-base text-[#526272] leading-relaxed mb-6">
                Le RIA (ou PIA — Poste d&apos;Incendie Armé) est le moyen de lutte de première
                intervention le plus courant dans les bâtiments industriels, commerciaux et ERP.
                Il permet à tout occupant d&apos;intervenir rapidement avant l&apos;arrivée des pompiers.
              </p>
              <div className="bg-[#F2F5F8] p-5 mb-5">
                <p className="font-semibold text-sm text-[#0C1F3D] mb-3" style={{ fontFamily: "var(--font-display)" }}>Un poste RIA complet comprend :</p>
                <ul className="space-y-2">
                  {["Un poste RIA ou PIA (dévidoir)", "Tuyauterie incendie (DN 25 ou DN 19)", "Surpresseur pour maintien de pression", "Bâche à eau (réserve minimale 30 min.)"].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#526272]">
                      <CheckCircle size={13} className="text-[#D4820A] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Portée", value: "25m ou 19m de tuyau" },
                  { label: "Pression", value: "Maintenue par surpresseur" },
                  { label: "Réserve eau", value: "Bâche 30 min. minimum" },
                  { label: "Norme", value: "NF EN 671-1 / NFS 62-201" },
                ].map(spec => (
                  <div key={spec.label} className="border border-[#DDE3EC] p-3">
                    <p className="text-xs text-[#526272]">{spec.label}</p>
                    <p className="font-semibold text-sm text-[#0C1F3D]">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Extinction gaz */}
          <div className="bg-[#0C1F3D] p-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="label-tag text-white/40 block mb-3">Solution alternative</span>
              <h2 className="heading-sm text-white mb-4">Extinction automatique à gaz</h2>
              <p className="text-base text-white/55 leading-relaxed mb-6">
                Pour les locaux où l&apos;eau causerait des dégâts irréparables (salles serveurs,
                locaux électriques, archives, musées), l&apos;extinction à gaz est la solution de
                référence. Le gaz (CO2, FM-200, Novec 1230) sature l&apos;espace en quelques secondes
                et éteint le feu sans laisser de résidu.
              </p>
              <ul className="space-y-3">
                {[
                  "Extinction en moins de 10 secondes",
                  "Aucun résidu — pas de dommage aux équipements",
                  "Déclenché automatiquement par la détection incendie",
                  "Conforme aux normes ISO 14520 et NFPA 2001",
                  "Adapté aux salles informatiques, archives, musées",
                ].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/55">
                    <CheckCircle size={13} className="text-[#D4820A] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "CO2", desc: "Gaz naturel, économique, recommandé pour les locaux vides (toxique pour l'homme en concentration d'extinction)." },
                { name: "FM-200", desc: "HFC propre, inoffensif pour les personnes. Idéal pour les salles occupées." },
                { name: "Novec 1230", desc: "Halogénure propre de 3M. GWP très faible, solution la plus écologique." },
                { name: "Inergen", desc: "Mélange de gaz inertes naturels (azote, argon, CO2). Zéro impact environnemental." },
              ].map(gas => (
                <div key={gas.name} className="border border-white/10 p-4 hover:border-[#D4820A]/50 transition-colors">
                  <p className="font-semibold text-white text-sm mb-2" style={{ fontFamily: "var(--font-display)" }}>{gas.name}</p>
                  <p className="text-xs text-white/40 leading-relaxed">{gas.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
