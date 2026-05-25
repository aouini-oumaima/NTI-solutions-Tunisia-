import { ShieldCheck, Wrench, Users, MapPin } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Confiance",
    body: "Une réputation bâtie sur la qualité et la rigueur technique depuis 2013. Chaque installation respecte les normes en vigueur et les exigences de votre assureur.",
    accent: "01",
  },
  {
    icon: Wrench,
    title: "Intégration",
    body: "Intégration et maintenance multimarques : Hochiki, Apollo, Dahua et d'autres équipementiers de référence mondiale. Un seul contrat, un seul interlocuteur.",
    accent: "02",
  },
  {
    icon: Users,
    title: "Pérennité",
    body: "Notre équipe d'ingénieurs et de techniciens certifiés vous accompagne de l'avant-projet jusqu'à la maintenance préventive et curative sur le long terme.",
    accent: "03",
  },
  {
    icon: MapPin,
    title: "Proximité",
    body: "Présents sur l'ensemble du territoire national tunisien. Intervention rapide partout, avec une connaissance fine du tissu économique et réglementaire local.",
    accent: "04",
  },
];

export function WhyNTISection() {
  return (
    <section className="bg-white section-padding">
      <div className="container-wide">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-end">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#D4820A]" />
              <span className="label-tag text-[#526272]">Nos valeurs fondatrices</span>
            </div>
            <h2 className="heading-lg text-[#0C1F3D]">Ce qui nous distingue.</h2>
          </div>
          <p className="text-base text-[#526272] leading-relaxed self-end">
            Quatre principes que nous n&apos;avons jamais compromis depuis la création
            de NTI Solutions — et qui définissent la façon dont nous travaillons
            avec chacun de nos clients.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val) => (
            <div
              key={val.title}
              className="group relative border border-[#DDE3EC] p-8 card-lift bg-white"
            >
              <span
                className="absolute top-4 right-5 font-display text-6xl font-bold text-[#F0F0F0] group-hover:text-[#D4820A]/10 transition-colors duration-500 select-none"
                aria-hidden="true"
                style={{ fontFamily: "var(--font-display)", lineHeight: 1 }}
              >
                {val.accent}
              </span>

              <div className="w-8 h-px bg-[#D4820A] mb-6 group-hover:w-full transition-all duration-500" />

              <div className="w-12 h-12 rounded-full border border-[#DDE3EC] flex items-center justify-center mb-6 group-hover:border-[#D4820A] group-hover:bg-[#D4820A] transition-all duration-300">
                <val.icon
                  size={20}
                  className="text-[#D4820A] group-hover:text-white transition-colors duration-300"
                />
              </div>

              <h3
                className="font-semibold text-[#0C1F3D] mb-3 text-lg"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
              >
                {val.title}
              </h3>
              <p className="text-sm text-[#526272] leading-relaxed">{val.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
