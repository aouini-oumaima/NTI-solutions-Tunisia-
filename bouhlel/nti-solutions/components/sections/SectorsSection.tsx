import { Hotel, Factory, Building2, GraduationCap, Hospital, ShoppingBag } from "lucide-react";

const sectors = [
  { icon: Hotel,         label: "Hôtellerie", desc: "Hôtels, resorts, résidences de tourisme" },
  { icon: Factory,       label: "Industrie",  desc: "Usines, entrepôts, zones franches" },
  { icon: Building2,     label: "Tertiaire",  desc: "Bureaux, sièges sociaux, tours" },
  { icon: GraduationCap, label: "Éducation",  desc: "Universités, lycées, campus" },
  { icon: Hospital,      label: "Santé",      desc: "Hôpitaux, cliniques, laboratoires" },
  { icon: ShoppingBag,   label: "Commerce",   desc: "Centres commerciaux, boutiques" },
];

export function SectorsSection() {
  return (
    <section className="bg-[#F2F5F8] section-padding overflow-hidden">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#D4820A]" />
              <span className="label-tag text-[#526272]">Secteurs d&apos;activité</span>
            </div>
            <h2 className="heading-lg text-[#0C1F3D]">
              Nous intervenons partout<br />
              <span className="gradient-text">où la sécurité compte.</span>
            </h2>
          </div>
          <p className="text-sm text-[#526272] max-w-xs leading-relaxed self-end">
            Chaque secteur a ses spécificités réglementaires et ses risques propres.
            NTI Solutions adapte chaque solution à votre contexte.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {sectors.map((s) => (
            <div
              key={s.label}
              className="group bg-white border border-[#DDE3EC] p-6 text-center hover:border-[#D4820A] hover:shadow-lg transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 border border-[#DDE3EC] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D4820A] group-hover:border-[#D4820A] transition-all duration-300">
                <s.icon size={20} className="text-[#D4820A] group-hover:text-white transition-colors duration-300" />
              </div>
              <p
                className="font-semibold text-[#0C1F3D] text-sm mb-1.5"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
              >
                {s.label}
              </p>
              <p className="text-xs text-[#526272] leading-snug">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#0C1F3D] p-6 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-sm text-white/55 text-center md:text-left">
            Votre secteur n&apos;est pas listé ? Nous travaillons avec toute entreprise tunisienne
            ayant un besoin en sécurité électronique.
          </p>
          <a href="/contact" className="btn-primary whitespace-nowrap text-sm flex-shrink-0">
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
}
