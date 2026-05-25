import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { WhyNTISection } from "@/components/sections/WhyNTISection";
import { pdfAPropos } from "@/lib/pdf-data";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "NTI Solutions, fondée en 2013 à Tunis. Découvrez notre histoire, notre équipe et notre philosophie en matière de sécurité et sûreté électronique.",
};

const timeline = [
  { year: "2013", event: "Création de NTI Solutions à Tunis par un ingénieur passionné par la sécurité électronique." },
  { year: "2015", event: "Premier grand contrat industriel — déploiement sur 5 sites de production simultanément." },
  { year: "2017", event: "Certification partenaire officiel Hochiki ESP et Apollo Fire Detectors." },
  { year: "2019", event: "Expansion de l'équipe technique à 15 ingénieurs et techniciens certifiés." },
  { year: "2021", event: "Lancement du service de télémaintenance — astreinte 24h/7j sur les systèmes critiques." },
  { year: "2023", event: "200+ projets réalisés. Présents dans 23 gouvernorats tunisiens." },
];

export default function AProposPage() {
  return (
    <>
      <PageHeader
        title="Une entreprise bâtie sur la confiance."
        subtitle="Depuis 2013, NTI Solutions protège les entreprises, institutions et industries tunisiennes avec des solutions de sécurité sur-mesure."
        breadcrumbs={[{ label: "À propos" }]}
        image="/images/controle-dacces-1.jpg"
        tag="Notre histoire"
        pdfData={pdfAPropos}
      />

      {/* Mot du fondateur */}
      <section className="bg-white section-padding">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#D4820A]" />
              <span className="label-tag text-[#526272]">Le mot du fondateur</span>
            </div>
            <h2 className="heading-md text-[#0C1F3D] mb-8">
              « Je garantis votre sécurité. »
            </h2>
            <blockquote className="border-l-2 border-[#D4820A] pl-6 mb-8">
              <p className="text-lg text-[#0C1F3D] leading-relaxed italic mb-6">
                &ldquo;Nous ne pouvons pas, à nous seuls, garantir notre sécurité,
                défendre et sécuriser nos rues, nos maisons, nos entreprises et
                nos villes. J&apos;ai décidé de créer NTI Solutions pour répondre à
                tous les problèmes liés à la sécurité. Je crois en cette équipe,
                je crois en nous, je crois en vous, et je garantis votre
                sécurité.&rdquo;
              </p>
              <footer>
                <cite className="not-italic">
                  <span className="font-semibold text-[#0C1F3D] block" style={{ fontFamily: "var(--font-display)" }}>
                    Fondateur & Directeur Général
                  </span>
                  <span className="text-sm text-[#526272]">NTI Solutions — Tunis</span>
                </cite>
              </footer>
            </blockquote>
            <p className="text-base text-[#526272] leading-relaxed">
              Cette conviction initiale guide encore aujourd&apos;hui chacune de nos
              décisions techniques et commerciales. NTI Solutions n&apos;est pas un
              distributeur de matériel — nous sommes des intégrateurs engagés,
              responsables de la performance de chaque système que nous installons.
            </p>
          </div>

          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/img 1.jpg"
              alt="Équipe NTI Solutions en intervention"
              className="w-full h-[500px] object-cover"
             loading="lazy" decoding="async"/>
            <div className="absolute bottom-6 left-6 bg-white p-6 shadow-xl max-w-[200px]">
              <p className="label-tag text-[#D4820A] mb-2">Fondée</p>
              <p
                className="font-display font-bold text-[#0C1F3D]"
                style={{ fontFamily: "var(--font-display)", fontSize: "3rem", letterSpacing: "-0.04em", lineHeight: 1 }}
              >
                2013
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#0C1F3D] section-padding">
        <div className="container-wide">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#D4820A]" />
            <span className="label-tag text-white/40">Notre mission</span>
          </div>
          <h2 className="heading-lg text-white mb-8 max-w-3xl">
            Intégrer. Maintenir. Protéger.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Intégration multimarques",
                body: "NTI Solutions sélectionne les meilleurs équipements du marché mondial et les intègre dans des systèmes cohérents, fiables et évolutifs — adaptés à chaque type de bâtiment et à chaque niveau de risque.",
              },
              {
                title: "Expertise terrain",
                body: "Nos ingénieurs et techniciens cumulent des années d'expérience sur des projets variés : hôtels, industries, centres commerciaux, établissements scolaires, hôpitaux et institutions publiques.",
              },
              {
                title: "Relation long terme",
                body: "Nous ne disparaissons pas après la livraison. Nos contrats de maintenance garantissent la performance continue de vos installations, les mises à jour réglementaires et une réactivité maximale.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-white/10 p-8 hover:border-[#D4820A]/50 transition-colors duration-300">
                <div className="w-8 h-px bg-[#D4820A] mb-5" />
                <h3
                  className="text-white font-semibold text-lg mb-4"
                  style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white section-padding">
        <div className="container-wide">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#D4820A]" />
            <span className="label-tag text-[#526272]">Notre parcours</span>
          </div>
          <h2 className="heading-md text-[#0C1F3D] mb-14">Dix ans de croissance.</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[60px] top-0 bottom-0 w-px bg-[#DDE3EC] hidden md:block" />
            <div className="space-y-10">
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-8 items-start group">
                  <div className="flex-shrink-0 w-[60px] pt-1">
                    <span
                      className="font-display font-bold text-[#D4820A]"
                      style={{ fontFamily: "var(--font-display)", fontSize: "0.875rem", letterSpacing: "0.05em" }}
                    >
                      {item.year}
                    </span>
                  </div>
                  <div className="relative flex-1 pb-0">
                    <div className="absolute -left-[37px] top-1 w-3 h-3 border-2 border-[#DDE3EC] bg-white rounded-full group-hover:border-[#D4820A] transition-colors hidden md:block" />
                    <p className="text-base text-[#0C1F3D] leading-relaxed">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <WhyNTISection />

      <CTASection />
    </>
  );
}
