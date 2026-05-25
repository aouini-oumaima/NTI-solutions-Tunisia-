"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Flame, Camera } from "lucide-react";

const words = ["Nous", "sécurisons", "la", "sûreté."];

const badges = [
  { icon: Camera,      label: "Zoom optique x32" },
  { icon: ShieldCheck, label: "Certifié NF EN 54" },
  { icon: Flame,       label: "Support 24/7" },
];

export function HeroSection() {
  return (
    <section
      className="relative h-screen min-h-[700px] overflow-hidden flex items-center"
      style={{ background: "linear-gradient(135deg, #0C1F3D 0%, #102040 55%, #0E2A50 100%)" }}
    >
      {/* ── Subtle grid ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* ── Diagonal geometry — right panel background ── */}
      <div
        className="absolute right-0 top-0 bottom-0 z-0 pointer-events-none"
        style={{
          width: "52%",
          background: "linear-gradient(155deg, transparent 0%, rgba(212,130,10,0.04) 40%, rgba(21,42,82,0.6) 100%)",
          clipPath: "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      />

      {/* ── Radial amber glow behind image ── */}
      <div
        className="absolute z-0 pointer-events-none"
        style={{
          right: "4%",
          top: "50%",
          transform: "translate(0, -50%)",
          width: "480px",
          height: "480px",
          background: "radial-gradient(ellipse at center, rgba(212,130,10,0.18) 0%, rgba(212,130,10,0.06) 45%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* ── Noise texture ── */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ── Corner marks ── */}
      <div className="absolute top-24 right-10 w-14 h-14 border-t border-r border-white/10 z-10" />
      <div className="absolute top-24 left-10 w-14 h-14 border-t border-l border-white/10 z-10 hidden lg:block" />
      <div className="absolute bottom-10 left-10 w-10 h-10 border-b border-l border-[#D4820A]/25 z-10 hidden lg:block" />

      {/* ── Amber accent lines top-right ── */}
      <div className="absolute top-0 right-0 w-[1px] h-36 bg-gradient-to-b from-[#D4820A] to-transparent z-10" />
      <div className="absolute top-0 right-0 h-[1px] w-36 bg-gradient-to-l from-[#D4820A] to-transparent z-10" />

      {/* ── Main layout ── */}
      <div className="relative z-10 container-wide w-full flex items-center h-full pt-24 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center w-full">

          {/* LEFT — Text content */}
          <div className="flex flex-col justify-center">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-10 h-[1.5px] bg-[#D4820A]" />
              <span className="label-tag text-white/45">NTI Solutions · Tunisie · Fondée 2013</span>
            </motion.div>

            {/* Headline — word by word */}
            <h1 className="heading-xl text-white mb-8">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 52 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.4 + i * 0.13,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  className="inline-block mr-[0.22em]"
                >
                  {word === "sûreté." ? (
                    <span className="gradient-text">{word}</span>
                  ) : word}
                </motion.span>
              ))}
            </h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-base md:text-lg text-white/55 max-w-[480px] mb-10 leading-relaxed"
            >
              Détection incendie · Vidéosurveillance · Contrôle d&apos;accès.<br />
              Solutions sur-mesure pour tout le territoire tunisien.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.15 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link href="/securite" className="btn-primary group text-sm px-7 py-3.5">
                Nos solutions
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="btn-outline text-sm px-7 py-3.5">
                Demander un devis
              </Link>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="flex items-center gap-8 flex-wrap"
            >
              {[
                { value: "2013", label: "Fondée" },
                { value: "200+", label: "Projets" },
                { value: "24/7", label: "Support" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className={`flex items-center gap-4 ${i > 0 ? "pl-8 border-l border-white/10" : ""}`}
                >
                  <div>
                    <p
                      className="text-xl font-bold text-white leading-none"
                      style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
                    >
                      {s.value}
                    </p>
                    <p className="text-[10px] text-white/35 tracking-widest uppercase mt-0.5">{s.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Product image + badges */}
          <div className="relative hidden lg:flex items-center justify-center">
            {/* Ring decorations behind the image */}
            <div
              className="absolute"
              style={{
                width: "420px",
                height: "420px",
                border: "1px solid rgba(212,130,10,0.12)",
                borderRadius: "50%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <div
              className="absolute"
              style={{
                width: "320px",
                height: "320px",
                border: "1px solid rgba(212,130,10,0.08)",
                borderRadius: "50%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />

            {/* The cutout image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative z-10"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/camera-ptz-hero.png"
                alt="Caméra PTZ haute résolution — NTI Solutions"
                style={{
                  height: "clamp(380px, 58vh, 580px)",
                  width: "auto",
                  maxWidth: "460px",
                  objectFit: "contain",
                  filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.5))",
                }}
              />
            </motion.div>

            {/* Floating badges */}
            {badges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + i * 0.15, duration: 0.6 }}
                className="absolute flex items-center gap-2.5 bg-[#0C1F3D]/80 border border-white/10 px-3.5 py-2.5 z-20"
                style={{
                  left: i === 0 ? "2%" : i === 2 ? "6%" : undefined,
                  right: i === 1 ? "2%" : undefined,
                  top: i === 0 ? "18%" : i === 2 ? "78%" : undefined,
                  bottom: i === 1 ? "28%" : undefined,
                }}
              >
                <badge.icon size={13} className="text-[#D4820A]" />
                <span className="text-xs text-white/75 font-medium tracking-wide whitespace-nowrap">
                  {badge.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
        />
        <span className="label-tag text-white/25">Défiler</span>
      </motion.div>
    </section>
  );
}
