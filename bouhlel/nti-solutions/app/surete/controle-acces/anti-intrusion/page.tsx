import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { Radio, Bell, Smartphone, Shield } from "lucide-react";
import { pdfAntiIntrusion } from "@/lib/pdf-data";
import { Img } from "@/components/ui/Img";

export const metadata: Metadata = {
  title: "Système anti-intrusion",
  description:
    "Systèmes anti-intrusion filaires et sans fil par NTI Solutions. Détecteurs IR, centrale d'alarme, transmetteur GSM. Installation et maintenance en Tunisie.",
};

const components = [
  { icon: Radio, name: "Capteurs de mouvement", desc: "Détection de passage et de déplacement dans les zones surveillées. Technologies IR passif, ultrason et hyperfréquence disponibles." },
  { icon: Shield, name: "Détecteurs d'ouverture", desc: "Contacts magnétiques sur portes et fenêtres. Signalement immédiat de toute tentative d'ouverture non autorisée." },
  { icon: Bell, name: "Centrale d'alarme + sirène", desc: "Gestion centralisée de tous les détecteurs. Sirène puissante (> 90 dB) audible depuis l'extérieur du bâtiment." },
  { icon: Smartphone, name: "Transmetteur GSM", desc: "Notification instantanée sur smartphone en cas d'alarme. Appel vocal automatique vers une liste de numéros prédéfinis." },
];

const detectorTypes = [
  {
    category: "Périphériques extérieurs",
    items: [
      { name: "Infrarouges actifs", desc: "Barrière lumineuse invisible entre émetteur et récepteur. Alarme en cas de coupure du faisceau." },
      { name: "Barrière hyperfréquence", desc: "Détection volumétrique extérieure résistante au vent, pluie et petits animaux." },
      { name: "Câbles enterrés", desc: "Périmètre enterré invisible, déclenchement au passage ou franchissement." },
    ],
  },
  {
    category: "Détecteurs périmètriques & volumétriques",
    items: [
      { name: "Contact magnétique (ouverture)", desc: "Détection de l'ouverture de portes et fenêtres par rupture de contact magnétique." },
      { name: "Détecteur de choc (vitres)", desc: "Analyse vibratoire des vitres pour détecter les bris, chocs ou découpes." },
      { name: "Rideau IR", desc: "Rideau de faisceaux infrarouges verticaux pour détecter le passage devant une ouverture." },
      { name: "Sismique", desc: "Détection des vibrations de murs, sols ou plafonds (percement, frappe)." },
      { name: "IR passif volumétrique", desc: "Détection de chaleur humaine en mouvement dans la zone de couverture." },
      { name: "Double technologie IR + HF", desc: "Combine 2 technologies pour éliminer les fausses alarmes. Recommandé pour tous les sites." },
    ],
  },
];

export default function AntiIntrusionPage() {
  return (
    <>
      <PageHeader
        title="Système anti-intrusion."
        subtitle="Des alarmes filaires ou sans fil, pensées pour stopper les intrus avant qu'ils ne causent des dégâts. Zéro fausse alarme avec la double technologie."
        breadcrumbs={[
          { label: "Sûreté", href: "/surete" },
          { label: "Contrôle d'accès", href: "/surete/controle-acces" },
          { label: "Anti-intrusion" },
        ]}
        image="/images/PORTES.jpg"
        tag="Sûreté — Anti-intrusion"
        pdfData={pdfAntiIntrusion}
      />

      <section className="bg-white section-padding">
        <div className="container-wide">
          {/* Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-[#D4820A]" />
                <span className="label-tag text-[#526272]">Définition</span>
              </div>
              <h2 className="heading-md text-[#0C1F3D] mb-6">
                Une alarme indispensable pour votre bâtiment.
              </h2>
              <p className="text-base text-[#526272] leading-relaxed mb-4">
                Les systèmes anti-intrusion constituent une protection essentielle
                pour les habitations, bureaux, commerces et sites industriels.
                Disponibles en version filaire ou sans fil selon les contraintes architecturales.
              </p>
              <p className="text-base text-[#526272] leading-relaxed mb-4">
                NTI Solutions recommande systématiquement la double technologie
                (IR + hyperfréquence, ou ultrason + IR) pour éviter les déclenchements
                intempestifs et garantir une fiabilité maximale.
              </p>
              <p className="text-base text-[#526272] leading-relaxed">
                Le coût varie selon la superficie du site, le nombre de portes et fenêtres
                à surveiller, et la technologie choisie. Nous réalisons gratuitement une
                étude préalable pour chaque projet.
              </p>
            </div>
            <div>
              <Img src="/images/PORTES.jpg" alt="Système anti-intrusion" className="w-full h-[400px] object-cover"  loading="lazy" decoding="async"/>
            </div>
          </div>

          {/* Components */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-[#D4820A]" />
            <span className="label-tag text-[#526272]">Composants du système</span>
          </div>
          <h2 className="heading-sm text-[#0C1F3D] mb-10">4 éléments clés.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {components.map((c) => (
              <div key={c.name} className="border border-[#DDE3EC] p-6 group hover:border-[#D4820A] transition-colors duration-300">
                <div className="w-10 h-10 border border-[#DDE3EC] flex items-center justify-center mb-5 group-hover:bg-[#D4820A] group-hover:border-[#D4820A] transition-all">
                  <c.icon size={18} className="text-[#D4820A] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-[#0C1F3D] text-sm mb-2" style={{ fontFamily: "var(--font-display)" }}>{c.name}</h3>
                <p className="text-xs text-[#526272] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* Detector types */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-[#D4820A]" />
            <span className="label-tag text-[#526272]">Types de détecteurs</span>
          </div>
          <h2 className="heading-sm text-[#0C1F3D] mb-10">Couverture complète, intérieure et extérieure.</h2>

          <div className="space-y-12">
            {detectorTypes.map((cat) => (
              <div key={cat.category}>
                <h3 className="font-semibold text-[#0C1F3D] text-lg mb-5 pb-3 border-b border-[#DDE3EC]" style={{ fontFamily: "var(--font-display)" }}>
                  {cat.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.items.map((item) => (
                    <div key={item.name} className="bg-[#F2F5F8] p-5 border border-[#DDE3EC]">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-1.5 h-1.5 bg-[#D4820A]" />
                        <p className="font-semibold text-sm text-[#0C1F3D]" style={{ fontFamily: "var(--font-display)" }}>{item.name}</p>
                      </div>
                      <p className="text-xs text-[#526272] leading-relaxed pl-3.5">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Recommendation box */}
          <div className="mt-16 bg-[#0C1F3D] p-8 flex items-start gap-6">
            <Shield size={32} className="text-[#D4820A] flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-white text-lg mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Notre recommandation : la double technologie
              </p>
              <p className="text-sm text-white/55 leading-relaxed">
                Les meilleurs systèmes anti-intrusion combinent deux technologies de détection
                (par exemple : infrarouge passif + hyperfréquence, ou ultrason + infrarouge).
                Cette redondance élimine quasi totalement les fausses alarmes dues aux courants
                d&apos;air, petits animaux ou variations thermiques — tout en maintenant une
                sensibilité maximale aux intrus.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

