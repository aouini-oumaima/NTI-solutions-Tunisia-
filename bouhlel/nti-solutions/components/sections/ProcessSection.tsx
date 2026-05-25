import { Search, PenTool, Hammer, LifeBuoy } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Audit & Étude",
    body: "Analyse de votre site, évaluation des risques, consultation des plans d'architecte. Nous définissons avec vous les zones à couvrir, les normes applicables et le budget prévisionnel.",
    duration: "J1–J7",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Conception",
    body: "Choix des équipements, plans d'implantation, synoptiques système, dossier technique complet. Devis détaillé poste par poste. Validation client avant toute commande.",
    duration: "J7–J14",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Installation",
    body: "Déploiement par nos techniciens certifiés, câblage conforme aux normes, tests fonctionnels complets, mise en service et formation des utilisateurs sur site.",
    duration: "J14–J30",
  },
  {
    number: "04",
    icon: LifeBuoy,
    title: "Maintenance",
    body: "Contrats de maintenance préventive et curative, interventions prioritaires, télésurveillance, mises à jour firmware et suivi réglementaire. Votre système reste performant dans la durée.",
    duration: "Continu",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-[#F2F5F8] section-padding relative overflow-hidden">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#D4820A]" />
            <span className="label-tag text-[#526272]">Notre méthode</span>
            <span className="w-8 h-px bg-[#D4820A]" />
          </div>
          <h2 className="heading-lg text-[#0C1F3D] max-w-2xl mx-auto">
            De l&apos;étude à la maintenance,{" "}
            <span className="gradient-text">nous restons là.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line desktop */}
          <div className="absolute top-8 left-16 right-16 h-px bg-[#DDE3EC] hidden lg:block" />

          {steps.map((step, i) => (
            <div key={step.number} className="relative group">
              {/* Step icon */}
              <div className="relative z-10 w-16 h-16 bg-white border border-[#DDE3EC] flex items-center justify-center mb-6 group-hover:border-[#D4820A] group-hover:bg-[#D4820A] transition-all duration-300">
                <step.icon
                  size={24}
                  className="text-[#D4820A] group-hover:text-white transition-colors duration-300"
                />
              </div>

              <span className="label-tag text-[#D4820A] block mb-2">{step.number}</span>

              <span className="inline-block text-xs bg-white border border-[#DDE3EC] text-[#526272] px-2 py-1 mb-3">
                {step.duration}
              </span>

              <h3
                className="font-semibold text-[#0C1F3D] text-lg mb-3"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
              >
                {step.title}
              </h3>
              <p className="text-sm text-[#526272] leading-relaxed">{step.body}</p>

              {i < steps.length - 1 && (
                <div className="absolute top-8 -right-4 text-[#DDE3EC] text-xl hidden lg:block z-20">→</div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="text-sm text-[#526272] mb-5">
            Prêt à sécuriser votre site ? Parlons de votre projet.
          </p>
          <Link href="/contact" className="btn-primary">
            Demander une étude gratuite
          </Link>
        </div>
      </div>
    </section>
  );
}
