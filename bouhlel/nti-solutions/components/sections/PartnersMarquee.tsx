const partners = [
  { name: "Hochiki",        description: "Détection incendie" },
  { name: "Apollo Fire",    description: "Détecteurs & modules" },
  { name: "Dahua",          description: "Vidéosurveillance" },
  { name: "Hochiki ESP",    description: "Centrale adressable" },
  { name: "Apollo XP95",    description: "Série premium" },
  { name: "Dahua NVR",      description: "Enregistrement réseau" },
  { name: "Skydome",        description: "Exutoires désenfumage" },
  { name: "Apollo Xplorer", description: "Détection intelligente" },
];

function PartnerItem({ partner }: { partner: typeof partners[0] }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-4 px-10 border-r border-[#DDE3EC] last:border-r-0">
      <div className="w-10 h-10 bg-[#D4820A]/8 border border-[#D4820A]/20 flex items-center justify-center">
        <div className="w-3 h-3 bg-[#D4820A]/50" />
      </div>
      <div>
        <p className="font-semibold text-[#0C1F3D] text-sm leading-none mb-0.5" style={{ fontFamily: "var(--font-display)" }}>
          {partner.name}
        </p>
        <p className="text-xs text-[#526272]">{partner.description}</p>
      </div>
    </div>
  );
}

export function PartnersMarquee() {
  const doubled = [...partners, ...partners];

  return (
    <section className="bg-white section-padding-sm border-y border-[#DDE3EC]">
      <div className="container-wide mb-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-[#D4820A]" />
              <span className="label-tag text-[#526272]">Nos équipementiers</span>
            </div>
            <h2 className="heading-sm text-[#0C1F3D]">Nous travaillons avec les meilleurs.</h2>
          </div>
          <p className="text-sm text-[#526272] max-w-xs leading-relaxed">
            Seuls des équipements de marques mondiales reconnues garantissent
            la fiabilité requise en sécurité critique.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee">
          {doubled.map((partner, i) => (
            <PartnerItem key={i} partner={partner} />
          ))}
        </div>
      </div>

      <div className="container-wide mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { code: "NF EN 54",    label: "Sécurité incendie" },
            { code: "ISO 9001",    label: "Management qualité" },
            { code: "NF EN 50131", label: "Systèmes alarme" },
            { code: "IP66 / IK10", label: "Protection équipements" },
          ].map((cert) => (
            <div
              key={cert.code}
              className="flex items-center gap-3 p-4 border border-[#DDE3EC] group hover:border-[#D4820A] transition-colors duration-300"
            >
              <div className="w-2 h-2 bg-[#D4820A] flex-shrink-0" />
              <div>
                <p className="font-semibold text-xs text-[#0C1F3D]" style={{ fontFamily: "var(--font-display)" }}>
                  {cert.code}
                </p>
                <p className="text-xs text-[#526272]">{cert.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
