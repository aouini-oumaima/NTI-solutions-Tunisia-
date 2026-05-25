"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "NTI Solutions a installé notre système de détection incendie adressable en moins de 3 semaines. Le sérieux de l'équipe et la qualité des équipements Hochiki nous ont immédiatement rassurés. Un vrai partenaire de confiance.",
    author: "Directeur Technique",
    company: "Hôtel 5 étoiles — Tunis",
    sector: "Hôtellerie",
  },
  {
    quote: "Nous avons confié à NTI Solutions l'intégralité de notre système de vidéosurveillance — 40 caméras IP sur 3 sites industriels. La solution est parfaitement adaptée à nos contraintes de production. Le support technique est réactif et compétent.",
    author: "Responsable Sûreté",
    company: "Groupe industriel — Sfax",
    sector: "Industrie",
  },
  {
    quote: "Notre centre commercial est équipé par NTI Solutions : contrôle d'accès, anti-intrusion et désenfumage. Tout fonctionne parfaitement depuis 4 ans. Les visites de maintenance préventive sont régulières et bien documentées.",
    author: "Gérant",
    company: "Centre commercial — Sousse",
    sector: "Commerce",
  },
  {
    quote: "NTI a su proposer une solution sur-mesure pour notre résidence de standing : accès biométrique, interphonie IP et vidéosurveillance périmétrique. L'installation a été impeccable et la formation des gardiens très claire.",
    author: "Syndic de copropriété",
    company: "Résidence privée — La Marsa",
    sector: "Résidentiel",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="bg-white section-padding overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#D4820A]" />
              <span className="label-tag text-[#526272]">Ils nous font confiance</span>
            </div>
            <h2 className="heading-md text-[#0C1F3D] mb-8">La parole de nos clients.</h2>

            <div className="flex items-center gap-4 mb-10">
              <button
                onClick={prev}
                className="w-12 h-12 border border-[#DDE3EC] flex items-center justify-center hover:border-[#D4820A] hover:bg-[#D4820A] hover:text-white transition-all duration-300"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 border border-[#DDE3EC] flex items-center justify-center hover:border-[#D4820A] hover:bg-[#D4820A] hover:text-white transition-all duration-300"
                aria-label="Témoignage suivant"
              >
                <ChevronRight size={18} />
              </button>
              <span className="text-sm text-[#526272] ml-2">
                {String(current + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`label-tag px-3 py-1.5 border transition-all duration-200 ${
                    i === current
                      ? "border-[#D4820A] bg-[#D4820A] text-white"
                      : "border-[#DDE3EC] text-[#526272] hover:border-[#D4820A] hover:text-[#D4820A]"
                  }`}
                >
                  {t.sector}
                </button>
              ))}
            </div>
          </div>

          {/* Right — card with slide animation */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="bg-[#F2F5F8] p-10 relative"
              >
                <div className="absolute top-8 right-8 text-[#DDE3EC]">
                  <Quote size={48} />
                </div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-[#D4820A]" />
                  ))}
                </div>
                <p className="text-base text-[#0C1F3D] leading-relaxed mb-8 relative z-10">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
                <div className="border-t border-[#DDE3EC] pt-6">
                  <p className="font-semibold text-[#0C1F3D] text-sm" style={{ fontFamily: "var(--font-display)" }}>
                    {testimonials[current].author}
                  </p>
                  <p className="text-xs text-[#526272] mt-1">{testimonials[current].company}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-[#D4820A]" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
