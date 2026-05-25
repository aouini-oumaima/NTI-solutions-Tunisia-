"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const domains = [
  {
    id: "01",
    title: "Vidéo-surveillance",
    description:
      "Caméras IP haute résolution, dômes, PTZ et thermiques. Enregistreurs DVR, NVR et XVR. Visualisation mobile 24/7.",
    href: "/surete/videosurveillance",
    image: "/images/Les caméras Numériques IP.jpg",
    tag: "Sûreté",
  },
  {
    id: "02",
    title: "Contrôle d'accès",
    description:
      "Tourniquets, portiques, couloirs sécurisés, lecteurs biométriques et cartes RFID. Gestion centralisée des droits.",
    href: "/surete/controle-acces",
    image: "/images/controle-dacces-1.jpg",
    tag: "Sûreté",
  },
  {
    id: "03",
    title: "Anti-intrusion",
    description:
      "Alarmes filaires et sans fil, détecteurs de mouvement, contacts magnétiques, transmetteurs GSM et sirènes.",
    href: "/surete/controle-acces/anti-intrusion",
    image: "/images/PORTES.jpg",
    tag: "Sûreté",
  },
  {
    id: "04",
    title: "Détection incendie",
    description:
      "Centrales conventionnelles et adressables Hochiki/Apollo. Détecteurs fumée, chaleur et flamme. Déclencheurs manuels.",
    href: "/securite/detection-incendie",
    image: "/images/Le-systeme-de-securite-incendie.jpg.png",
    tag: "Sécurité",
  },
  {
    id: "05",
    title: "Désenfumage",
    description:
      "Exutoires SKYDOME, tourelles d'extraction, amenées d'air, écrans de cantonnement et rideaux coupe-feu.",
    href: "/securite/desenfumage",
    image: "/images/Desenfumage-et-compartimentage-1.png",
    tag: "Sécurité",
  },
  {
    id: "06",
    title: "Lutte incendie",
    description:
      "Réseaux incendie armés (RIA/PIA), surpresseurs, bâches à eau, extincteurs automatiques à gaz.",
    href: "/securite/lutte-incendie",
    image: "/images/lutte.png",
    tag: "Sécurité",
  },
];

export function HorizontalDomainsSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-[#0C1F3D] py-20 overflow-hidden">
      {/* Header */}
      <div className="container-wide mb-10">
        <div className="flex items-end justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#D4820A]" />
              <span className="label-tag text-white/40">Nos domaines d&apos;expertise</span>
            </div>
            <h2 className="heading-lg text-white">
              6 domaines,<br />
              <span className="gradient-text">une seule équipe.</span>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 text-white/30 text-xs pb-2">
            <span className="label-tag">← glisser →</span>
          </div>
        </div>
      </div>

      {/* Drag-scroll track — CSS native, no scroll-jacking */}
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto pb-6 cursor-grab active:cursor-grabbing"
        style={{
          paddingLeft: "clamp(1.5rem, 5vw, 5rem)",
          paddingRight: "clamp(1.5rem, 5vw, 5rem)",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
          scrollSnapType: "x mandatory",
        }}
        onMouseDown={(e) => {
          const el = trackRef.current;
          if (!el) return;
          const startX = e.pageX - el.offsetLeft;
          const scrollLeft = el.scrollLeft;
          const onMove = (ev: MouseEvent) => {
            const x = ev.pageX - el.offsetLeft;
            el.scrollLeft = scrollLeft - (x - startX);
          };
          const onUp = () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseup", onUp);
          };
          window.addEventListener("mousemove", onMove);
          window.addEventListener("mouseup", onUp);
        }}
      >
        {domains.map((domain) => (
          <div
            key={domain.id}
            className="flex-shrink-0 w-[300px] md:w-[360px] group"
            style={{ scrollSnapAlign: "start" }}
          >
            <Link href={domain.href} className="block" draggable={false}>
              {/* Image */}
              <div className="relative h-[280px] md:h-[340px] overflow-hidden mb-5 img-zoom-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={domain.image}
                  alt={domain.title}
                  className="zoom-target w-full h-full object-cover"
                  draggable={false}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[#D4820A]/0 group-hover:bg-[#D4820A]/8 transition-all duration-500" />

                <div className="absolute top-4 left-4">
                  <span className="label-tag text-white/40">{domain.id}</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="label-tag bg-white/10 backdrop-blur-sm text-white/70 px-3 py-1.5">
                    {domain.tag}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 w-9 h-9 bg-[#D4820A] flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowRight size={16} className="text-white" />
                </div>
              </div>

              {/* Text */}
              <div>
                <div className="w-6 h-px bg-[#D4820A] mb-3 group-hover:w-10 transition-all duration-300" />
                <h3
                  className="text-white font-semibold mb-2 group-hover:text-[#D4820A] transition-colors"
                  style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", letterSpacing: "-0.02em" }}
                >
                  {domain.title}
                </h3>
                <p className="text-xs text-white/40 leading-relaxed line-clamp-2">
                  {domain.description}
                </p>
              </div>
            </Link>
          </div>
        ))}

        {/* End card — CTA */}
        <div
          className="flex-shrink-0 w-[220px] flex items-center justify-center"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="text-center px-4">
            <p className="text-white/30 text-xs mb-5 leading-relaxed">
              Un projet multi-domaines ?
            </p>
            <Link href="/contact" className="btn-primary text-sm py-3 px-5">
              Parlons-en
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Hide scrollbar for webkit */}
      <style>{`
        .overflow-x-auto::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
