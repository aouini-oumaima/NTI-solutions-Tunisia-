"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: 13,  suffix: "+",  label: "Années d'expérience",  description: "Depuis 2013 au service de la sécurité tunisienne" },
  { value: 200, suffix: "+",  label: "Projets réalisés",     description: "Installations livrées dans tous les secteurs d'activité" },
  { value: 150, suffix: "+",  label: "Clients actifs",       description: "Entreprises, hôtels, industries et institutions" },
  { value: 24,  suffix: "/7", label: "Support technique",    description: "Astreinte permanente pour les systèmes critiques" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    const steps = 50;
    const increment = value / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCount(Math.min(Math.round(increment * step), value));
      if (step >= steps) clearInterval(timer);
    }, 1600 / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function StatsSection() {
  return (
    <section className="relative bg-[#0C1F3D] section-padding overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,130,10,0.08)_0%,transparent_70%)]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container-wide relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-end">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#D4820A]" />
              <span className="label-tag text-white/40">NTI en chiffres</span>
            </div>
            <h2 className="heading-lg text-white">Une décennie de confiance.</h2>
          </div>
          <p className="text-base text-white/45 leading-relaxed self-end">
            Chaque chiffre représente une installation réussie, un client
            satisfait, un bâtiment mieux protégé. La confiance ne se décrète
            pas — elle se construit projet après projet.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0C1F3D] p-10 group hover:bg-[#102040] transition-colors duration-300 relative"
            >
              <div className="absolute top-0 left-0 w-0 h-px bg-[#D4820A] group-hover:w-full transition-all duration-500" />
              <p
                className="font-semibold text-white mb-3 leading-none"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,4rem)", letterSpacing: "-0.04em" }}
              >
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-white/80 font-medium text-sm mb-2" style={{ fontFamily: "var(--font-display)" }}>
                {stat.label}
              </p>
              <p className="text-white/30 text-xs leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
