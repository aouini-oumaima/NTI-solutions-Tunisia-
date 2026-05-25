import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { Briefcase, GraduationCap, Users, MapPin, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Recrutement",
  description:
    "Rejoignez l'équipe NTI Solutions. Ingénieurs et techniciens en sécurité électronique, nous recrutons des profils passionnés pour renforcer notre équipe à Tunis.",
};

const benefits = [
  "Environnement technique stimulant avec des projets variés",
  "Formation continue sur les équipements de pointe (Hochiki, Apollo, Dahua)",
  "Mobilité nationale — interventions sur tout le territoire tunisien",
  "Accompagnement par des ingénieurs seniors dès le premier jour",
  "Perspectives d'évolution rapides dans une PME en croissance",
  "Culture d'entreprise basée sur l'excellence et la confiance",
];

const positions = [
  {
    title: "Ingénieur en Sécurité Électronique",
    type: "CDI",
    location: "Tunis (déplacements nationaux)",
    level: "Bac+3 à Bac+5",
    description:
      "Étude, conception et supervision des installations de sécurité incendie, vidéosurveillance et contrôle d'accès. Gestion de la relation client et coordination des équipes terrain.",
    skills: ["Sécurité incendie (EN 54)", "CCTV / IP", "Contrôle d'accès", "AutoCAD", "Normes NF"],
  },
  {
    title: "Technicien d'Installation & Maintenance",
    type: "CDI",
    location: "Tunis (déplacements nationaux)",
    level: "Bac+2 à Bac+3",
    description:
      "Installation, câblage, programmation et maintenance des systèmes de sécurité (alarme incendie, vidéosurveillance, contrôle d'accès). Habilitations électriques requises.",
    skills: ["Câblage", "Hochiki / Apollo", "Dahua NVR", "Lecture de plans", "Électricité BT"],
  },
  {
    title: "Commercial Technico-Commercial",
    type: "CDI",
    location: "Grand Tunis",
    level: "Bac+3 (profil technique apprécié)",
    description:
      "Développement du portefeuille client B2B, réponse aux appels d'offres, présentation des solutions techniques NTI, suivi commercial de la prospection à la signature.",
    skills: ["Prospection B2B", "Rédaction d'offres", "Négociation", "Connaissance sécurité", "CRM"],
  },
];

export default function RecrutementPage() {
  return (
    <>
      <PageHeader
        title="Rejoignez l'équipe NTI."
        subtitle="Nous cherchons des profils passionnés qui partagent notre exigence de qualité et notre engagement pour la sécurité des personnes et des biens."
        breadcrumbs={[{ label: "Recrutement" }]}
        image="/images/systeme-de-comtrole-de-ronde-1.jpg"
        tag="Carrières"
      />

      {/* Intro + Benefits */}
      <section className="bg-white section-padding">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#D4820A]" />
              <span className="label-tag text-[#526272]">Travailler chez NTI</span>
            </div>
            <h2 className="heading-md text-[#0C1F3D] mb-6">
              Une équipe d&apos;experts,<br />une culture d&apos;excellence.
            </h2>
            <p className="text-base text-[#526272] leading-relaxed mb-6">
              NTI Solutions est une PME tunisienne en pleine croissance. Depuis 2013,
              nous bâtissons une équipe de talents techniques qui partagent la même
              passion pour la sécurité électronique et le service client de qualité.
            </p>
            <p className="text-base text-[#526272] leading-relaxed">
              Nos collaborateurs interviennent sur des projets variés — hôtels,
              industries, universités, cliniques, centres commerciaux — et bénéficient
              d&apos;une montée en compétences continue sur des équipements de pointe.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#0C1F3D] mb-6 text-lg" style={{ fontFamily: "var(--font-display)" }}>
              Ce que nous offrons
            </h3>
            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#D4820A] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#526272] leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="bg-[#F2F5F8] section-padding">
        <div className="container-wide">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#D4820A]" />
            <span className="label-tag text-[#526272]">Postes ouverts</span>
          </div>
          <h2 className="heading-md text-[#0C1F3D] mb-12">
            Nos offres d&apos;emploi.
          </h2>

          <div className="space-y-6">
            {positions.map((pos) => (
              <div key={pos.title} className="bg-white border border-[#DDE3EC] p-8 group hover:border-[#D4820A] transition-colors duration-300">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3
                      className="font-semibold text-[#0C1F3D] text-xl mb-2"
                      style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
                    >
                      {pos.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-xs text-[#526272]">
                      <span className="flex items-center gap-1">
                        <Briefcase size={12} />
                        {pos.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {pos.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <GraduationCap size={12} />
                        {pos.level}
                      </span>
                    </div>
                  </div>
                  <span className="label-tag bg-[#D4820A]/8 text-[#D4820A] px-3 py-1.5 border border-[#D4820A]/20">
                    Recrutement ouvert
                  </span>
                </div>

                <p className="text-sm text-[#526272] leading-relaxed mb-5">
                  {pos.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {pos.skills.map((s) => (
                    <span key={s} className="label-tag border border-[#DDE3EC] text-[#526272] px-2.5 py-1">
                      {s}
                    </span>
                  ))}
                </div>

                <a
                  href={`mailto:contact@ntisolutions.com.tn?subject=Candidature — ${pos.title}`}
                  className="btn-outline-dark text-sm py-2.5 px-5 inline-flex"
                >
                  Postuler par email →
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10 border border-[#DDE3EC] p-6 bg-white flex items-start gap-4">
            <Users size={20} className="text-[#D4820A] flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-sm text-[#0C1F3D] mb-1" style={{ fontFamily: "var(--font-display)" }}>
                Candidature spontanée
              </p>
              <p className="text-xs text-[#526272] leading-relaxed">
                Votre profil ne correspond pas exactement à nos annonces mais vous souhaitez
                rejoindre l&apos;aventure NTI Solutions ? Envoyez-nous votre CV et lettre de
                motivation à{" "}
                <a href="mailto:contact@ntisolutions.com.tn" className="text-[#D4820A] hover:underline">
                  contact@ntisolutions.com.tn
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
