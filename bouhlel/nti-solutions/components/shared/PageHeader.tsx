"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { PDFDownloadButton } from "./PDFDownloadButton";
import type { ArticlePDFData } from "@/components/pdf/NTIArticlePDF";
import { Img } from "@/components/ui/Img";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs: Breadcrumb[];
  image?: string;
  tag?: string;
  pdfData?: ArticlePDFData;
}

export function PageHeader({
  title,
  subtitle,
  breadcrumbs,
  image,
  tag,
  pdfData,
}: PageHeaderProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0C1F3D 0%, #0E2448 100%)" }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Right image panel — diagonal clip */}
      {image && (
        <div
          className="absolute inset-y-0 right-0 hidden lg:block"
          style={{ width: "42%", clipPath: "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        >
          <Img src={image} alt="" aria-hidden className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C1F3D] via-[#0C1F3D]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1F3D]/70 via-transparent to-transparent" />
        </div>
      )}

      {/* Amber corner accent lines */}
      <div className="absolute top-0 right-0 w-[1px] h-28 bg-gradient-to-b from-[#D4820A] to-transparent" />
      <div className="absolute top-0 right-0 h-[1px] w-28 bg-gradient-to-l from-[#D4820A] to-transparent" />
      <div className="absolute bottom-0 left-0 w-[1px] h-16 bg-gradient-to-t from-[#D4820A]/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container-wide pt-32 pb-14">
        {/* Breadcrumb */}
        <motion.nav
          aria-label="Fil d'Ariane"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <ol className="flex items-center gap-2 text-[11px] text-white/35 tracking-wide">
            <li>
              <Link href="/" className="hover:text-white/60 transition-colors">Accueil</Link>
            </li>
            {breadcrumbs.map((crumb, i) => (
              <li key={i} className="flex items-center gap-2">
                <ChevronRight size={10} className="text-white/20" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white/60 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/60">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </motion.nav>

        {/* Tag */}
        {tag && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="w-7 h-px bg-[#D4820A]" />
            <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#D4820A]">
              {tag}
            </span>
          </motion.div>
        )}

        {/* Title + actions row */}
        <div className="flex items-end justify-between gap-10 flex-wrap" style={{ maxWidth: image ? "58%" : "720px" }}>
          <div className="flex-1 min-w-0">
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14, ease: [0.215, 0.61, 0.355, 1] }}
              className="text-[34px] md:text-[48px] font-bold text-white leading-[1.08] tracking-[-0.025em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {title}
            </motion.h1>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.5 }}
                className="mt-5 text-[15px] text-white/50 leading-relaxed max-w-[520px]"
              >
                {subtitle}
              </motion.p>
            )}
          </div>

          {pdfData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.38 }}
              className="flex-shrink-0 self-end pb-1"
            >
              <PDFDownloadButton
                data={pdfData}
                variant="dark"
                fileName={`NTI_${title.replace(/\s+/g, "-")}.pdf`}
              />
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom amber rule */}
      <div className="relative h-[2px]">
        <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.06)" }} />
        <div
          className="absolute left-0 top-0 h-full"
          style={{ width: "160px", background: "linear-gradient(to right, #D4820A, transparent)" }}
        />
      </div>
    </section>
  );
}
