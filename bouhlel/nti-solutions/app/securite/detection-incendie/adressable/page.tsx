import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { CheckCircle, Building, BuildingIcon } from "lucide-react";
import { pdfAdressable } from "@/lib/pdf-data";

export const metadata: Metadata = {
  title: "Détection incendie adressable",
  description:
    "Centrales adressables F1 et F2 par NTI Solutions. Localisation précise au détecteur, compatibilité Hochiki et Apollo, extensible de 1 à 18 boucles. Tunisie.",
};

export default function AdressablePage() {
  return (
    <>
      <PageHeader
        title="Système adressable."
        subtitle="Localisation précise au détecteur, gestion de plusieurs boucles, extensibilité maximale. Solutions F1 et F2 pour tous les gabarits de bâtiment."
        breadcrumbs={[
          { label: "Sécurité", href: "/securite" },
          { label: "Détection incendie", href: "/securite/detection-incendie" },
          { label: "Adressable" },
        ]}
        image="/images/Le-systeme-de-securite-incendie.jpg.png"
        tag="Détection adressable"
        pdfData={pdfAdressable}
      />

      <section className="bg-white section-padding">
        <div className="container-wide">
          {/* Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-[#D4820A]" />
                <span className="label-tag text-[#526272]">Avantage adressable</span>
              </div>
              <h2 className="heading-md text-[#0C1F3D] mb-6">
                Localiser précisément — pas juste la zone.
              </h2>
              <p className="text-base text-[#526272] leading-relaxed mb-4">
                Contrairement au conventionnel, le système adressable identifie
                et localise chaque détecteur individuellement sur une même boucle.
                En cas d&apos;alarme, vous savez exactement quel équipement, dans quelle pièce.
              </p>
              <p className="text-base text-[#526272] leading-relaxed">
                NTI Solutions propose deux solutions selon la taille de votre bâtiment :
                la <strong className="text-[#0C1F3D]">Solution F2</strong> pour les petites
                propriétés et la <strong className="text-[#0C1F3D]">Solution F1</strong>
                {" "}pour les moyennes et grandes propriétés (jusqu&apos;à 18 boucles).
              </p>
            </div>
            <div className="space-y-4">
              {[
                { title: "Conventionnel", desc: "Alarme zone 3 — 15 détecteurs concernés", bad: true },
                { title: "Adressable", desc: "Alarme — Détecteur 47, Bureau 3B, 2ème étage", bad: false },
              ].map((item) => (
                <div key={item.title} className={`p-5 border ${item.bad ? "border-[#DDE3EC] opacity-60" : "border-[#D4820A] bg-[#D4820A]/5"}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`w-2 h-2 rounded-full ${item.bad ? "bg-gray-400" : "bg-[#D4820A]"}`} />
                    <span className="font-semibold text-sm text-[#0C1F3D]" style={{ fontFamily: "var(--font-display)" }}>{item.title}</span>
                  </div>
                  <p className="text-sm text-[#526272] pl-4">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* F2 and F1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {/* F2 */}
            <div className="border border-[#DDE3EC] p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#D4820A]/10 border border-[#D4820A]/20 flex items-center justify-center flex-shrink-0">
                  <Building size={22} className="text-[#D4820A]" />
                </div>
                <div>
                  <span className="label-tag text-[#D4820A] block mb-1">Petites propriétés</span>
                  <h2 className="font-semibold text-[#0C1F3D] text-2xl" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}>Solution F2</h2>
                </div>
              </div>
              <p className="text-base text-[#526272] leading-relaxed mb-6">
                Centrale 1 boucle adressable de dernière génération. Extensible par cartes
                additionnelles. Modules pompiers et interfaces RS-485. Compatible Hochiki ESP
                et Apollo (Xplorer, XP95, Discover).
              </p>
              <ul className="space-y-2">
                {[
                  "1 boucle adressable (extensible par cartes)",
                  "Modules pompiers intégrés",
                  "Interfaces RS-485",
                  "Compatible Hochiki ESP",
                  "Compatible Apollo Xplorer / XP95 / Discover",
                  "Idéal PME, boutiques, bureaux",
                ].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#526272]">
                    <CheckCircle size={13} className="text-[#D4820A] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* F1 */}
            <div className="border border-[#D4820A] p-8 relative">
              <span className="absolute top-4 right-4 label-tag bg-[#D4820A] text-white px-3 py-1">Premium</span>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#D4820A] flex items-center justify-center flex-shrink-0">
                  <BuildingIcon size={22} className="text-white" />
                </div>
                <div>
                  <span className="label-tag text-[#D4820A] block mb-1">Moyennes / Grandes propriétés</span>
                  <h2 className="font-semibold text-[#0C1F3D] text-2xl" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}>Solution F1</h2>
                </div>
              </div>
              <p className="text-base text-[#526272] leading-relaxed mb-4">
                Centrale modulaire de dernière génération. Deux configurations disponibles :
                <strong className="text-[#0C1F3D]"> 2 à 6 boucles</strong> ou
                <strong className="text-[#0C1F3D]"> 6 à 18 boucles</strong>.
                Conçue pour les hôtels, hôpitaux, centres commerciaux et bâtiments industriels.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Fiabilité", desc: "Panneau tactile piézo, pas de pièces d'usure" },
                  { label: "Flexibilité", desc: "Compatible tous détecteurs du marché" },
                  { label: "Extensibilité", desc: "Serveur web, télémaintenance intégrée" },
                ].map(item => (
                  <div key={item.label} className="bg-[#F2F5F8] p-4 text-center">
                    <p className="font-semibold text-xs text-[#D4820A] mb-1" style={{ fontFamily: "var(--font-display)" }}>{item.label}</p>
                    <p className="text-xs text-[#526272]">{item.desc}</p>
                  </div>
                ))}
              </div>
              <ul className="space-y-2">
                {[
                  "2–6 boucles ou 6–18 boucles selon config.",
                  "Panneau de commande tactile (laque piézo)",
                  "Robuste aux nettoyages et perturbations CEM",
                  "Modem analogique / RNIS disponible",
                  "Serveur web pour intégration internet",
                  "Télémaintenance et diagnostic à distance",
                ].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#526272]">
                    <CheckCircle size={13} className="text-[#D4820A] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Role of ECS */}
          <div className="bg-[#0C1F3D] p-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#D4820A]" />
              <span className="label-tag text-white/40">Rôle de la centrale (ECS)</span>
            </div>
            <h3 className="heading-sm text-white mb-8">Ce que fait votre centrale.</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
              {[
                "Gérer le réseau de détection (mode dérangement / alarme feu)",
                "Avertir les personnes présentes sur le site",
                "Alimenter les éléments de sécurité, même en cas de coupure secteur",
                "Gérer le transmetteur d'alarme vers les secours",
                "Générer la séquence de transmission d'alarme",
                "Enregistrer et horodater tous les événements",
              ].map(role => (
                <div key={role} className="bg-[#0C1F3D] p-6 hover:bg-[#111] transition-colors group">
                  <div className="w-6 h-px bg-[#D4820A] mb-3 group-hover:w-10 transition-all" />
                  <p className="text-sm text-white/60 leading-relaxed">{role}</p>
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
