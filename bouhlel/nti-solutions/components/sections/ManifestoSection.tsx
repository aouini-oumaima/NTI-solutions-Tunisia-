import React from "react";

const lines = [
  "La sécurité n'est pas un produit.",
  "C'est une promesse.",
  "Celle de protéger ce qui compte.",
];

export function ManifestoSection() {
  return (
    <section className="relative bg-white section-padding overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#0C1F3D 1px, transparent 1px), linear-gradient(90deg, #0C1F3D 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-narrow text-center relative">
        {/* Label */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className="w-8 h-px bg-[#D4820A]" />
          <span className="label-tag text-[#526272]">Notre philosophie</span>
          <span className="w-8 h-px bg-[#D4820A]" />
        </div>

        {/* Big lines */}
        <div className="space-y-4 mb-12">
          {lines.map((line, i) => (
            <p
              key={i}
              className="font-display font-semibold leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 4.5vw, 4rem)",
                letterSpacing: "-0.03em",
                color: i === 1 ? "#D4820A" : "#0C1F3D",
              }}
            >
              {line}
            </p>
          ))}
        </div>

        <p className="text-base md:text-lg text-[#526272] leading-relaxed max-w-2xl mx-auto mb-16">
          Depuis 2013, NTI Solutions conçoit, installe et maintient des systèmes
          de sécurité électronique pour les entreprises, industries et
          institutions tunisiennes — avec une exigence que nous n&apos;avons jamais
          compromise.
        </p>

        {/* Stats strip */}
        <div className="grid grid-cols-3 gap-8 border-t border-[#DDE3EC] pt-10">
          {[
            { value: "2013", label: "Fondée" },
            { value: "200+", label: "Projets livrés" },
            { value: "100%", label: "Couverture nationale" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="font-display font-semibold text-[#0C1F3D] mb-1"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                {stat.value}
              </p>
              <p className="text-xs text-[#526272] tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
